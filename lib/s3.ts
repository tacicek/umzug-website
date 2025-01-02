import { S3Client, PutObjectCommand, ListObjectsV2Command, DeleteObjectCommand } from '@aws-sdk/client-s3'

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

export async function uploadFile(file: Buffer, fileName: string) {
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    Body: file,
    ContentType: 'image/*',
  })

  try {
    await s3Client.send(command)
    return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`
  } catch (error) {
    console.error('Error uploading file:', error)
    throw error
  }
}

export async function listFiles() {
  const command = new ListObjectsV2Command({
    Bucket: process.env.AWS_BUCKET_NAME,
  })

  try {
    const response = await s3Client.send(command)
    return response.Contents || []
  } catch (error) {
    console.error('Error listing files:', error)
    throw error
  }
}

export async function deleteFile(fileName: string) {
  const command = new DeleteObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
  })

  try {
    await s3Client.send(command)
  } catch (error) {
    console.error('Error deleting file:', error)
    throw error
  }
} 