import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function JobApplyers({jobid}: {jobid: string}) {

    try {
        const appRef = doc(db, 'app', jobid);
        const appRes = (await getDoc(appRef)).data()!
        const jobArray = Object.keys(appRes)
        return (
            <div className="cursor-default divide-y">
              {
                jobArray.map( (i) => (
                    <div key={i} className="py-2 px-3 hover:bg-muted/30 transition">
                      <p className="">{appRes[i].name}</p>
                    </div>
                ))
              }
            </div>
        )

    } catch (error) {
        return(
            <p className="text-muted-foreground/50 text-center text-sm">Noone applied yet.</p>
        )
    }
}
