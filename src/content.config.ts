import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    slug: z.string().optional(),
    title: z.string(),
    tagline: z.string().optional(),
    type: z.enum(["App", "SaaS", "Content", "Research", "Experiment"]).optional(),
    status: z.enum(["Launched", "In Progress", "Archived"]).optional(),
    launchDate: z.string().optional(),
    techStack: z.union([z.array(z.string()), z.string()]).optional(),
    links: z
      .object({
        live: z.string().url().optional(),
        demo: z.string().url().optional(),
        repo: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };


