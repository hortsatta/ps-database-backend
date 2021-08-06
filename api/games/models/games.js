const slugify = require('slugify');

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
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
