import Car from "./Models/Car.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import House from "./Models/House.js"
import Job from "./Models/Jobs.js"
import Sneakers from "./Models/Sneaker.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  //NOTE adding a type to your collections with jsdocs gives additional intellisense when referencing that collection.
  /**@type {Car[]} */
      cars = []
  // cars = [new Car({make: "Jeep", model: "Wrangler", price: 20, imgUrl: 'http://images.thetruthaboutcars.com/2011/11/Wrangler-front-quarter.jpg', year: 2012, description: "Its nice", miles: 75000}), new Car({make: "Jeep", model: "Rango", price: 1500, imgUrl: 'http://images.thetruthaboutcars.com/2011/11/Wrangler-front-quarter.jpg', year: 2012, description: "Its very nice", miles: 5000})]
  
  /**@type {House[]} */
  houses = []
  
  /**@type {Job[]} */
  jobs = []

  /**@type {Sneakers[]} */

  sneakers = [new Sneakers({type: "Jordan 1", condition: "New", color: "Red", price: 400, imgUrl: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F12%2Fair-jordan-1-retro-high-og-origin-story-stockx-1.jpg?q=75&w=800&cbr=1&fit=max"})]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
