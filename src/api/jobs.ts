import express from "express";
import { createJob, deleteJob, getAllJobs, getJobById, updateJob } from "../application/jobs";


const jobsRouter = express.Router();

jobsRouter.route("/").get(getAllJobs).post(createJob);
jobsRouter.route("/:_id").get(getJobById).put(updateJob).delete(deleteJob);


//app.get("/jobs",getAllJobs).post("/jobs",createJob).get("/jobs/:_id",getJobById).delete("/jobs/:_id", deleteJob).put("/jobs/:_id", updateJob);

export default jobsRouter;