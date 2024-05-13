
const Fuse = require('fuse.js')

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) =>  ({
  // Method 1: Creating an entirely custom action


  // Method 2: Wrapping a core action (leaves core logic in place)
  async search(ctx) {

    ctx.query = { ...ctx.query}
    const { data, meta } = await super.find(ctx);
    meta.date = Date.now()

    const options = {
      includeScore: false,
      keys: ['attributes.title', 'attributes.summary']
    }
    
    const fuse = new Fuse(data, options)
    const search = ctx.request.query.search;
    const searchResults = fuse.search(search).map(({ item }) => {
      const { id, attributes } = item;
      return { id, attributes };
    });

    const maxResults = 20;
    const limitedResults = searchResults.slice(0, maxResults);


    return { data: limitedResults, meta };
  },

}));