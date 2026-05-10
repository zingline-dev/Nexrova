import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET() {
  try {
    const db = await getDb();

    const waitlist = await db.all('SELECT * FROM waitlist ORDER BY created_at DESC');
    const contacts = await db.all('SELECT * FROM contact_messages ORDER BY created_at DESC');
    const jobs = await db.all('SELECT * FROM job_applications ORDER BY created_at DESC');

    return NextResponse.json({
      success: true,
      data: {
        waitlist,
        contacts,
        jobs
      }
    });
  } catch (error: any) {
    console.error('Admin Data Error:', error);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}
