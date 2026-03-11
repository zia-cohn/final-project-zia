function AboutMeCard (){
    const title = "About Me";
    const description = "I play Ice Hockey";
    const funFact = "I love sunsets";
    const emoji = "🪷";

    return (
        <div className="card" style={ {border: "3px solid #5ECBC8" , padding: "14px" , margin: "10px"}}>
            <span style={{fontSize: "50px"}}>{emoji}</span>
            <h3><strong>{title}</strong></h3>
            <p>{description}</p>
            <p>{funFact}</p>
        </div>
    );
}

export default AboutMeCard;