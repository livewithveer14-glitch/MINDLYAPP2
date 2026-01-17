export async function GET() {
  return Response.json({ 
    success: true, 
    message: 'MINDLY API WORKING!',
    timestamp: new Date().toISOString()
  })
}

export async function POST() {
  return Response.json({ 
    success: true, 
    message: 'POST endpoint ready',
    timestamp: new Date().toISOString()
  })
}
