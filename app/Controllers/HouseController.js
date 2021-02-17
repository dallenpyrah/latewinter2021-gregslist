import { ProxyState } from "../AppState.js"
import { houseService } from "../Services/HouseService.js"

function _draw(){
    let house = ProxyState.houses
    let template = ''
    house.forEach(house => template += house.Template)
    console.log(template)
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
        console.log(form)
        let rawhouse = {
            price: parseFloat(form.price.value),
            bedrooms: parseFloat(form.bedrooms.value),
            bathrooms: parseFloat(form.bathrooms.value),
            levels: parseFloat(form.levels.value),
            imgUrl: form.imgUrl.value,
            year: parseFloat(form.year.value),
            description: form.description.value
        }
        console.log(rawhouse)
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