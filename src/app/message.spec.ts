import { Message } from "./message"

describe('testing message in our app', () => {
    it('it should display hello and welcome to Revature training JWA' , () => {
        var message = new Message()
        expect(message.sayHello()).toEqual("Hello and welcome to Revature JWA Training..")
    })
})