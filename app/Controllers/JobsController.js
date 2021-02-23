import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"

function _draw(){
let job = ProxyState.jobs
let template = ''
job.forEach(job => template += job.Template)
document.getElementById('jobs').innerHTML = template
}

export default class JobsController{
    constructor(){
        console.log("Hello from jobs controller!")
        ProxyState.on("jobs",_draw)
        _draw();
    }

    createJob(event){
        event.preventDefault();
        let form = event.target
        console.log("hi there from create job")
        let rawJob = {
            company: form.company.value,
            jobTitle: form.jobTitle.value,
            hours: form.hours.value,
            rate: form.rate.value,
            description: form.description.value
        }
        console.log(rawJob)
        jobsService.createJob(rawJob);

    }

    applyJob(id){
        console.log("applied")
        jobsService.applyJob(id);
    }

    deleteJob(id){
        console.log("deleted")
        jobsService.deleteJob(id);
    }

}