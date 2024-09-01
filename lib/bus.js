import sql from 'better-sqlite3';
const db = sql('bus.db');

export async function getBus(starting_location, ending_location){
    const bus = db.prepare('SELECT * FROM bus WHERE starting_location = ? AND ending_location = ?').get(starting_location, ending_location);
    return bus;
}

export async function getAllBuses(){
    const buses = db.prepare('SELECT * FROM bus').all();
    return buses;
}