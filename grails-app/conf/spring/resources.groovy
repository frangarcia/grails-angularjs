import grails.rest.render.xml.*
import grails.rest.render.json.*
import net.frangarcia.todo.*

beans = {
    jsonTodoRendered(JsonRenderer, Todo){
        excludes = ['class']
    }
    xmlTodoRendered(XmlRenderer, Todo){
        excludes = ['class']
    }

    jsonTagRendered(JsonRenderer, Tag){
        excludes = ['class']
    }
    xmlTagRendered(XmlRenderer, Tag){
        excludes = ['class']
    }

    jsonTodoListRendered(JsonRenderer, TodoList){
        excludes = ['class']
    }
    xmlTodoListRendered(XmlRenderer, TodoList){
        excludes = ['class']
    }
}
