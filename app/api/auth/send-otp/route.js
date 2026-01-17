import { supabase } from '@/lib/supabase'

export async function GET() {
  return Response.json({ 
    success: true, 
    message: 'Send OTP endpoint',
    usage: 'POST with {identifier: "email@example.com"}'
  })
}

export async function POST(request) {
  try {
    const { identifier } = await request.json()
    
    if (!identifier) {
      return Response.json({ 
        success: false, 
        error: 'identifier required' 
      }, { status: 400 })
    }
    
    const code = Math.floor(100000 + Math.random() * 900000).toString()
    
    // INSERT INTO otps table
    const { data, error } = await supabase
      .from('otps')
      .insert([
        {
          identifier: identifier,
          code: code,
          expires_at: new Date(Date.now() + 600000) // 10 minutes
        }
      ])
      .select()
    
    if (error) {
      console.error('Database error:', error)
      throw error
    }
    
    console.log('Inserted OTP:', data)
    
    return Response.json({ 
      success: true, 
      message: 'OTP created and saved to database',
      code: code, // Remove in production
      data: data
    })
    
  } catch (error) {
    console.error('Error:', error)
    return Response.json({ 
      success: false, 
      error: error.message,
      details: 'Check if otps table exists in Supabase'
    }, { status: 500 })
  }
}
