import Header from "../components/Header";
import ProfileCard from"../components/ProfileCard";
import TextWithHeader from "../components/TextWithHeader";

function About (){
    return (
    <>
    <Header title="About Me" subtitle="Meet the team" />
    
    <div className="grid grid-cols-2 gap-4">
        <ProfileCard
            cardEmoji="🍓"
            cardHeader="Zia C"
            cardSubtitle="Project Lead"
            cardBlurb="Bla Bla Bla"
        />
    </div>
    <TextWithHeader
        mySubtitle="{Our Mission:}"
        myText="Our mission is..."
    />
    </>
        
    );
        
}

export default About;