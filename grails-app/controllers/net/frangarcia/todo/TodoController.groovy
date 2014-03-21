package net.frangarcia.todo

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class TodoController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Todo.list(params), [status: OK]
    }

    @Transactional
    def save(Todo todoInstance) {
        if (todoInstance == null) {
            render status: NOT_FOUND
            return
        }

        todoInstance.validate()
        if (todoInstance.hasErrors()) {
            render status: NOT_ACCEPTABLE
            return
        }

        todoInstance.save flush:true
        respond todoInstance, [status: CREATED]
    }

    @Transactional
    def update(Todo todoInstance) {
        if (todoInstance == null) {
            render status: NOT_FOUND
            return
        }

        todoInstance.validate()
        if (todoInstance.hasErrors()) {
            render status: NOT_ACCEPTABLE
            return
        }

        todoInstance.save flush:true
        respond todoInstance, [status: OK]
    }

    @Transactional
    def delete(Todo todoInstance) {

        if (todoInstance == null) {
            render status: NOT_FOUND
            return
        }

        todoInstance.delete flush:true
        render status: NO_CONTENT
    }

    def list(){ }
}
