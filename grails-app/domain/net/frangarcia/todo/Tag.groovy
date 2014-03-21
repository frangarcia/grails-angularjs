package net.frangarcia.todo

class Tag {

    String name

    static hasMany = [Todo]

    static constraints = {
        name(blank:false, unique: true)
    }
}
