package net.frangarcia.todo

class TodoList {

    String name

    static hasMany = [todos:Todo]

    static constraints = {
    }
}
