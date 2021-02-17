import { ProxyState } from "../AppState.js"
import { sneakerService } from "../Services/SneakerService.js"

function _draw(){
    let sneaker = ProxyState.sneakers
    let template = ''
    sneaker.forEach(sneaker => template += sneaker.Template)
    document.getElementById('sneakers').innerHTML = template
}

export default class SneakersController{

    constructor(){
    console.log("Hey there from the sneakers controller!")
    ProxyState.on("sneakers",_draw)
    _draw()
    }

    createSneaker(event){
        event.preventDefault()
        let form = event.target
        console.log("Sneakers here")
        let rawSneaker = {
            type: form.type.value,
            condition: form.condition.value,
            color: form.color.value,
            price: parseFloat(form.price.value),
            imgUrl: form.imgUrl.value
        }
        sneakerService.createSneaker(rawSneaker);
    }

    bidSneaker(id){
        console.log("Hey there")
        sneakerService.bidSneaker(id);
    }

    deleteSneaker(id){
        console.log("sneaker deleted")
        sneakerService.deleteSneaker(id);
    }
}

