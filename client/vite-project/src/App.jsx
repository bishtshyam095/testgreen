import './App.css'
import SignupForm from './component/SignupForm'
import LoginForm from './component/LoginForm'
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Navbar from './component/NavBar'
import Home from './component/Home'

function App() {
  return (
    // <SignupForm/>
    // <Router>
    //   <Routes> 
    //     <Route path='/' element={<SignupForm/>}/>
    //     <Route path='/login' element={<LoginForm />}/>
    //   </Routes>
    // </Router>
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route index exact element={<Home />} />
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  </>

  )
}

export default App
