import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

let db: Database | null = null;

export async function getDb() {
  if (db) return db;

  const dbPath = path.resolve(process.cwd(), '../Nexrova-web/nexrova.db');
  
  console.log('📂 Connecting to database at:', dbPath);

  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    });
    console.log('✅ Database connected successfully');
    return db;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    throw error;
  }
}
