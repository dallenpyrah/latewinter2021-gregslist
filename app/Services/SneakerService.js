import { ProxyState } from "../AppState.js"
import Sneakers from "../Models/Sneaker.js";

class SneakerService{
    constructor(){
        console.log("Welcome to the sneakers service side of things!")
    }

    createSneaker(rawSneaker){
        let temp = ProxyState.sneakers
        temp.push(new Sneakers(rawSneaker))
        ProxyState.sneakers = temp
    }

    bidSneaker(id){
         let temp = ProxyState.sneakers
        let sneaker = temp.find(s => s.id === id)
        sneaker.price += 100
        ProxyState.sneakers = temp
    }

    deleteSneaker(id){
        let temp = ProxyState.sneakers
        let sneakersIndex = temp.findIndex(sneaker => sneaker.id === id)
        temp.splice(sneakersIndex, 1)
        ProxyState.sneakers = temp
    }
}

export const sneakerService = new SneakerService();