import Database from 'better-sqlite3';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'database.sqlite');
const db = new Database(DB_PATH);

console.log('Adding plans table...');

// Create plans table
db.exec(`
  CREATE TABLE IF NOT EXISTS plans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price INTEGER NOT NULL,
    duration INTEGER NOT NULL,
    features TEXT NOT NULL,
    is_popular BOOLEAN DEFAULT 0,
    is_active BOOLEAN DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Seed default plans if empty
const count = db.prepare('SELECT COUNT(*) as count FROM plans').get() as { count: number };

if (count.count === 0) {
    console.log('Seeding default plans...');
    const insert = db.prepare(`
        INSERT INTO plans (name, price, duration, features, is_popular)
        VALUES (?, ?, ?, ?, ?)
    `);

    const defaultPlans = [
        {
            name: '1 Bulan',
            price: 30000,
            duration: 1,
            features: JSON.stringify(['Akses Semua Drama', 'Tanpa Iklan', 'Kualitas HD', 'Support 24/7']),
            is_popular: 0
        },
        {
            name: '3 Bulan',
            price: 80000,
            duration: 3,
            features: JSON.stringify(['Hemat Rp 10.000', 'Akses Semua Drama', 'Tanpa Iklan', 'Kualitas HD', 'Prioritas Support']),
            is_popular: 1
        },
        {
            name: '6 Bulan',
            price: 150000,
            duration: 6,
            features: JSON.stringify(['Hemat Rp 30.000', 'Akses Semua Drama', 'Tanpa Iklan', 'Kualitas HD', 'VIP Badge']),
            is_popular: 0
        }
    ];

    defaultPlans.forEach(plan => {
        insert.run(plan.name, plan.price, plan.duration, plan.features, plan.is_popular ? 1 : 0);
    });
}

console.log('Plans table added and seeded successfully.');
