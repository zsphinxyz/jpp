'use client' // Error components must be Client Components
 

export default function Error() {
  return (
    <section className="w-full py-10 flex items-center justify-center">
      <p className="text-muted-foreground text-xl">Something Went Wrong.</p>
    </section>
  )
}
