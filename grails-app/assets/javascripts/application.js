// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better 
// to create separate JavaScript files as needed.
//
//= require jquery
//= require angular/angular
//= require angular/angular-loader
//= require angular/angular-mocks
//= require angular/angular-resource
//= require angular/angular-route
//= require angular/angular-scenario
//= require angular/angular-touch
//= require_tree angular-project/
//= require_self
//= require bootstrap

if (typeof jQuery !== 'undefined') {
	(function($) {
		$('#spinner').ajaxStart(function() {
			$(this).fadeIn();
		}).ajaxStop(function() {
			$(this).fadeOut();
		});
	})(jQuery);
}

$(function() {
    var socket = new SockJS("/grails-angularjs/stomp");
    var client = Stomp.over(socket);

    client.connect({}, function() {
        client.subscribe("/topic/*Api", function(message) {
            $("#helloDiv").append(message.body);
        });
    });
});
