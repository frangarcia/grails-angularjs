grailsAngularApp.controller("TagController",["$scope","$location","$http","TagService",function(a,c,d,e){a.query="";a.tags=e.query();a.createTag=function(){a.path=c.path("tag/create")};a.editTag=function(b){a.path=c.path("tag/"+b)};a.deleteTag=function(b){d.delete("api/tag/"+b).success(function(b){a.path=c.path("tag")})}}]);