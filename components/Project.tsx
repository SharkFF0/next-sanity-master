import { getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import ProjectCarousel from "@/components/carousel";


export default async function ProjectsPage() {
  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    return <div className="p-8 text-gray-600">Ingen prosjekter funnet 😅</div>;
  }

  return (
    <section className="space-y-12 p-8">
      <h1 className="text-3xl font-bold mb-8">Prosjekter</h1>
      {projects.map((project, index) => (
        <li
          key={project._id}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } border rounded-xl overflow-hidden shadow hover:shadow-lg bg-gray-200`}
        >
          {project.images && project.images.length > 0 && (
            <div className="w-full md:w-1/2 p-4 rounded-xl overflow-hidden">
              <ProjectCarousel images={project.images} />
            </div>
          )}
          <div className="p-4 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-5xl font-bold mb-4">{project.name}</h2>
            {project.content && <PortableText value={project.content} />}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                className="text-blue-600 underline mt-4"
              >
                Besøk prosjekt
              </a>
            )}
          </div>
        </li>
      ))}
    </section>
  );
}
