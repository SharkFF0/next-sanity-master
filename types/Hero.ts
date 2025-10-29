import { PortableTextBlock } from "sanity";

export type hero = {
    _id: string;
    _createdAt: Date;
    title: string;
    content: PortableTextBlock[];
    image: string;
    url: string;
    alt: string;
};