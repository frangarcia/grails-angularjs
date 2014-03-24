package net.frangarcia.todo

import grails.rest.Resource

@Resource(uri='/tag', formats=['json','xml'])
class Tag {

    String name

    static hasMany = [Todo]

    static constraints = {
        name(blank:false, unique: true)
    }
}
