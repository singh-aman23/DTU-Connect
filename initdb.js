const sql = require('better-sqlite3');
const db = sql('bus.db');

const busData = [
  {
    bus_number: 'DL1234',
    starting_location: 'connaught place',
    ending_location: 'hauz khas',
    arrival_time: '09:15',
    departure_time: '10:30',
  },
  {
    bus_number: 'DL1236', 
    starting_location: 'connaught place',
    ending_location: 'hauz khas',
    arrival_time: '11:00',
    departure_time: '12:15',
  },
  {
    bus_number: 'DL5678',
    starting_location: 'kashmere gate',
    ending_location: 'rajouri garden',
    arrival_time: '14:00',
    departure_time: '15:45',
  },
  {
    bus_number: 'DL5679', 
    starting_location: 'kashmere gate',
    ending_location: 'rajouri garden',
    arrival_time: '15:30',
    departure_time: '16:45',
  },
  {
    bus_number: 'DL9101',
    starting_location: 'dwarka',
    ending_location: 'noida sector 15',
    arrival_time: '10:05',
    departure_time: '11:20',
  },
  {
    bus_number: 'DL9102', 
    starting_location: 'dwarka',
    ending_location: 'noida sector 15',
    arrival_time: '11:45',
    departure_time: '13:00',
  },
  {
    bus_number: 'DL1121',
    starting_location: 'rohini',
    ending_location: 'vasant vihar',
    arrival_time: '16:45',
    departure_time: '18:00',
  },
  {
    bus_number: 'DL1122', 
    starting_location: 'rohini',
    ending_location: 'vasant vihar',
    arrival_time: '18:15',
    departure_time: '19:30',
  },
  {
    bus_number: 'DL3141',
    starting_location: 'lajpat nagar',
    ending_location: 'pitampura',
    arrival_time: '08:30',
    departure_time: '09:00',
  },
  {
    bus_number: 'DL3142', 
    starting_location: 'lajpat nagar',
    ending_location: 'pitampura',
    arrival_time: '09:30',
    departure_time: '10:00',
  },
  {
    bus_number: 'DL5161',
    starting_location: 'saket',
    ending_location: 'janakpuri',
    arrival_time: '11:10',
    departure_time: '12:30',
  },
  {
    bus_number: 'DL5162', 
    starting_location: 'saket',
    ending_location: 'janakpuri',
    arrival_time: '12:45',
    departure_time: '14:00',
  },
  {
    bus_number: 'DL7181',
    starting_location: 'delhi gate',
    ending_location: 'green park',
    arrival_time: '16:00',
    departure_time: '17:25',
  },
  {
    bus_number: 'DL7182', 
    starting_location: 'delhi gate',
    ending_location: 'green park',
    arrival_time: '17:40',
    departure_time: '19:00',
  },
  {
    bus_number: 'DL9202',
    starting_location: 'chandni chowk',
    ending_location: 'shalimar bagh',
    arrival_time: '13:00',
    departure_time: '14:15',
  },
  {
    bus_number: 'DL9203', 
    starting_location: 'chandni chowk',
    ending_location: 'shalimar bagh',
    arrival_time: '14:30',
    departure_time: '15:45',
  },
  {
    bus_number: 'DL1235',
    starting_location: 'greater kailash',
    ending_location: 'mehrauli',
    arrival_time: '09:30',
    departure_time: '10:00',
  },
  {
    bus_number: 'DL1237', 
    starting_location: 'greater kailash',
    ending_location: 'mehrauli',
    arrival_time: '10:15',
    departure_time: '11:00',
  },
  {
    bus_number: 'DL6789',
    starting_location: 'munirka',
    ending_location: 'sarai rohilla',
    arrival_time: '15:30',
    departure_time: '16:50',
  },
  {
    bus_number: 'DL6790', 
    starting_location: 'munirka',
    ending_location: 'sarai rohilla',
    arrival_time: '17:00',
    departure_time: '18:15',
  },
];

const passengerData = [
  { name: 'Alice Smith' },
  { name: 'Bob Johnson' },
  { name: 'Charlie Brown' },
  { name: 'David Wilson' },
  { name: 'Eva Davis' },
  { name: 'Frank Miller' },
  { name: 'Grace Lee' },
  { name: 'Henry Moore' },
  { name: 'Isla Taylor' },
  { name: 'Jack Anderson' },
  { name: 'Katherine Thomas' },
  { name: 'Liam White' },
  { name: 'Mia Harris' },
  { name: 'Noah Martin' },
  { name: 'Olivia Clark' },
];

db.prepare(`
  CREATE TABLE IF NOT EXISTS bus (
    bus_number TEXT NOT NULL,  
    starting_location TEXT NOT NULL,
    ending_location TEXT NOT NULL,
    arrival_time TEXT NOT NULL,                 
    departure_time TEXT NOT NULL                 
);
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS passenger (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  );
`).run();


const stmt = db.prepare(`
  INSERT INTO bus (bus_number, starting_location, ending_location, arrival_time, departure_time)
  VALUES (?, ?, ?, ?, ?)
`);

const stmt1= db.prepare(`
  INSERT INTO passenger (name)
  VALUES (?)
`);

passengerData.forEach(passenger => {
  stmt1.run(passenger.name);
});
busData.forEach(bus => {
  stmt.run(bus.bus_number, bus.starting_location, bus.ending_location, bus.arrival_time, bus.departure_time);
});

console.log('Database initialized with sample data.');
