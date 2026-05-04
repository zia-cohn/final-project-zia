function ProfileCard ({cardEmoji,cardHeader,cardSubtitle,cardBlurb}){
    return (
        <div className ="m-6 border p-3">
            
            {cardImage (
                <img
                src={cardImage}
                alt="Profile"
                className = "w-31 h-31 object-cover rounded-full mx-auto mb-3 border-4 border-pink-200 shadow-md"
                />
            ) (
                <span className= "text-5xl">{cardEmoji}</span>
            )}

            <span className ="text-5xl">{cardEmoji}</span>

            

            <div>
                <div className="inline-block px-3 my-3 font-bold border rounded-3xl shadow-md">
                    <h1 className="text-2xl">{cardHeader}</h1>
                    <h3 className="text-med">{cardSubtitle}</h3>
                </div>
            </div>
            <div className="border rounded-3xl p-5">
                <p>{cardBlurb}</p>
            </div>
        </div>
    )
};

export default ProfileCard;