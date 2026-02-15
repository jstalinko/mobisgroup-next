import Database from 'better-sqlite3';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'database.sqlite');
const db = new Database(DB_PATH);

console.log('Updating database schema...');

// Create transactions table
db.exec(`
  CREATE TABLE IF NOT EXISTS transactions (
    reference TEXT PRIMARY KEY,
    merchant_ref TEXT UNIQUE NOT NULL,
    amount INTEGER NOT NULL,
    status TEXT NOT NULL,
    plan_duration INTEGER NOT NULL,
    customer_name TEXT,
    customer_email TEXT,
    customer_phone TEXT,
    payment_method TEXT,
    pay_code TEXT,
    qr_url TEXT,
    checkout_url TEXT,
    created_access_key TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

console.log('Database schema updated successfully.');
