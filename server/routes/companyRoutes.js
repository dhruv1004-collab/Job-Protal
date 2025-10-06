import express from 'express'
import { ChangeJobApplicationStatus, changeVisiblity, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'

const router = express.Router()

// Register a company

router.post('/register' , registerCompany)

//Company Login
router.post('/login' , loginCompany)

// get Companydata
router.get('/company', getCompanyData)

// post a job
router.post('/post-job' , postJob)

// Get Applicants data of Company
router.get('/applicants', getCompanyJobApplicants)

// Get Company Job List
router.get('/list-jobs', getCompanyPostedJobs)

// Change Applications Status
router.post("/change-status" , ChangeJobApplicationStatus)

// Change Applications Visiblity
router.post('/change-visiblity' , changeVisiblity)