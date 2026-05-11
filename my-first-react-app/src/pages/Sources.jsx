import Header from "../components/Header";
import TextWithHeader from "../components/TextWithHeader";
import SourcePage from "../components/SourcePage"

function Source (){
    return (
        <div>
        <Header title="Sources" subtitle="" />

        <SourcePage></SourcePage>
        <ul>
            <SourcePage
                title="Britannica, Biography of Genghis Khan"
                url="- https://www.britannica.com/biography/Genghis-Khan"
            />
            <SourcePage
                title="Britannica, Summary of Mongol Empire Timeline"
                url="- https://www.britannica.com/summary/Mongol-Empire-Timeline"
            />
            <SourcePage
                title="Britannica, Khwarezm-Shah Dynasty"
                url="- https://www.britannica.com/topic/Khwarezm-Shah-dynasty"
            />
            <SourcePage
                title="Facts and Details, Mongols After the End of the Mongol Empire"
                url="- https://factsanddetails.com/central-asia/Mongolia/sub8_2b/entry-4561.html"
            />
        </ul>
        </div>
    
    );
}

export default Source;