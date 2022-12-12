import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
      {/* <Route path="/" /> */}
    <Routes>
      <Route path="/" element={<WelcomePage/>}/>
      <Route path="Home" element={<HomePage/>}/>
      <Route path="Login" element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
