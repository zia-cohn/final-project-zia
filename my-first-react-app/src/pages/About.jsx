import Header from "../components/Header";
import ProfileCard from"../components/ProfileCard";
import TextWithHeader from "../components/TextWithHeader";

function About (){
    return (
    <>
    <Header title="About Me" subtitle="Meet the one-woman team" />
    
    <div className="grid grid-cols-1 gap-4">
        <ProfileCard
            cardEmoji="🍓"
            cardHeader="Zia C"
            cardSubtitle="Project Lead"
            cardBlurb="I created this project because as a Mongolian student, I wanted to share more about my history and culture in a fun and engaging way."
        />
    </div>
    <TextWithHeader
        mySubtitle="My Mission:"
        myText="The mission is..."
    />
    </>
        
    );
        
}

export default About;
