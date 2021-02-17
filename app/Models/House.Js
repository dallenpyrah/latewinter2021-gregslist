import {generateId} from "../Utils/GenerateId.js" 

export default class House{
    constructor({price, bedrooms, bathrooms, levels, imgUrl, year, description}){
        this.price = price;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.levels = levels;
        this.imgUrl = imgUrl;
        this.year = year;
        this.description = description;
        this.id = generateId();
    }

    get Template(){
        return /*html*/ `<div class="col-2 m-2">
        <div class="card">
            <img class="card-img-top" src="${this.imgUrl}" alt="">
            <div class="card-body">
                <h4 class="card-title">Price: $${this.price}</h4>
                <p class="card-text"><b>Bedrooms: </b>${this.bedrooms}</p>
                <p class="card-text"><b>Bathrooms: </b>${this.bathrooms}</p>
                <p class="card-text"><b>Levels: </b>${this.levels}</p>
                <p class="card-text"><b>Year: </b>${this.year}</p>
                <p class="card-text"><b>Description: </b>${this.description}</p>
                <button class="btn btn-success" onclick="app.houseController.bidHouse('${this.id}')">Bid</button>
                <button class="btn btn-danger" onclick="app.houseController.deleteHouse('${this.id}')">Delete</button>
            </div>
        </div>
    </div>`
    }

}