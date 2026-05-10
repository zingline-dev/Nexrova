// InsForge REST API client for Nexrova
// Uses PostgREST-style database operations via InsForge REST API
// Correct Endpoint: /api/database/records/{tableName}

const INSFORGE_URL = process.env.NEXT_PUBLIC_INSFORGE_URL!;
const INSFORGE_ANON_KEY = process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY!;

const baseHeaders = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${INSFORGE_ANON_KEY}`,
};

// ─── STORAGE ────────────────────────────────────────────────────────────────

export async function uploadFile(bucket: string, file: File) {
  // Use unique filename to avoid collisions
  const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
  
  // InsForge Storage PUT endpoint (Multipart Form Data)
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${INSFORGE_URL}/api/storage/buckets/${bucket}/objects/${filename}`, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${INSFORGE_ANON_KEY}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.message || "Failed to upload file");
  }

  const data = await res.json();
  // Construct absolute URL if it's relative
  const url = data.url.startsWith('http') 
    ? data.url 
    : `${INSFORGE_URL}${data.url}`;

  return { url, key: data.key };
}

// ─── WAITLIST ──────────────────────────────────────────────────────────────

export async function addToWaitlist(email: string, source: string = "hero_form") {
  const res = await fetch(`${INSFORGE_URL}/api/database/records/waitlist`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify([{ email, source }]),
  });

  if (!res.ok) {
    const error = await res.json();
    if (error?.code === "23505" || error?.error === "DUPLICATE_KEY") {
      return { success: true, alreadyJoined: true };
    }
    throw new Error(error?.message || "Failed to join waitlist");
  }

  return { success: true, alreadyJoined: false };
}

// ─── CONTACT MESSAGES ──────────────────────────────────────────────────────

export async function submitContactMessage(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const res = await fetch(`${INSFORGE_URL}/api/database/records/contact_messages`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify([data]),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.message || "Failed to send message");
  }

  return { success: true };
}

// ─── JOB APPLICATIONS ──────────────────────────────────────────────────────

export async function submitJobApplication(data: {
  name: string;
  email: string;
  phone?: string;
  role: string;
  message?: string;
  resume_url?: string;
}) {
  const res = await fetch(`${INSFORGE_URL}/api/database/records/job_applications`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify([data]),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.message || "Failed to submit application");
  }

  return { success: true };
}
