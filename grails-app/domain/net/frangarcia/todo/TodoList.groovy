package net.frangarcia.todo

import grails.rest.Resource

@Resource(uri='/todoList', formats=['json','xml'])
class TodoList {

    String name

    static hasMany = [todos:Todo]

    static constraints = {
    }
}
