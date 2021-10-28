'use strict';

const { sanitizeEntity } = require('strapi-utils');
const slugify = require('slugify');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  // Create review with linked user
  create: async (ctx) => {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);

      if (data.game) {
        const { game: gameId } = data;
        const { title } = await strapi.query('games').findOne({ id: gameId });
        data.slug = slugify(`${title} ${ctx.state.user.id}`, { lower: true });
      }
 
      data.user = ctx.state.user.id;
      entity = await strapi.services.reviews.create(data, { files });
    } else {
      if (ctx.request.body.game) {
        const { game: gameId } = ctx.request.body;
        const { title } = await strapi.query('games').findOne({ id: gameId });
        ctx.request.body.slug = slugify(`${title} ${ctx.state.user.id}`, { lower: true });
      }

      ctx.request.body.user = ctx.state.user.id;
      entity = await strapi.services.reviews.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.reviews });
  }
};
