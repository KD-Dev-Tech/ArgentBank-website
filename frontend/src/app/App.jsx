import { BrowserRouter,  Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import Login from '../pages/Login'
import Users from '../pages/Users'
import Error from "../pages/Error"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Provider } from "react-redux"
import {store} from "./store"

function App() {
  return (
   
    <div>
      <BrowserRouter>
       <Provider store={store}>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<Users />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer  />
        </Provider>
      </BrowserRouter>
    </div>
    
  )

}

export default App
