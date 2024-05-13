'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('custom-tags')
      .service('myService')
      .getWelcomeMessage();
  },
});
