import React, { useEffect, useState } from 'react'
function App() {

  const [users, setUser] = useState([])
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [type, setAnimalType] = useState("");
  const [animalId,setAnimalId]=useState(null)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("http://localhost:8080/animal/available-animals").then((result) => {
      result.json().then((resp) => {
        setUser(resp)
        console.log(users.name)
        setName(resp[0].name)
        console.log(name)
        setWeight(resp[0].weight)
        setAnimalType(resp[0].animalType)
        setAnimalId(resp[0].animalID)
      })
    })
  }

  // function deleteUser(id) {
  //   fetch(`http://localhost:4000/todo/${id}`, {
  //     method: 'DELETE'
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.warn(resp)
  //       getUsers()
  //     })
  //   })
  // }
  function selectUser(id)
  {
      let item = users[id-1];

        setName(item.name)
        setWeight(item.weight)
        setAnimalType(item.animalType);
        setAnimalId(item.animalId)
  }
  // function updateUser()
  // {
  //   let item={name,weight,type}
  //   console.warn("item",item)
  //   fetch(`http://localhost:4000/todo/${userId}`, {
  //     method: 'PUT',
  //     headers:{
  //       'Accept':'application/json',
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify(item)
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.warn(resp)
  //       getUsers()
  //     })
  //   })
  // }
  return (
    <div className="App">
      <h1>Update User Data With API </h1>
      <table border="1" style={{ float: 'left' }}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Operations</td>
          </tr>
          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item.animalID}</td>
                <td>{item.name}</td>
                <td>{item.weight}</td>
                <td>{item.animalType}</td>
                {/* <td><button onClick={() => deleteUser(item.animalID)}>Delete</button></td> */}
                <td><button onClick={() => selectUser(item.animalID)}>Select</button></td>

              </tr>
            )
          }
        </tbody>
      </table>
      <div>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        <input type="text" value={weight} onChange={(e)=>{setWeight(e.target.value)}} /> <br /><br />
        <input type="text" value={type}  onChange={(e)=>{setAnimalType(e.target.value)}} /> <br /><br />
        {/* <button onClick={updateUser} >Update User</button>   */}
      </div>
    </div>
  );
}
export default App;