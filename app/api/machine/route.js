import { NextResponse } from 'next/server'

export async function POST(req, res) {
  
  const body = req.json()
  const {text} =body
    try {
      const remoteRes = await fetch('https://mlapp-cohw7la72a-uc.a.run.app/cybersmish/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      const data = await remoteRes.json();
      return NextResponse.json(data)
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
}