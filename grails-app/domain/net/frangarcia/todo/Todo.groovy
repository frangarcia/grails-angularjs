package net.frangarcia.todo

class Todo {

    String title
    String content
    String url

    static hasMany = [tags:Tag]
    static belongsTo = [Tag]

    static constraints = {
        title(nullable:false, blank:false)
        content(nullable:true, blank:true)
        url(nullable:true, blank:true, url: true)
    }
}
