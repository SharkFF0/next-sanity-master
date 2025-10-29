import {getHero, getOmMeg} from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';
import {PortableText} from '@portabletext/react';


export default async function Home() {
  const hero = await getHero();
  const page = await getOmMeg('kontakt-meg');

  return (

    <div>
      <div className="flex flex-col md:flex-row items-center md:pt-18 text-gray-800 py-10 ">
       <div className="md:items-start md:text-left space-y-4">
         {hero?.title && (
           <h1 className="font-bold leading-tight md:text-2xl xl:px-64">{hero.title}</h1>
         )}
         {hero?.content && (
           <div className=" prose max-w-7xl md:text-6xl xl:px-64 font-medium space-y-3">
             <PortableText value={hero.content} /> 

             {page?.title && (
              <button className="py-10 text-2xl">
                <Link
                 href={`/${page.slug}`}
                 className="bg-gray-800 text-white rounded-xl p-4 font-semibold"
                 >
                  {page.title}
                </Link>
              </button>
             )}
           </div>
         )}
       </div>


       {hero.image && (
         <Image
           src={hero.image}
           alt={hero.alt || hero.title || "Hero image"}
           width={800}
           height={800}
           className="rounded-3xl w-full max-w-md md:max-w-xl object-cover border-2 border-white/50"
         />
       )}
       </div>     
    </div>
  );
}