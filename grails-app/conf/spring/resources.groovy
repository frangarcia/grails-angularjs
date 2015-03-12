import grails.rest.render.xml.*
import grails.rest.render.json.*
import net.frangarcia.todo.*

beans = {
    jsonTodoRendered(JsonRenderer, Todo){
        excludes = ['class', 'tags', 'todoLists']
    }
    xmlTodoRendered(XmlRenderer, Todo){
        excludes = ['class', 'tags', 'todoLists']
    }

    jsonTagRendered(JsonRenderer, Tag){
        excludes = ['class', 'todos']
    }
    xmlTagRendered(XmlRenderer, Tag){
        excludes = ['class', 'todos']
    }

    jsonTodoListRendered(JsonRenderer, TodoList){
        excludes = ['class', 'todos']
    }
    xmlTodoListRendered(XmlRenderer, TodoList){
        excludes = ['class', 'todos']
    }
}
