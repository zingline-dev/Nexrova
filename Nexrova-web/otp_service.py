import random
import time
import sqlite3
import os
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, Optional

# --- DATABASE SETUP ---
DB_FILE = "nexrova.db"

def init_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    # Create Waitlist table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS waitlist (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            source TEXT DEFAULT 'hero_form',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    # Create Contact Messages table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS contact_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    # Create Job Applications table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS job_applications (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            role TEXT NOT NULL,
            message TEXT,
            resume_url TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

# Initialize DB on start
init_db()

# --- APP SETUP ---
app = FastAPI(title="Nexrova Master Backend")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory store for OTPs
otp_store: Dict[str, Dict] = {}

# --- MODELS ---
class OTPRequest(BaseModel):
    email: str

class VerifyRequest(BaseModel):
    email: str
    otp: str

class WaitlistRequest(BaseModel):
    email: str
    source: Optional[str] = "hero_form"

class ContactRequest(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    message: str

# --- ENDPOINTS ---

# 4. HEALTH & DB STATUS
@app.get("/")
async def health_check():
    return {"status": "online", "message": "Nexrova Master Backend is running"}

@app.get("/api/db-status")
async def db_status():
    try:
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()
        cursor.execute("SELECT datetime('now')")
        row = cursor.fetchone()
        conn.close()
        return {"status": "connected", "database": "sqlite", "time": row[0]}
    except Exception as e:
        return {"status": "error", "message": str(e)}

# 1. OTP SERVICE
@app.post("/api/otp/send")
async def send_otp(request: OTPRequest):
    email = request.email.lower()
    if not email:
        raise HTTPException(status_code=400, detail="Email is required")
    
    otp = "".join([str(random.randint(0, 9)) for _ in range(6)])
    otp_store[email] = {
        "otp": otp,
        "expires_at": time.time() + 300
    }
    
    print("\n" + "="*50)
    print(f"🔑 [OTP SERVICE] OTP for {email}: {otp}")
    print("="*50 + "\n")
    
    return {"message": "OTP sent successfully to terminal", "status": "success"}

@app.post("/api/otp/verify")
async def verify_otp(request: VerifyRequest):
    email = request.email.lower()
    otp = request.otp
    
    if email not in otp_store:
        raise HTTPException(status_code=400, detail="No OTP requested for this email")
    
    stored_data = otp_store[email]
    if time.time() > stored_data["expires_at"]:
        del otp_store[email]
        raise HTTPException(status_code=400, detail="OTP has expired")
    
    if stored_data["otp"] != otp:
        raise HTTPException(status_code=400, detail="Invalid OTP")
    
    del otp_store[email]
    return {"message": "OTP verified successfully", "status": "success"}

# 2. WAITLIST SERVICE
@app.post("/api/waitlist")
async def add_to_waitlist(request: WaitlistRequest):
    try:
        email = request.email.lower()
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()
        cursor.execute("INSERT INTO waitlist (email, source) VALUES (?, ?)", (email, request.source))
        conn.commit()
        conn.close()
        print(f"✅ [WAITLIST] New signup: {email}")
        return {"status": "success", "message": "Joined waitlist successfully"}
    except sqlite3.IntegrityError:
        return {"status": "success", "message": "Already on waitlist"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# 3. CONTACT SERVICE
@app.post("/api/contact")
async def submit_contact(request: ContactRequest):
    try:
        email = request.email.lower()
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)",
            (request.name, email, request.phone, request.message)
        )
        conn.commit()
        conn.close()
        print(f"📩 [CONTACT] Message from: {request.name}")
        return {"status": "success", "message": "Message sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
