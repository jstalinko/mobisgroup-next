import Database from 'better-sqlite3';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'database.sqlite');

let db: Database.Database | null = null;

export function getDb() {
    if (!db) {
        db = new Database(DB_PATH);
        db.pragma('journal_mode = WAL');
        db.pragma('foreign_keys = ON');
    }
    return db;
}

export type User = {
    id: number;
    name: string | null;
    access_key: string;
    start_at: string | null;
    end_at: string | null;
    subscription_month: number;
    max_devices: number;
    created_at: string;
    updated_at: string;
};

export type Device = {
    id: number;
    user_id: number;
    user_agent: string | null;
    ip: string | null;
    device_id: string;
    status: 'active' | 'inactive';
    created_at: string;
    updated_at: string;
};
