type SEOProps = {
  title: string;
  description: string;
  url: string;
  image?: string;
};

export function createSeo({ title, description, url, image }: SEOProps) {
  return {
    meta: [
      {
        title,
      },

      {
        name: "description",
        content: description,
      },

      {
        name: "robots",
        content: "index,follow",
      },

      {
        property: "og:title",
        content: title,
      },

      {
        property: "og:description",
        content: description,
      },

      {
        property: "og:url",
        content: url,
      },

      {
        property: "og:type",
        content: "website",
      },

      ...(image
        ? [
            {
              property: "og:image",
              content: image,
            },
          ]
        : []),

      {
        name: "twitter:card",
        content: "summary_large_image",
      },

      {
        name: "twitter:title",
        content: title,
      },

      {
        name: "twitter:description",
        content: description,
      },

      ...(image
        ? [
            {
              name: "twitter:image",
              content: image,
            },
          ]
        : []),
    ],

    links: [
      {
        rel: "canonical",
        href: url,
      },
    ],
  };
}
