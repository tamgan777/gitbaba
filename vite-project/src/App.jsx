// import ProductCard from './ProductCard.jsx'
// import Student from './Student.jsx'
// import Greetings from './Greetings.jsx'
import BlogPost from "./BlogPost.jsx"
import './App.css'
function App() {
  //  const idCard={
  //   idName="gitbaba",
  //   idNumber=69,
  //   idAddress="gitlokah",
  //   idBloodGroup="O+",
  //   idCollegeName="GITBABA HUB",
  //   idAge=18

  //  }


  //   const Product1={
  //     ProductName="laptop",
  //     ProductPrice=45000,
  //     isavaliable=true
  //   }
  // const Product2={

  // }

  //   const Product=[
  //   {ProductName:"laptop",ProductPrice:45000,isavaliable:true},
  //   {ProductName:"mobile",ProductPrice:25000,isavaliable:false},
  //   {ProductName:"ac",ProductPrice:65000,isavaliable:true}
  // ]
  const Post = [
    { id: 1, author: "gitbaba", title: "post1", body: "this is post1" },
    { id: 2, author: "gitpapa", title: "post2", body: "this is post2" },
    { id: 3, author: "gitthatha", title: "post3", body: "this is post3" }
  ]
  // const reciverdata="hello gitbaba"
  // const age=18


  return (
    <div className="main" >

      {/* <Greetings greetings={reciverdata} ReciverAge={age}/> */}

      {/* <Student Student={idCard}/> */}
      {/* <ProductCard Product={Product1} /> */}

      {/* // Product.map((Product)=>{ */}

      {/* // <ProductCard */}
      {/* //  ProductName={Product.ProductName}
          //  ProductPrice={Product.ProductPrice}
          //  isavaliable={Product.isavaliable}
           
          // })  */}
      {
        Post.map((post) => (
          <BlogPost
            key={post.id}
            Author={post.author}
            Title={post.title}
            Body={post.body}
          />
        ))
      }

    </div>
  );
}

export default App;
