import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function uploadFile(file: File) {
  const fileName = `${Date.now()}-${file.name}`
  
  const { data, error } = await supabase.storage
    .from('media')
    .upload(fileName, file)

  if (error) throw error
  
  const { data: { publicUrl } } = supabase.storage
    .from('media')
    .getPublicUrl(fileName)

  return publicUrl
}

export async function listFiles() {
  const { data, error } = await supabase.storage
    .from('media')
    .list()

  if (error) throw error
  return data
}

export async function deleteFile(fileName: string) {
  const { error } = await supabase.storage
    .from('media')
    .remove([fileName])

  if (error) throw error
} 