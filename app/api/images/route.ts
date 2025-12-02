import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET() {
  try {
    const dir = path.join(process.cwd(), 'public', 'images')
    const files = await fs.readdir(dir)
    const images = files
      .filter((f) => /\.(jpe?g|png|gif|webp|avif|svg)$/i.test(f))
      .map((f) => `/images/${f}`)
    return NextResponse.json(images)
  } catch (err) {
    // If folder doesn't exist or reading fails, return empty array
    return NextResponse.json([])
  }
}
