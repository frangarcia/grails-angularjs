import net.frangarcia.todo.Tag
import net.frangarcia.todo.Todo
import net.frangarcia.todo.TodoList

class BootStrap {

    def init = { servletContext ->
        def tagAngular = new Tag(name: "angular").save()
        def tagBackbone = new Tag(name: "backbone").save()
        def tagJavascript = new Tag(name: "javascript").save()

        def angularList = new TodoList(name: "Learn Angular JS").save()
        def backboneList = new TodoList(name: "Learn Backbone JS").save()

        def todo1 = new Todo(title:"Lesson 0 Tutorial AngularJS: Bootstrapping", url:"http://docs.angularjs.org/tutorial/step_00").save()
        def todo2 = new Todo(title:"Lesson 1 Tutorial AngularJS: Static Templates", url:"http://docs.angularjs.org/tutorial/step_01").save()
        def todo3 = new Todo(title:"Lesson 2 Tutorial AngularJS: Angular Templates", url:"http://docs.angularjs.org/tutorial/step_02").save()
    }
    def destroy = {
    }
}
