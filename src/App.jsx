import Layout from './Layout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { DepartmentDashboard, NewForm, Rejected, UserDashboard } from './pages'
import './App.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    <Route path="incidentreport" element={<UserDashboard />} />
    <Route path="report" >
      <Route path="form" element={<NewForm />} />
      <Route path="rejected" element={<Rejected />} />
      <Route path="department" element={<DepartmentDashboard />} />
    </Route>
    <Route path="*" element={<div>Error: 404</div>} />
  </Route>
))


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
