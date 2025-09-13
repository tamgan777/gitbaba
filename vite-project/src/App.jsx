import ProductCard from './ProductCard.jsx'
import Greetings from './Greetings.jsx'
function App() {
  const age=10
  const name="pandey"
  const reciverdata={
    ReciverAge:10,
  ReciverName:"pandey"
  }
  
  const product="laptop"
const productprice=45000
const isavaliable=true


  return (
    <div>
      {/* <ProductCard /> */}
      <Greetings greetings={reciverdata} ReciverAge={age}/>
       

    </div>
  )
}

export default App
