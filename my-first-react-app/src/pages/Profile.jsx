import Header from "../components/Header";
import TextWithHeader from "../components/TextWithHeader";


function Profile (){
    return (
    <>
    <Header title="Profile" subtitle="Welcome to the profile page!" />
     
     <TextWithHeader
        mySubtitle="What is...?"
        myText=" This is..."
    />

    </>
    );
}

export default Profile;