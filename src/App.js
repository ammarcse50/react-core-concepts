import React, { useEffect, useState } from "react"
import "./App.css"
function App() {
  const nayoks = ["ammar", "aslam", "asif"]
  const products = [
    { name: "adobe illustrator", price: "$200" },
    { name: "adobe pro", price: "$100" },
    { name: "adobe photoshop", price: "$300" },
    { name: "adobe El", price: "$800" },
    { name: "adobe xD", price: "$500" },
  ]
  return (
    <div>
      <Users />
      <Counter />
      <ul>
        {nayoks.map((nayok) => (
          <li>{nayok} </li>
        ))}
        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}
      </ul>
    </div>
  )
}
// use effect
function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
  },[])
  return (
    <div>
      <h1>Dynamic Users:{users.length}</h1>
      <ul>
        {console.log(users)}
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(0)
  const handleDecrement = () => {
    setCount(count - 1)
  }
  const handlIncrement = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h1>My Money Amount:{count}</h1>
      <button onClick={handleDecrement}>Decrease</button>
      <button onClick={handlIncrement}>Increase</button>
    </div>
  )
}
function Product(props) {
  const productStyle = {
    border: "1px solid green",
    margin: "10px",
    backgroundColor: "red",
    height: "200px",
    width: "200px",
  }
  const { name, price } = props.product
  return (
    <div style={productStyle}>
      <h1>{name}</h1>
      <h1>{price}</h1>
    </div>
  )
}
export default App
