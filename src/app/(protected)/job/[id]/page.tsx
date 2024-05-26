import { Button } from "@/components/ui/button"
import { db } from "@/lib/firebase"
import {  doc, getDoc } from "firebase/firestore"


export default async function Job({params}:{params: {id: string}}) {
  const docRef = doc(db, 'jobs', params.id)
  const docSnap = await getDoc(docRef)
  
  return (
    <main>
      {
        JSON.stringify(docSnap.data())
      }
      
      <Button>Apply Now</Button>

    </main>
  )
}
