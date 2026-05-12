import Header from "../components/Header";
import TextWithHeader from "../components/TextWithHeader";
import PhotoHomepage from "../components/PhotoHomepage"; 


function Home (){
    return (
    <>
    <Header title="Welcome to Chronicles of the Mongol Empire" subtitle="Home Page" />
     
    <PhotoHomepage />
    
    <TextWithHeader
        mySubtitle="What is this?"
        myText="This is a interactive web page built to help you learn more about Mongolian History and Culture in a fun and interactive way!!"
    />

    
    </>
    );
}

export default Home;