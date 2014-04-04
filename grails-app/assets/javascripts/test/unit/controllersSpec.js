'use strict'

describe('Todo app controllers', function() {

    beforeEach(function(){
        this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(module('grailsAngularApp'));
    beforeEach(module('todoServices'));

    describe('Todo controller', function(){
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('todo').
                respond([{name: 'First todo'}, {name: 'Second todo'}, {name: 'Third todo'}]);

            scope = $rootScope.$new();
            ctrl = $controller('TodoController', {$scope: scope});
        }));

        it('it should create 3 todo', function() {
            expect(scope.todos).toEqualData([]);
            $httpBackend.flush();

            expect(scope.todos.length).toBe(3);

            expect(scope.todos).toEqualData(
                [{name: 'First todo'}, {name: 'Second todo'}, {name: 'Third todo'}]);
        });
    });

    describe('Tag controller', function(){
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('tag').
                respond([{name: 'First tag'}, {name: 'Second tag'}, {name: 'Third tag'}]);

            scope = $rootScope.$new();
            ctrl = $controller('TagController', {$scope: scope});
        }));

        it('it should create 3 tags', function() {
            expect(scope.tags).toEqualData([]);
            $httpBackend.flush();

            expect(scope.tags.length).toBe(3);

            expect(scope.tags).toEqualData(
                [{name: 'First tag'}, {name: 'Second tag'}, {name: 'Third tag'}]);
        });
    });

    describe('Todo list controller', function(){
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('todoList').
                respond([{name: 'First todo list'}, {name: 'Second todo list'}, {name: 'Third todo list'}]);

            scope = $rootScope.$new();
            ctrl = $controller('TodoListController', {$scope: scope});
        }));

        it('it should create 3 todo lists', function() {
            expect(scope.todoLists).toEqualData([]);
            $httpBackend.flush();

            expect(scope.todoLists.length).toBe(3);

            expect(scope.todoLists).toEqualData(
                [{name: 'First todo list'}, {name: 'Second todo list'}, {name: 'Third todo list'}]);
        });
    });
});