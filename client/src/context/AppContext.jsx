import { createContext } from "react";
import { useState ,useEffect } from "react";
import {jobsData} from '../assets/assets' 



export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    
    const [serachFilter, setSerachFilter] = useState({
        title: "",
        location: "",
    })

    const [isSearched, setIsSearched] = useState(false)

    const [jobs, setJobs] = useState([])

    const [showRecruiterLogin, setShowRecruiterLogin] = useState(false)

    // function to fetch jobs 

    const fetchJobs = async ()=>{
        setJobs(jobsData)
    }

    useEffect(() => {
    fetchJobs()
    }, [])
    
    
    const value = {
        serachFilter,
        setSerachFilter,
        isSearched,
        setIsSearched,
        jobs,
        setJobs,
        showRecruiterLogin,
        setShowRecruiterLogin
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}