package net.frangarcia.todo

class Tag {

    String name
    Date dateCreated
    Date lastUpdated

    static hasMany = [todos:Todo]
    static belongsTo = [Todo]

    static constraints = {
        name(blank:false, unique: true)
    }

    def beforeDelete() {
        Todo.withNewSession {
            this.todos.each {
                it.removeFromTags(this)
            }
            this.save()
        }
    }
}
