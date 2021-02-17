import {generateId} from "../Utils/GenerateId.js" 

export default class Job{
    constructor({company, jobTitle, hours, salary, description, status = "Open"}){
        this.company = company,
        this.jobTitle = jobTitle,
        this.hours = hours,
        this.salary = salary,
        this.description = description
        this.id = generateId()
        this.status = status
    }

    get Template(){
        return /*html*/ `
        <div class="col-2 m-2">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title"><b>Company:  </b>${this.company}</h4>
                                <p class="card-text"><b>Job Title: </b>${this.jobTitle}</p>
                                <p class="card-text"><b>Hours: </b>${this.hours}</p>
                                <p class="card-text"><b>Salary: </b>${this.salary}</p>
                                <p class="card-text"><b>Description: </b>${this.description}</p>
                                <p class="card-text"><b>Status: </b>${this.status}</p>
                                <button class="btn btn-success" onclick="app.jobsController.applyJob('${this.id}')">Apply</button>
                                <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Next</button>
                            </div>
                        </div>
                    </div>
        `
    }
}