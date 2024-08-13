import { BrowserRouter,  Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Users from './pages/Users'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
