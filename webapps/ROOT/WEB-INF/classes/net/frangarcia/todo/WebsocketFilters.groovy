package net.frangarcia.todo

class WebsocketFilters {

    def brokerMessagingTemplate

    def filters = {
        all(controller:'*Api', action:'save|update|delete') {
            before = {
                brokerMessagingTemplate.convertAndSend "/topic/"+controllerName, controllerName+" has been called"
            }
            after = { Map model ->

            }
            afterView = { Exception e ->

            }
        }
    }
}
