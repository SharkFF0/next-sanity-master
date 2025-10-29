import { Project } from "@/types/Project";
import { OmMeg } from "@/types/OmMeg";
import { hero } from "@/types/Hero";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";



export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "images": image[]{
       _key,
       asset->{_id, url},
       alt
       },
      url,
      content,
      alt
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "images": image[]{
        _key,
        asset->{_id, url},
        alt
      },
      url,
      content,
      title
    }`,
    { slug }
  );
}


export async function getOmMeg(slug: string): Promise<OmMeg | null> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "om-meg" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content,
      "image": image.asset->url,
      "alt": image.alt
    }`,
    { slug }
  );
}


export async function getHero(): Promise<hero>{
    return createClient(clientConfig).fetch(
        groq`*[_type == "hero"][0]{
          _id,
          _createdAt,
          title,
          content,
          "image": image.asset->url,
          "alt": image.alt
      }`
    );
}