import { auth } from "@/auth"

async function Profile() {
    const session = await auth();
  return (
    <>
        <div className="flex items-center justify-center w-full h-screen ">
          <pre className="whitespace-pre">
            {JSON.stringify(session, null, ' ')}
          </pre>
        </div>
    </>
  )
}

export default Profile