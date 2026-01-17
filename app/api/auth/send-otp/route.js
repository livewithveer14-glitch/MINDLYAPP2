export async function POST() {
  return Response.json({ 
    success: true, 
    message: 'MINDLY API is working!',
    timestamp: new Date().toISOString()
  })
}
