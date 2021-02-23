import { ProxyState } from "../AppState.js"
import Job from "../Models/Jobs.js"
import Jobs from "../Models/Jobs.js"
import { api } from "./AxiosService.js"


class JobsService{
    // constructor(){
    //     console.log("Hello from jobs service controller!")
    //     this.getJobs()
    // }

    // async getJobs(){
    //     try {
    //         const res = await api.get('jobs')
    //         ProxyState.jobs = res.data.map(rawJobData => new Jobs(rawJobData))
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // async createJob(rawJob){
    //     try {
    //         const res = await api.post('jobs', rawJob)
    //         ProxyState.jobs = [...ProxyState.jobs, new Jobs(res.data)]
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // async applyJob(id){
    //     let job = ProxyState.jobs.find(job => job.id === id)
    //     job.status = "Applied"
    //     try {
    //         const res = await api.put('jobs/' +id , job)
    //         ProxyState.jobs = ProxyState.jobs
    //     } catch (error) {
    //         console.error(error)
    //     }
       
    // }

    // async deleteJob(id){
    //     try {
    //         const res = await api.delete('jobs/' + id)
    //         this.getJobs()
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // NOTE rebuilding from memory to try and get more practice.

    constructor(){
        this.getJob()
    }

    async getJob(){
        try {
         const res = await api.get('jobs')
        ProxyState.jobs = res.data.map(rawJobData => new Jobs(rawJobData))
        } catch (error) {
            console.error(error)
        }
    }

    async createJob(rawJob){
        try {
            const res = await api.post("jobs", rawJob)
            ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
        } catch (error) {
            console.error(error)
        }
    }

    async applyJob(id){
        let job = ProxyState.jobs.find(job => job.id === id)
        job.status = "Applied"
        try {
            const res = await api.put("jobs/" + id, job)
            ProxyState.jobs = ProxyState.jobs
        } catch (error) {
            console.error(error)
        }
    }

    async deleteJob(id){
        try {
            await api.delete('jobs/' + id)
            this.getJob()
        } catch (error) {
            console.error(error)
        }
    }
}

export const jobsService = new JobsService();