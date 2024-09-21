'use strict';

/**
 * product-cafe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-cafe.product-cafe');
