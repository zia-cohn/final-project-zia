import cultureInfo from "../data/cultureInfo";

function Culture() {
    return (
        <div className="p-4">
            {cultureInfo.map((culture) => (
                <div
                    key={culture.id}
                    className="border p-4 my-4 rounded"
                >
                    <h2 className="text-xl font-bold">
                        {culture.title}
                    </h2>

                    {culture.image && (
                        <img
                            src={culture.image}
                            alt={culture.title}
                            className="w-full max-w-md my-2"
                        />
                    )}

                    <p>{culture.description}</p>

                   
                </div>
            ))}
        </div>
    );
}

export default Culture;