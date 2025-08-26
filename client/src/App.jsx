import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import RecruiterLogin from './components/RecruiterLogin'
import Dashboard from './pages/Dashboard'
import AddJob from './pages/AddJob'
import ViewApplication from './pages/ViewApplication'
import ManageJobs from './pages/ManageJobs'
import { AppContext } from './context/AppContext'
import 'quill/dist/quill.snow.css'


const App = () => {
  const { showRecruiterLogin } = useContext(AppContext)

  return (

    <div>
      {showRecruiterLogin && <RecruiterLogin />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/dashboard' element={<Dashboard />} >
          <Route path='Add-Job' element={<AddJob />} />
          <Route path='Manage-Jobs' element={<ManageJobs />} />
          <Route path='View-Applications' element={<ViewApplication />} />
        </Route>
      </Routes>
    </div>

  )
}

export default App
