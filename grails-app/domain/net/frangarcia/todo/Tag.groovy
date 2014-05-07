package net.frangarcia.todo

class Tag {

    String name
    Date dateCreated
    Date lastUpdated

    static hasMany = [Todo]

    static constraints = {
        name(blank:false, unique: true)
    }
}
