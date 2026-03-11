function TextWithHeader ({mySubtitle,myText}){
    return (
        <div>
            <div className="m-6 p-3 border">
                <p className="text-3xl font-bold">{mySubtitle}</p>
                <p className="text-l">{myText}</p>
            </div>
        </div>
    )
};

export default TextWithHeader;