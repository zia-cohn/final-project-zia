import Header from "../components/Header";
import TextWithHeader from "../components/TextWithHeader";
import PhotoHomepage from "../components/PhotoHomepage"; 


function Home (){
    return (
    <>
    <Header title="Home Page" subtitle="Welcome to..." />
     
    <PhotoHomepage />
    
    <TextWithHeader
        mySubtitle="What is this?"
        myText="This is a interactive web page built to help you learn more about Mongolian History and Culture in a fun and interactive way!! The importance of Mongolian history lies in its profound and lasting impact on global systems of trade, governance, warfare, and cultural exchange — even if it's often overlooked in mainstream Western curricula.
"
    />

    
    </>
    );
}

export default Home;