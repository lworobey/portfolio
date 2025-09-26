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
      title: "Video Game Database",
      summary:
        "A database of video games that allows users to sign in with discord, search for games, add them to their collection, and view their collection.",
      stack: ["MERN Stack", "Docker (dev)", "AWS (cloud deploy)"],
      links: {
        repo: "https://github.com/lworobey/video-game-db",
        demo: "http://18.117.166.222",
      },
      image: "/projects/video-game-db/home.png",
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