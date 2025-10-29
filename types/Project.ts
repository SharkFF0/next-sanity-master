import { PortableTextBlock } from "sanity";
export type ProjectImage = {
    _key: string;
    _type: 'image';
    asset: { _ref: string; _type: 'reference'; url: string };
    alt?: string;
};

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    images: ProjectImage[];
    url: string;
    content: PortableTextBlock[];
    title?: string;
}