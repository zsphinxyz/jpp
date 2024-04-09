import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { firestore } from "./lib/firestore";
import { FirestoreAdapter } from "@auth/firebase-adapter";


export const { handlers: { GET, POST }, auth, signIn } = NextAuth({
  secret: 'LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=',
  ...authConfig,
  adapter: FirestoreAdapter(firestore),

  // debug: true,

  callbacks: {
    async jwt({token}) {
      token.uid = token.sub
      token.role = 'user'
      return token
    },

    async session({session, token}){
      if (session.user) {
        // @ts-ignore
        session.user.uid = token.uid
        // @ts-ignore
        session.user.role = 'user'
      }
      // console.log({SessionToken: token})
      return session
    },

    async signIn({profile}) {
      console.log(profile)
      return true
    }
  },
  events:{
    async updateUser() {
      
    }
  },
  pages: {
    signIn: '/sign-in',
  }

})