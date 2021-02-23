import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";

class HouseService{
    constructor(){
        console.log("Hi there from the house service.")
        this.getHouse()
    }

    async getHouse(){
        try {
            const res = await api.get('houses')
            ProxyState.houses = res.data.map(rawHouseData => new House(rawHouseData))
        } catch (error) {
            console.error(error)
        }
    }

    async createHouse(rawHouse){
        try {
          const res = await api.post('houses', rawHouse)  
            ProxyState.houses = [...ProxyState.houses, new House(res.data)]
        } catch (error) {
            console.error(error)
        }
    }

    async bidHouse(id){
        
        let house = ProxyState.houses.find(h => h.id === id)
        house.price += 1000000
        try {
            const res = await api.put('houses/' + id, house)
            ProxyState.houses = ProxyState.houses
        } catch (error) {
            console.error(error)
        }

    }

    async deleteHouse(id){
        try {
            const res = await api.delete('houses/' + id)
            this.getHouse()
        } catch (error) {
            console.error(error)
        }

    }

}

export const houseService = new HouseService();