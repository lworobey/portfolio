// src/data/projects.ts
export type Project = {
    slug: string;
    title: string;
    summary: string;
    stack: string[];
    links: { repo?: string; demo?: string };
    image?: string;
    featured?: boolean;
    highlights?: string[];
  };
  
  export const projects: Project[] = [
    {
      slug: "video-game-db",
      title: "Video Game DB (Microservices)",
      summary:
        "Auth + game/collection services with JWT; Dockerized for dev and deployed on AWS.",
      stack: ["MERN Stack", "Docker (dev)", "AWS (cloud deploy)"],
      links: {
        repo: "https://github.com/lworobey/video-game-db",
        demo: "http://18.117.166.222",
      },
      featured: true,
      highlights: [
        "Implemented OAuth2 login with Discord using Express",
        "Integrated frontend and backend communication with Axios",
        "Built secure CRUD routes and controllers for games/collections",
        "Deployed project to AWS EC2 instance",
        "Set up CI/CD pipeline with Docker Hub integration",
      ],
    },
  ];