module.exports = ({ env }) => ({

  seo: {
    enabled: true,
  },

  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'pakalniubendruomene@gmail.com',
        defaultReplyTo: 'pakalniubendruomene@gmail.com',
      },
    },
  },

  slugify: {
    enabled: true,
    config: {
      slugifyWithCount: true,
      contentTypes: {
        article: {
          field: "slug",
          references: "title",
        },
      },
    },
  },

  translate: {
    enabled: true,
    config: {
      provider: 'deepl',
      providerOptions: {
        apiKey: '0eb605b4-3a4b-82de-f23c-469b991328db:fx',
        apiUrl: 'https://api-free.deepl.com',
        localeMap: {
          EN: 'EN-US',
        },
        apiOptions: {
          formality: 'default',
        }
      },
    },
  },

  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::article.article",
          modelName: "article",
          transliterate: true,
          queryConstraints: {
            populate: {
              categories: true,
            },
          },
          fuzzysortOptions: {
            characterLimit: 300,
            threshold: -1000,
            limit: 10,
            keys: [
              {
                name: "title",
                weight: 100,
              },
              {
                name: "summary",
                weight: -100,
              },
            ],
          },
        },
  
      ],
    },
  },

  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::article.article',
          draft: {
            url: 'http://localhost:3000/api/preview',
            query: {
              type: 'page',
              slug: '{slug}',
            },
          },
          published: {
            url: 'http://localhost:3000/{slug}',
          },
        },
    
      ],
    },
  },

});