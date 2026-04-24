import Header from "../components/Header";
import TextWithHeader from "../components/TextWithHeader";
import photoHomepage from "../components/photoHomepage"; 

function Home (){
    return (
    <>
    <Header title="Home Page" subtitle="Welcome to..." />
     
    <photoHomepage></photoHomepage>
    
    <TextWithHeader
        mySubtitle="What is...?"
        myText="This is a interactive web page built to help you learn more about Mongolian History and Culture in a fun and interactive way!!"
    />

    </>
    );
}

export default Home;