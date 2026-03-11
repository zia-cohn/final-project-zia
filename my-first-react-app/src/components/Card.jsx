function Card (){
    const title = "My Project";
    const description = "A cool thing I built.";
    const emoji = "🧚🏼‍♀️";

    return (
        <div className="bg-pink border border-purple-400
                        rounded-2x1 shadow-md p-6 w-72
                        text-center
                        hover:shadow-xl hover:translate-y-1
                        transition-all duration-200">

            <span className="text-5x1">{emoji}</span>

            <h3 className="text-xl font-bold mt-4
                            text-green-800">{title}</h3>

            <p className="text-blue-500 mt-2">{description}</p>
        </div>
    );
}

export default Card;