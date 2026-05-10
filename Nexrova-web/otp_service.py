import random
import time
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict

app = FastAPI()

# Enable CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify the actual origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory store for OTPs (In production, use Redis or a database)
# format: { email: {"otp": "123456", "expires_at": 1234567890} }
otp_store: Dict[str, Dict] = {}

class OTPRequest(BaseModel):
    email: str

class VerifyRequest(BaseModel):
    email: str
    otp: str

@app.post("/api/otp/send")
async def send_otp(request: OTPRequest):
    email = request.email
    if not email:
        raise HTTPException(status_code=400, detail="Email is required")
    
    # Generate 6-digit OTP
    otp = "".join([str(random.randint(0, 9)) for _ in range(6)])
    
    # Store OTP with 5-minute expiry
    otp_store[email] = {
        "otp": otp,
        "expires_at": time.time() + 300
    }
    
    # PRINT TO TERMINAL AS REQUESTED
    print("\n" + "="*50)
    print(f"🔑 [OTP SERVICE] OTP for {email}: {otp}")
    print("="*50 + "\n")
    
    return {"message": "OTP sent successfully to terminal", "status": "success"}

@app.post("/api/otp/verify")
async def verify_otp(request: VerifyRequest):
    email = request.email
    otp = request.otp
    
    if email not in otp_store:
        raise HTTPException(status_code=400, detail="No OTP requested for this email")
    
    stored_data = otp_store[email]
    
    if time.time() > stored_data["expires_at"]:
        del otp_store[email]
        raise HTTPException(status_code=400, detail="OTP has expired")
    
    if stored_data["otp"] != otp:
        raise HTTPException(status_code=400, detail="Invalid OTP")
    
    # Success! Clear the OTP
    del otp_store[email]
    
    return {"message": "OTP verified successfully", "status": "success"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
