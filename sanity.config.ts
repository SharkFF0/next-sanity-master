import {defineConfig} from "sanity";
import {deskTool} from "sanity/desk";
import schemas from './sanity/schemas';
import {visionTool} from '@sanity/vision'


const config = defineConfig ({
    projectId: "4jc99vc3",
    dataset: "production",
    title: "My First Sanity Project",
    apiVersion: "2025-09-08",
    basePath: "/admin",
    plugins: [deskTool(), visionTool()],
    schema: {types: schemas}
});

export default config;