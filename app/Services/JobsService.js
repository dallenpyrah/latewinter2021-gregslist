import { ProxyState } from "../AppState.js"
import Jobs from "../Models/Jobs.js"


class JobsService{
    constructor(){
        console.log("Hello from jobs service controller!")
    }

    createJob(rawJob){
        let temp = ProxyState.jobs
        temp.push(new Jobs(rawJob))
        ProxyState.jobs = temp
    }

    applyJob(id){
        let temp = ProxyState.jobs
        let job = temp.find(job => job.id === id)
        job.status = "Applied"
        ProxyState.jobs = temp
    }

    deleteJob(id){
        let temp = ProxyState.jobs
        let jobsIndex = temp.findIndex(job => job.id === id)
        console.log(jobsIndex)
        temp.splice(jobsIndex, 1)
        ProxyState.jobs = temp
    }
}

export const jobsService = new JobsService();