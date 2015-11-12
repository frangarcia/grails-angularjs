The purpose of this app is basically to test new capabilities of Grails 2.5.0 and the javascript framework AngularJS

Interesting links:

* http://mrhaki.blogspot.co.uk/2013/12/grails-goodness-rendering-partial.html
* http://keyboarddays.blogspot.co.uk/2014/03/grails-on-openshift.html
* http://grailsangularjs-frangarcia.rhcloud.com/

If you want to run this application using docker, please follow run the next commands:

* docker build -t grails-angularjs .
* docker run -i -t -p 8080:8080 grails-angularjs
