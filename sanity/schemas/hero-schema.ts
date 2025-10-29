import { title } from "process";

const hero = {
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}],
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true,},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                },
            ],
        },
    ],
};

export default hero;