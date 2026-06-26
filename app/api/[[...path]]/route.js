import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';

let client;
let db;

async function getDb() {
  if (db) return db;
  client = new MongoClient(process.env.MONGO_URL);
  await client.connect();
  db = client.db(process.env.DB_NAME || 'portfolio');
  return db;
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders() });
}

export async function GET(request, { params }) {
  const path = (params?.path || []).join('/');
  try {
    if (path === '' || path === 'health') {
      return NextResponse.json({ ok: true, service: 'journalist-portfolio' }, { headers: corsHeaders() });
    }
    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders() });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500, headers: corsHeaders() });
  }
}

export async function POST(request, { params }) {
  const path = (params?.path || []).join('/');
  try {
    const body = await request.json().catch(() => ({}));
    if (path === 'messages') {
      const { name, email, message } = body || {};
      if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400, headers: corsHeaders() });
      }
      const database = await getDb();
      const doc = {
        id: uuidv4(),
        name: String(name).slice(0, 200),
        email: String(email).slice(0, 200),
        message: String(message).slice(0, 5000),
        createdAt: new Date().toISOString(),
      };
      await database.collection('messages').insertOne(doc);
      return NextResponse.json({ ok: true, id: doc.id }, { headers: corsHeaders() });
    }
    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders() });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500, headers: corsHeaders() });
  }
}
