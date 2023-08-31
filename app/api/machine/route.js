import { NextResponse } from 'next/server'

export async function POST(req) {
  const res = await fetch('https://mlapp-cohw7la72a-uc.a.run.app/cybersmish/post',{
      method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({text: "Great news, Your package cannot be delivered due to unpaid customs fees, please confirm your payment to avoid delays:https://u.to/xjXZHw"})
  })

  const data = await res.json()

  return NextResponse.json(data)
}