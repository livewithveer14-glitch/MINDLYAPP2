import cloudinary from '@/lib/cloudinary'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')
    const buffer = Buffer.from(await file.arrayBuffer())
    
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'mindly' },
        (error, result) => error ? reject(error) : resolve(result)
      )
      uploadStream.end(buffer)
    })
    
    return Response.json({
      url: result.secure_url,
      public_id: result.public_id
    })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
