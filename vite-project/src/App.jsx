import { useState } from "react";
function App() {
  const name = "eyy mandhala";
  const [count, setcount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  console.log(formData);
  console.log(email);
  const handleClick = () => {
    alert("your login credentials are submitted");
  }
  const handleIncrement = () => {
    setcount((prevCount) => prevCount + 1);
    console.log(count);

  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleDecrement = () => {
    setcount((prevCount) => prevCount - 1);
    console.log(count);
  }
  const handleReset = () => {
    setcount(0);
    console.log(count);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('email:' + formData.email + ' password:' + formData.password);

  }
  const handleChange = (event) => {
   setFormData({
    ...formData,
    [event.target.name]:[event.target.value]

  })
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="enter your email" onChange={handleChange} value={formData.email}/>
        <input name="password" type="password" placeholder="enter your password" onChange={handleChange} value={formData.password} />
        <h1>{count}</h1>
        <button type="button" onClick={handleIncrement}>INCREMENT</button>
        <button type="button" onClick={handleDecrement}>DECREMENT</button>
        <button type="button" onClick={handleReset}>RESET</button>
        <button type="submit" onClick={handleClick}>SUBMIT</button>
      </form>
    </div>
  )
}
export default App;