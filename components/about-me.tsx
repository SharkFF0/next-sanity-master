// components/about-me.tsx
import { PortableText } from "@portabletext/react";
import { getOmMeg } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function AboutMe() {
  const omMeg = await getOmMeg("felix-falldalen"); // fetch the actual document

  if (!omMeg) {
    return <div className="p-8 text-gray-600">Ingen side funnet 😅</div>;
  }

  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8">
      {/* Image Section */}
      <div >
      {omMeg.image && (
        <Image
        src={omMeg.image}
        alt={omMeg.alt || "About me image"}
        height={1000}
        width={800}
        className="shadow-lg rounded-xl"
        />
      )}
      </div>

      {/* Content Section */}
       <div className="md:w-1/2 items-center flex flex-col mt-32">
        <h1 className="text-5xl font-bold mb-4">{omMeg.title}</h1>
        <div className=" max-w-[700px] text-gray-700 leading-relaxed font-semibold text-xl ">
          <PortableText value={omMeg.content} />
        </div>
      </div>
    </section>
  );
}
