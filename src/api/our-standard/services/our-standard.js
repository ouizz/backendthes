'use strict';

/**
 * our-standard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-standard.our-standard');
