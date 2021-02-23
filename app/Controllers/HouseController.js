import { ProxyState } from "../AppState.js"
import { houseService } from "../Services/HouseService.js"

function _draw(){
    let house = ProxyState.houses
    let template = ''
    house.forEach(house => template += house.Template)
    document.getElementById('houses').innerHTML = template
}

export default class HouseController{
    constructor(){
        console.log("Hi there from the house controller")
        ProxyState.on("houses",_draw)
        _draw();
    }

    createHouse(event){
        event.preventDefault();
        console.log("Hi there from the button")
        let form = event.target
        let rawhouse = {
            price: parseFloat(form.price.value),
            bedrooms: parseFloat(form.bedrooms.value),
            bathrooms: parseFloat(form.bathrooms.value),
            levels: parseFloat(form.levels.value),
            imgUrl: form.imgUrl.value,
            year: parseFloat(form.year.value),
            description: form.description.value
        }
        houseService.createHouse(rawhouse);
    }

    bidHouse(id){
        console.log("bidding")
        houseService.bidHouse(id)
    }

    deleteHouse(id){
        console.log("delete")
        houseService.deleteHouse(id)
    }
}