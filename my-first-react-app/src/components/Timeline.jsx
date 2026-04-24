import timelineData from "../data/timelineData";

function Timeline() {
    return (
        <div className='p-4'>
            {timelineData.map((event) => (
                <div key={event.id} className="border p-4 my-4 rounded">
                    <h2 className="text-x1 font-bold">{event.year}-{event.title}</h2>

                 <img
                    src={event.image}
                    alt={event.title}
                    className="w-full max-w-md my-2"
                    />

                <p>{event.description}</p>

                <button
                onClick={() => alert(event.title)}
                className="mt-2 px-3 py-1 bg-blue-500 text-white"
                >

                </button>
            </div>
            )) }
        </div>
    );
}

export default Timeline; 