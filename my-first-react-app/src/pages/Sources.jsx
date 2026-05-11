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
            <SourcePage
                title="Britannica, Dayan Khan"
                url="- https://www.britannica.com/biography/Dayan-Khan"
            />
            <SourcePage
                title="Britannica, Altan Khan"
                url="- https://www.britannica.com/biography/Altan"
            />
            <SourcePage
                title="Britannica, Tibetan Buddhism"
                url="- https://www.britannica.com/topic/Tibetan-Buddhism"
            />
            <SourcePage
                title="Britannica, Ligdan"
                url="- https://www.britannica.com/biography/Ligdan"
            />
            <SourcePage
                title="Britannica, Zanabazar"
                url="- https://www.britannica.com/biography/Zanabazar"
            />
            <SourcePage
                title="Britannica, Key People of the Mongol Empire"
                url="- https://www.britannica.com/summary/Key-People-of-the-Mongol-Empire"
            />
        </ul>
        </div>
    
    );
}

export default Source;