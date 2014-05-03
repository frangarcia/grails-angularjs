package net.frangarcia.todo

import grails.rest.Resource

@Resource(uri='/tag', formats=['json','xml'])
class Tag extends RestAPI {

    String name
    Date dateCreated
    Date lastUpdated

    static hasMany = [Todo]

    static constraints = {
        name(blank:false, unique: true)
    }
}
