import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Burada gerçek kimlik doğrulama mantığını uygulayacağız
        if (credentials?.username === process.env.ADMIN_USERNAME && 
            credentials?.password === process.env.ADMIN_PASSWORD) {
          return {
            id: "1",
            name: "Admin",
            email: "admin@bestofferten.ch"
          }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/admin/login',
  },
}) 