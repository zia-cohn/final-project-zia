import { useState } from "react";


function ExampleInput (){

const [name, setName] = useState (""); 
const [age, setAge] = useState ("");
const [grade, setGrade] = useState ("");
const [users, setUsers] = useState ([]);

   
useEffect (() => {
    const savedUsers = JSON.parse (localStorage.getItem ("users")) || [];
    setUsers (savedUsers);
}, []);

function handleSubmit (event){
    event.preventDefault();

    const newUser = {
        id: Date.now(),
        name: name,
        age: age,
        grade: grade
    };

    const updatedUsers = [...users, newUser];

    //saves to a local storage 
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    //updates state 
    setUsers(updatedUsers);
    //clears input 
    setName("");
    setAge ("");
    setGrade ("");
}

    return (
        <>
        <p> </p>

        <form onSubmit ={handleSubmit}>
            <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value = {name} 
            onChange = {(event) => setName (event.target.value)} 
            />
            
            <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={ (e) => setAge (e.target.value)}
            />

            <input
            type="text"
            placeholder="Grade"
            value={grade}
            onChnage= {(e) => setGrade (e.target.value)}
            />

            
            <input type="submit" value="Submit!" />

        </form>

        {users.map((user)=>(
            <div key={user.id}>
                {user.name}- Age: {user.age}, Grade: {user.grade}
            </div>
        ))}

        </>
    );
}

export default ExampleInput; 