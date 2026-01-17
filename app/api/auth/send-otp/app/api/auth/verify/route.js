import { supabase } from '@/lib/supabase'
import { SignJWT } from 'jose'

const secret = new TextEncoder().encode(process.env.JWT_SECRET)

export async function POST(request) {
  try {
    const { contact, code } = await request.json()
    
    // 1. Check OTP in database
    const { data: authCode } = await supabase
      .from('auth_codes')
      .select('*')
      .eq('contact', contact)
      .eq('code', code)
      .gt('expires_at', new Date())
      .single()

    if (!authCode) {
      return Response.json({ error: 'Invalid code' }, { status: 400 })
    }

    // 2. Find or create user
    const isEmail = contact.includes('@')
    let user
    
    if (isEmail) {
      // Check existing
      const { data: existing } = await supabase
        .from('users')
        .select('*')
        .eq('email', contact)
        .single()
      
      if (existing) {
        user = existing
      } else {
        const { data: newUser } = await supabase
          .from('users')
          .insert([{ email: contact, username: contact.split('@')[0] }])
          .select()
          .single()
        user = newUser
      }
    } else {
      // Phone user
      const { data: existing } = await supabase
        .from('users')
        .select('*')
        .eq('phone', contact)
        .single()
      
      if (existing) {
        user = existing
      } else {
        const { data: newUser } = await supabase
          .from('users')
          .insert([{ phone: contact, username: 'user_' + Date.now() }])
          .select()
          .single()
        user = newUser
      }
    }

    // 3. Create JWT token
    const token = await new SignJWT({ 
      userId: user.id,
      email: user.email,
      phone: user.phone 
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('7d')
      .sign(secret)

    return Response.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        phone: user.phone,
        username: user.username
      }
    })

  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

export async function GET() {
  return Response.json({ message: 'Use POST to verify OTP' })
}
