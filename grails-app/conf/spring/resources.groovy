import grails.rest.render.xml.*
import grails.rest.render.json.*
import net.frangarcia.todo.RestAPI

beans = {
    restAPIXmlRenderer(XmlRenderer, RestAPI) {
        excludes = ['class']
    }
    restAPIJSONRenderer(JsonRenderer, RestAPI) {
        excludes = ['class']
    }
}
