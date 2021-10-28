const slugify = require('slugify');

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      // const { game: gameId } = data;
      // const {  } = await strapi.query('games').find({ id: gameId });
      // console.log('foo', foo);
      if (data.title) {
        data.slug = slugify(data.title, { lower: true });
      }
    },
    beforeUpdate: async (data) => {
      if (data.title) {
        data.slug = slugify(data.title, { lower: true });
      }
    },
  },
};
