/**
 * Actualites.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    img_actu : { type: 'string' },

    title_actu : { type: 'string' },

    name_project : { type: 'string' },

    date_publish_actu : { type: 'datetime' },

    content_actu : { type: 'longtext' }
  }
};

