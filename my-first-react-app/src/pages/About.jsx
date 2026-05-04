import Header from "../components/Header";
import ProfileCard from"../components/ProfileCard";
import TextWithHeader from "../components/TextWithHeader";
import BabyPic from "../assets/BabyPic.JPG";

function About (){
    return (
    <>
    <Header title="About Me" subtitle="Meet the one-woman team!!" />
    
    <div className="grid grid-cols-1 gap-4">
        <ProfileCard
            cardImage={BabyPic}
            cardHeader="Zia C"
            cardSubtitle="Project Lead"
            cardBlurb="I created this project because as a half-Mongolian student, I wanted to create this project to help me explore deeper into my heritage. This project would help me better connect with my roots and be able to share my culture with others."
        />
    </div>
    <TextWithHeader
        mySubtitle="My Mission:"
        myText="The mission is to bring light to Mongolian history and culture as it is often overlooked and misunderstood outside of Mongolia. But it has had a significance impact on world history, culture, and geopolitics. By making this history available through this project, it would foster cultural awareness and encourage diversity in learning. It will also provide a resource for people interested in Mongolia, whether it be for personal, academic, or travel purposes."

    />
    </>
        
    );
        
}

export default About;
