<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main"/>
		<title>Welcome to Grails</title>
        <asset:stylesheet src="application.css"/>
	</head>
	<body>
        <div class="container">
            <div ng-view></div>
        </div>
        <asset:javascript src="application.js"/>
	</body>
</html>
