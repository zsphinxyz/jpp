import { Roboto } from 'next/font/google'
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const font = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '500', '900'],
})

export default function Home() {
  return (
    <main className={cn(font.className, "flex scroll-smooth flex-col mx-auto max-h-[1200px]")}>
      
      <section className="relative w-full h-[calc(100dvh-52px)] min-h-[500px] max-w-[2080px] mx-auto bg-secondary bg-top flex items-center">
        <div className='absolute z-0 flex items-center justify-center w-full h-full overflow-hidden'>
          <Image src='/hero.png' alt='JPP_Hero' width={600} height={600} className='object-cover object-right lg:object-contain lg:object-center opacity-30 shrink w-full h-full' />
        </div>

        <div className='text-center z-10 max-w-2xl mx-auto flex flex-col gap-7 pt-10 mb-20'>
          <h1 className="text-5xl font-extrabold text-primary tracking-tight">Header of the Page</h1>
          <p className="text-primary/70">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium excepturi neque quidem expedita repudiandae consequuntur fuga quasi, delectus veritatis saepe voluptatibus recusandae, dolore officia maxime, id vero! Ab, repudiandae mollitia?</p>
          
          <div className="flex items-center justify-center">
            {/* <input type='search' name='q' placeholder='Search...' id='searchbox' className='bg-white outline-none w-60 max-w-2xl px-5 py-2 rounded-xl text-black' />
            <button type="submit" className='bg-green-400 px-3 py-2 rounded-xl'>Search</button> */}

            <Button className='bg-green-500 hover:bg-green-600 rounded-none'>Job Seeking</Button>
            <Button className='rounded-none'>Job Posting</Button>

          </div>

        </div>

      </section>

      <section className="py-5 max-w-7xl mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius asperiores quaerat blanditiis laudantium voluptas sequi ratione. Impedit beatae laudantium sequi provident. Ut.
      </section>
    </main> 
  );
}
