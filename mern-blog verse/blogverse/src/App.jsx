import SignUp from './SignUp.jsx'
import NavBar from './NavBar.jsx'
import ProductCard from './ProductCard.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'
import {Routes,Route} from 'react-router-dom'

function App(){
  return (
    <Routes>
       <Route path="/" element={<Home/>}/>
     <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
     
      <Route path="/navbar" element={<NavBar/>}/>
      <Route path="/productcard" element={<ProductCard/>}/>

    </Routes>
  )
}

export default App;