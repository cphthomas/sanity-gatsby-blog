export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6223e351f160c88fce620048",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-gwwr2smt",
                  apiId: "a6c390cf-2bfb-42ea-8a08-9c7b8cc7f038",
                },
                {
                  buildHookId: "6223e351fec4f873afc4d7f6",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-5fgtfoe2",
                  apiId: "c97c6fc9-435b-4113-bdb1-298660091754",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/cphthomas/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-5fgtfoe2.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
