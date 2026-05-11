function SourcePage ({title, url}){
    return(
        <li>
            <a href ={url} target="_blank" rel="noopener noreferrer">
                {title}
            </a>
        </li>
    );
}

export default SourcePage;