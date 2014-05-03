package net.frangarcia.todo

import grails.rest.Resource

@Resource(uri='/todoList', formats=['json','xml'])
class TodoList extends RestAPI {

    String name
    Date dateCreated
    Date lastUpdated

    static hasMany = [todos:Todo]

    static constraints = {
    }
}
