import dns from 'dns';
import { NextResponse } from 'next/server';
import { promisify } from 'util';

const lookup = promisify(dns.lookup);

export async function GET() {
  try {
    const address = await lookup("direct.ponlponl123.com");
    return NextResponse.json({ ip: address.address, port: 28017 }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
