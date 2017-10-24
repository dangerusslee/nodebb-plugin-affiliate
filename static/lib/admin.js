'use strict';
/* globals $, app, socket */

define('admin/plugins/affiliate', ['settings'], function(Settings) {

	var ACP = {};

	ACP.init = function() {
		Settings.load('affiliate', $('.affiliate-settings'));

		$('#save').on('click', function() {
			Settings.save('affiliate', $('.affiliate-settings'), function() {
				app.alert({
					type: 'success',
					alert_id: 'affiliate-saved',
					title: 'Settings Saved',
					message: 'Please reload your NodeBB to apply these settings',
					clickfn: function() {
						socket.emit('admin.reload');
					}
				});
			});
		});
	};

	return ACP;
});