import NextAuth, {type DefaultSession } from "next-auth"
import authConfig from "./auth.config"
import { firestore } from "./lib/firestore";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { collection, doc as d, getDoc, getDocFromCache, getDocs, limit, orderBy, query, setDoc } from "firebase/firestore";
import { db } from "./lib/firebase";


declare module 'next-auth' {
  interface Session {
    user: {
      role: string | undefined
    } & DefaultSession["user"]
  }
}


export const { handlers: { GET, POST }, auth, signIn } = NextAuth({
  secret: 'LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=',
  ...authConfig,
  adapter: FirestoreAdapter(firestore),

  // debug: true,

  callbacks: {
    async jwt({token}:any) {
      
      token.id = token.sub

      // fetch session data from database profile and set session
      const docRef = d(db, 'profile', token.id);
      const doc = await getDoc(docRef)
      const data:any = doc.data()

      token.name = data.name || token.name
      token.email = data.email || token.email


      // fetch id from database users and set session
      const docRef2 = d(db, 'users', token.id);
      const doc2 = await getDoc(docRef2)
      const data2:any = doc2.data()

      token.role = data2.role || 'user';
      return token
    },

    async session({session, token}:any){

      if (session.user) {
        session.user.id = token.id
        session.user.role = token.role
        session.user.name = token.name
      }
      return session
    },


    // async signIn({profile}:any) {
    //   console.log(profile)
    //   return true
    // }
  },

  pages: {
    signIn: '/sign-in',
  }

})