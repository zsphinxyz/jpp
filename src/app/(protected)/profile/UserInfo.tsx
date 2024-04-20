import { db } from "@/lib/firebase";
import { doc, getDoc, orderBy, query } from "firebase/firestore";
import { cache } from "react";


export default async function UserInfo() {

  const docRef = doc(db, 'profile', '5WrNx81gijmQIyyrKpRb');
  const docSnap = await getDoc(docRef)
  const data:any = docSnap.data()
  const array = Object.values(data)
  console.log(array)

  return (
    <section>
    {
      Object.entries(data).map( (i:any) => (
        <p className="flex"> <span className="basis-32">{i[0]}</span> <span className="basis-32">{i[1].toString()}</span> </p>
      ))
    } 
    </section>
  )
}
