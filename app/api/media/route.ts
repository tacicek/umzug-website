import { NextResponse } from 'next/server'
import { listFiles } from '@/lib/supabase'

export async function GET() {
  try {
    const files = await listFiles()
    return NextResponse.json(files)
  } catch (error) {
    return NextResponse.json(
      { error: 'Fehler beim Abrufen der Medien' },
      { status: 500 }
    )
  }
} 