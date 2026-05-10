import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

let db: Database | null = null;

export async function getDb() {
  if (db) return db;

  // We look for the database in the Nexrova-web folder (sibling directory)
  // or in the current root.
  const dbPath = path.resolve(process.cwd(), '../Nexrova-web/nexrova.db');

  db = await open({
    filename: dbPath,
    driver: sqlite3.Database
  });

  return db;
}
