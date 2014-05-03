package net.frangarcia.todo

import grails.rest.Resource

@Resource(uri='/todo', formats=['json','xml'])
class Todo extends RestAPI {

    String title
    String content
    String url
    Date dateCreated
    Date lastUpdated

    static hasMany = [tags:Tag]
    static belongsTo = [Tag]

    static constraints = {
        title(nullable:false, blank:false)
        content(nullable:true, blank:true)
        url(nullable:true, blank:true, url: true)
    }
}
