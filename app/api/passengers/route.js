import { NextResponse } from 'next/server';
import sql from 'better-sqlite3';

const db = sql('bus.db');

export async function GET() {
  try {
    const count = db.prepare('SELECT COUNT(*) AS count FROM passenger').get().count;
    return NextResponse.json({ total: count });
  } catch (error) {
    return NextResponse.error(new Error('Failed to fetch passenger count'));
  }
}
