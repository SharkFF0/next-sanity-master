import { PortableTextBlock } from "sanity";

export type OmMeg = {
    _id: string;
    _createdAt: string;
    title: string;
    slug: string;
    image: string;
    alt: string;
    content: PortableTextBlock[];
}

