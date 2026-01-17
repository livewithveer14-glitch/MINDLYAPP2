import { supabase } from '@/lib/supabase'

export async function GET() {
  return Response.json({ 
    success: true, 
    message: 'MINDLY API WORKING!',
    timestamp: new Date().toISOString()
  })
}

export async function POST(request) {
  try {
    const { identifier } = await request.json()
    
    // Generate 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString()
    
    // Save to database
    const { data, error } = await supabase
      .from('otps')
      .insert([{
        identifier: identifier,
        code: code,
        expires_at: new Date(Date.now() + 10 * 60000) // 10 minutes
      }])
      .select()
    
    if (error) throw error
    
    return Response.json({ 
      success: true, 
      message: 'OTP generated',
      code: code, // In production, remove this and send via email/SMS
      identifier: identifier
    })
    
  } catch (error) {
    return Response.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 })
  }
}
