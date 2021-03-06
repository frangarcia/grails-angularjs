<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6" ng-app="grailsAngularApp"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7" ng-app="grailsAngularApp"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8" ng-app="grailsAngularApp"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9" ng-app="grailsAngularApp"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js" ng-app="grailsAngularApp"><!--<![endif]-->
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title><g:layoutTitle default="Grails"/></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="shortcut icon" href="${assetPath(src: 'favicon.ico')}" type="image/x-icon">
		<link rel="apple-touch-icon" href="${assetPath(src: 'apple-touch-icon.png')}">
		<link rel="apple-touch-icon" sizes="114x114" href="${assetPath(src: 'apple-touch-icon-retina.png')}">
  		<asset:stylesheet src="application.css"/>
		<g:layoutHead/>
	</head>
	<body>

        <!-- Static navbar -->
        <div class="navbar navbar-default navbar-static-top" role="navigation" ng-controller="NavBarController">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <span class="navbar-brand">Grails-AngularJS TODO App</span>
                </div>
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li ng-class="{active: routeIs('/todo/')}"><a href="#/todo/">Todos</a></li>
                        <li ng-class="{active: routeIs('/tag/')}"><a href="#/tag/">Tags</a></li>
                        <li ng-class="{active: routeIs('/todoList/')}"><a href="#/todoList/">Todo Lists</a></li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </div>


        <div class="container">
            <g:layoutBody/>
        </div> <!-- /container -->
        <asset:javascript src="application.js"/>
        <asset:javascript src="spring-websocket" />
    </body>
</html>
