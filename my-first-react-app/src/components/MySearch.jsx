// import { useState } from "react";


// function MySearch(){


// const [search,setSearch] = useState ('');


// const allInfo = [
//    {'id':1,'author':"dr seuss", "title":"are you my mother"},
//    {'id':2,'author':"grimms brothers", "title":"Hansel and gretel"},
//    {'id':3,'author':"richard scarry", "title":"Cars and autoomobiles and things that go"},
// ]


// const filteredInfo = allInfo.filter( (info) => {
//    const lowerSearch = search.toLowerCase();


//    return (
//        book.title.toLowerCase().includes(lowerSearch) ||
//        book.author.toLowerCase().includes(lowerSearch)
//    );
// });


//    return (
//        <div>


//            <input
//            className = "border"
//            type="text"
//            placeholder="search here!"
//            value = {search}
//            onChange = {(event) => setSearch(event.target.value)}
//            />


//            {search !== "" &&
          
//            <table className="border mt-2 mx-auto">
//                <thead>
//                    <tr >
//                        <th className="border p-2">Author</th>
//                        <th className="border p-2">Title</th>
//                    </tr>
//                </thead>
//                <tbody>


//                    {filteredBooks.map((book) => (


             
//                    <tr key={book.id}>
//                        <td className="border p-2">{book.author}</td>
//                        <td className="border p-2">{book.title}</td>
//                    </tr>
//                    ))}
//                </tbody>
//            </table>
// }