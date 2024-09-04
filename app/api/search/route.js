
import Database from 'better-sqlite3';

const db = new Database('bus.db');

export async function GET(request) {
  const url = new URL(request.url);
  const starting_location = url.searchParams.get('starting_location');
  const ending_location = url.searchParams.get('ending_location');

  if (!starting_location || !ending_location) {
    return new Response(
      JSON.stringify({ error: 'Both starting_location and ending_location are required.' }),
      { status: 400 }
    );
  }

  const query = `
    SELECT * FROM bus
    WHERE starting_location LIKE ? AND ending_location LIKE ?
  `;
  const stmt = db.prepare(query);
  const rows = stmt.all(`%${starting_location}%`, `%${ending_location}%`);

  return new Response(JSON.stringify({ bus: rows }), { status: 200 });
}
