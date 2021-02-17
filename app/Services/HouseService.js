import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";

class HouseService{
    constructor(){
        console.log("Hi there from the house service.")
    }

    createHouse(rawHouse){
        let temp = ProxyState.houses
        temp.push(new House(rawHouse))
        ProxyState.houses = temp
    }

    bidHouse(id){
        let temp = ProxyState.houses
        let house = temp.find(h => h.id === id)
        house.price += 10000
        ProxyState.houses = temp

    }

    deleteHouse(id){
        let temp = ProxyState.houses
        let houseIndex = temp.findIndex(house => house.id === id)
        console.log(houseIndex)
        temp.splice(houseIndex, 1)
        ProxyState.houses = temp

    }

}

export const houseService = new HouseService();