'use strict';

/**
 * main-ingredient service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-ingredient.main-ingredient');
