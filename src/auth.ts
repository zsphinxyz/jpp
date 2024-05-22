import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { firestore } from "./lib/firestore";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { doc as d, getDoc} from "firebase/firestore";
import { db } from "./lib/firebase";


export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: 'LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=',
  ...authConfig,
  adapter: FirestoreAdapter(firestore),

  // debug: true,

  callbacks: {
    async jwt({token}) {
      
      token.id = token.sub

      // fetch session data from database profile and set session
      const docRef = d(db, 'profile', token.id! as string);
      const doc = await getDoc(docRef)
      const data = doc.data()

      token.name = data?.name || token.name
      token.email = data?.email || token.email


      // fetch id from database users and set session
      const docRef2 = d(db, 'users', token.id as string);
      const doc2 = await getDoc(docRef2)
      const data2 = doc2.data()

      token.role = data2?.role || 'user';
      return token
    },

    async session({session, token}){

      if (session.user) {
        session.user.id = token.id
        session.user.role = token.role
        session.user.name = token.name
      }
      return session
    },

    //  async signIn({session}: any){
    //   await setDoc(d(db, 'profile', session.user.id), {name: session.user.name, email: session.user.email}, {merge: true});
    //   return true
    //  }
    

  },

  pages: {
    signIn: '/sign-in',
  }

})