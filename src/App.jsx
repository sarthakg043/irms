import Layout from './Layout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { DepartmentDashboard, Login, NewForm, Rejected, UserDashboard } from './pages'
import './App.css'
import { ThemeProvider } from './components/ThemeProvider';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="" >
    <Route path='login' element={<Login />} />
    <Route path='' element={<Login />} />
    <Route path="/" element={<Layout />} >
      <Route path="incidentreport" element={<UserDashboard />} />
      <Route path="report" >
        <Route path="form" element={<NewForm />} />
        <Route path="rejected/:id" element={<Rejected />} />
        <Route path="department" element={<DepartmentDashboard />} />
        <Route path="*" element={<div>Error: 404</div>} />
        <Route path="" element={<div>Error: 404</div>} />
      </Route>
      <Route path="*" element={<div>Error: 404</div>} />
    </Route>
    <Route path="*" element={<div>Error: 404</div>} />
  </Route>
));
  

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
