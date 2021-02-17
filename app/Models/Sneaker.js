import {generateId} from "../Utils/GenerateId.js" 



export default class Sneakers{
    constructor({type, condition, color, price, imgUrl}){
        this.type = type,
        this.condition = condition,
        this.color = color,
        this.price = price
        this.imgUrl = imgUrl,
        this.id = generateId()
    }

    get Template(){
        return /*html*/ `
        <div class="col-2 m-2">
                            <div class="card">
                                <img class="card-img-top" src="${this.imgUrl}" alt="">
                                <div class="card-body">
                                    <h4 class="card-title"><b>Type:  </b>${this.type}</h4>
                                    <p class="card-text"><b>Condition: </b>${this.condition}</p>
                                    <p class="card-text"><b>Color: </b>${this.color}</p>
                                    <p class="card-text"><b>Price: </b>${this.price}</p>
                                    <button class="btn btn-success" onclick="app.sneakersController.bidSneaker('${this.id}')">Bid</button>
                                    <button class="btn btn-danger" onclick="app.sneakersController.deleteSneaker('${this.id}')">Trash</button>
                                </div>
                            </div>
                        </div>
        `
    }


}