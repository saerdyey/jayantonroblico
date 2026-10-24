import NestjsGettingStarted from "./nestjs-getting-started";

// Newest first. To add a post: create a component in this folder and add an
// entry here; it shows up on the home page and at /blog/<slug>.
const posts = [
  {
    slug: "getting-started-with-nestjs",
    title: "Getting Started with NestJS: Build a Structured REST API",
    summary:
      "Modules, controllers, providers, and validation: the core ideas of NestJS, by building a tiny tasks API from scratch.",
    date: "2026-10-24",
    readTime: "6 min read",
    tags: ["NestJS", "Node.js", "TypeScript", "Backend"],
    Content: NestjsGettingStarted,
  },
];

export const getPost = (slug) => posts.find((post) => post.slug === slug);

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export default posts;
