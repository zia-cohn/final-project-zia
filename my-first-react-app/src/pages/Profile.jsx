import Header from "../components/Header";
import TextWithHeader from "../components/TextWithHeader";
// import ProfilePage from "../components/ProfilePage"; 
import ExampleInput from "../ExampleInput"; 


function Profile (){
    return (
    <>
    <Header title="Account" subtitle="Make an account!" />
     
     <TextWithHeader
        mySubtitle="Please sign in or make a profile."
        myText=" This will allow you to save your progress."
    />
    <br />

        <ProfilePage />

    
    

    </>
    );
}

export default Profile;