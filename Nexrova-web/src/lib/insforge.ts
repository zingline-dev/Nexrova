// InsForge REST API client for Nexrova
// Uses PostgREST-compatible API at the InsForge backend URL

const INSFORGE_URL = process.env.NEXT_PUBLIC_INSFORGE_URL!;
const INSFORGE_ANON_KEY = process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY!;

const headers = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${INSFORGE_ANON_KEY}`,
  "apikey": INSFORGE_ANON_KEY,
  "Prefer": "return=representation",
};

// ─── WAITLIST ──────────────────────────────────────────────────────────────

export async function addToWaitlist(email: string) {
  const res = await fetch(`${INSFORGE_URL}/rest/v1/waitlist`, {
    method: "POST",
    headers,
    body: JSON.stringify({ email, source: "hero_form" }),
  });

  if (!res.ok) {
    const error = await res.json();
    // Handle duplicate email gracefully
    if (error?.code === "23505") {
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
  const res = await fetch(`${INSFORGE_URL}/rest/v1/contact_messages`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
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
}) {
  const res = await fetch(`${INSFORGE_URL}/rest/v1/job_applications`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.message || "Failed to submit application");
  }

  return { success: true };
}
