import { auth } from "@/auth";
import Candidate from "./candidate";
import Employer from "./employer";

export default async function page() {
  
  const session = await auth();
  const user = session?.user

  if (user.role == 'employer') {
    return(
      <Employer />
    )
  }

  else if (user.role == 'candidate') {
    return(
      <Candidate />
    )
  }

  else{
    return(
      <p className="text-muted-foreground">Assign Role to access the data.</p>
    )
  }

}
