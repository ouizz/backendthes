'use strict';

/**
 * product-spec service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-spec.product-spec');
