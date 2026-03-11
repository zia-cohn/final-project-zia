function IntrestCard (){
    const title = "My favorite Fruit";
    const description = "I love strawberries. I think they are the best fruit.";
    const emoji = "🍓";
    const tip= "I recommend trying them with honey, esp. in summer, its very sweet."

    return (
        <div className="card" style={{border: "3px solid #c683e5ff" , padding: "14px" , margin: "10px"}}>
            <span style={{fontSize: "50px"}}>{emoji}</span>
            <h3><strong>{title}</strong></h3>
            <p>{description}</p>
            <p>{tip}</p>

        </div>
            
    );

}

export default IntrestCard;