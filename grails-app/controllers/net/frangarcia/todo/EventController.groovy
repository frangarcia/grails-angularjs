package net.frangarcia.todo

import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.SendTo

class EventController {

    @MessageMapping("/todo")
    @SendTo("/topic/todo")
    protected String todo(){
        return "todo from controller"
    }

    @MessageMapping("/tag")
    @SendTo("/topic/tag")
    protected String tag(){
        return "tag from controller"
    }

    @MessageMapping("/todoList")
    @SendTo("/topic/todoList")
    protected String todoList(){
        return "todoList from controller"
    }
}
