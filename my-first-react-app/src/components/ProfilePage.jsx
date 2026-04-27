import {useState} from "react";

function ProfilePage (){

    const [user, setUser] = useState (() =>{
        const saved = localStorage.getItem("user");
        return saved ? JSON.parse(saved):{
            name: "",
            displayName:"",
            age:"",
            grade:"",
        };
        
    } ); 

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify (user));
    }, [user]);

    const handleChange = (e) => {
        setUser ({
            ...user,
            [e.target.name]: e.target.value
        }); 
    }; 

    return (
        <div className="p-4">
            <input name ="name" placeholder="Name" onChange={handleChange}/>
            <input name= "displayName" placeholder="Display Name" onChange={handleChange}/>
            <input name= "age" placeholder= "Age" onChange={handleChange}/>
            <input name= "grade" placeholder="Grade" onChange={handleChange}/>

            <h2 className="mt-4 text-xl">Preview:</h2>
            <p>Name:{user.name}</p>
            <p>Display: {user.displayName}</p>
            <p>Age: {user.age}</p>
            <p>Grade: {user.grade}</p>
        </div>
    );

}

export default ProfilePage;