package net.frangarcia.todo


import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class TodoListController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond TodoList.list(params), [status: OK]
    }

    @Transactional
    def save(TodoList todoListInstance) {
        if (todoListInstance == null) {
            render status: NOT_FOUND
            return
        }

        todoListInstance.validate()
        if (todoListInstance.hasErrors()) {
            render status: NOT_ACCEPTABLE
            return
        }

        todoListInstance.save flush: true
        respond todoListInstance, [status: CREATED]
    }

    @Transactional
    def update(TodoList todoListInstance) {
        if (todoListInstance == null) {
            render status: NOT_FOUND
            return
        }

        todoListInstance.validate()
        if (todoListInstance.hasErrors()) {
            render status: NOT_ACCEPTABLE
            return
        }

        todoListInstance.save flush: true
        respond todoListInstance, [status: OK]
    }

    @Transactional
    def delete(TodoList todoListInstance) {

        if (todoListInstance == null) {
            render status: NOT_FOUND
            return
        }

        todoListInstance.delete flush: true
        render status: NO_CONTENT
    }

    def list(){ }
}
