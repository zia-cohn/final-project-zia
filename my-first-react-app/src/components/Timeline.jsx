import timelineData from "../data/timelineData";
import Genghis from "../assets/Genghis.jpeg"

function Timeline() {
    return (
        <div className='p-4'>
            {timelineData.map((item) => (
                <div key={item.id} className="border p-4 my-4 rounded">
                    <h2 className="text-x1 font-bold">{item.year}-{item.title}</h2>

                 <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-w-md my-2"
                 />

                    <p>{item.description}</p>

                </div>
            )) }
        </div>
    );
}

export default Timeline; 