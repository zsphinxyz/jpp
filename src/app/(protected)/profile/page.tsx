import { auth } from "@/auth"

async function Profile() {
    const session = await auth();
  return (
    <>
        <div className="flex items-center justify-center w-full h-screen text-5xl font-bold text-center">Profile</div>
        <pre>
          {JSON.stringify(session)}
        </pre>
    </>
  )
}

export default Profile