"use strict";

var controllers = require('./lib/controllers'),
	url = require('url'),
	plugin = {},
	meta = module.parent.require('./meta');

plugin.init = function(params, callback) {
	var router = params.router,
		hostMiddleware = params.middleware,
		hostControllers = params.controllers;
		
	// We create two routes for every view. One API call, and the actual route itself.
	// Just add the buildHeader middleware to your route and NodeBB will take care of everything for you.

	router.get('/admin/plugins/affiliate', hostMiddleware.admin.buildHeader, controllers.renderAdminPage);
	router.get('/api/admin/plugins/affiliate', controllers.renderAdminPage);

	callback();
};
plugin.getThemeConfig = function(config, callback) {
	
		meta.settings.get('affiliate', function(err, settings) {
			config.affiliate=settings;
		});
	
		callback(false, config);
	};

plugin.addAdminNavigation = function(header, callback) {
	header.plugins.push({
		route: '/plugins/affiliate',
		icon: 'fa-tint',
		name: 'Affiliate'
	});

	callback(null, header);
};

module.exports = plugin;