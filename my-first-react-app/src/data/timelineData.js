// import genghis from "../assets/genghiskhanPhoto.jpeg";
// import empire from "../assets/Empire.jpg";
// import horde from "../assets/Horde.webp";
// import raid from "../assets/Raid.jpg";
// import yuan from "../assets/Yuan.jpg";
// import dayan from "../assets/Dayan.jpg";
// import altan from "../assets/Altan.jpeg";
// import ligdan from "../assets/Ligdan.jpeg";

const timelineData = [
    {
        id: 1,
        year: "1162 ", 
        title: " Genghis Khan", 
        description:"The founder and first Great Khan of the Mongol Empire. Born as Temüjin, on the steppes of Mongolia. He is son of Yesügei, a member of the royal Borjigin clan of the nomadic Mongol people.",
        image:"Genghis.jpeg"
    },
    {
        id: 2, 
        year: "1171 ",
        title:" Genghis Khan's childhood",
        description:"A band of Tatars, another nomadic group, poisons Temüjin's father. With Yesügei dead, the clan abandons him, his mother, and his siblings. Temüjin is captured by a rival clan soon after and is held captive and forced to wear a wooden collar, but eventually Temüjin escapes. ",

    }, 
    {
        id: 3,
        year: "1206 ",
         title:" The Rise of the Mongol Empire",
        description:"Temüjin rises to power by making powerful allies and forming his own army. He conquers rival clans",
        image:"Empire.jpg",
    }, 
    {
        id: 4,
        year: "1205-09 ",
        title: " Attack on Tangut Kingdom of Xi Xia",
        description:"Genghis Khan directly attacks the Tangut Kingdom of Xi Xia, a northwestern border state of China. The attack ended in 1209 after a declaration of allegiance by the Xi Xia king.",
    }, 
    {
        id: 5,
        year: "1215 ",
        title: " The Capture of Beijing",
        description:"The Mongols capture Beijing in northern China. They continue their conquests, sometimes fighting multiple campaigns at once.",
    }, 
    {
        id: 6,
        year: "1223 ",
        title: " Russia",
        description:"Some Mongol troops start to penetrate into southern Russia and raid cities in Crimea.",
        image:"Horde.webp",
    }, 
    {
        id: 7,
        year: "1227-29 ",
        title: " After Genghis Khan's death",
        description:"Genghis Khan dies in 1227. His son Ögödei is the leader of the empire by 1229. The empire now stretches from the Caspian Sea in the west to the China Sea in the east and from the Siberia in the north to Tibet in the south. A well-organized messenger system, commonly known as Örtöö (meaning 'checkpoint' or 'relay station' in Mongolian) covered most of Asia and kept the Mongol rulers aware of what was happening over the vast empire.",
    }, 
    {
        id: 8,
        year: "1231 ",
        title: " Khwārezm-Shāh",
        description:"The Mongols defeat the Khwārezm-Shāh Dynasty of Central Asia. The Khwārezm-Shāh Dynasty ruled in Central Asia and Iran.",
    }, 
    {
        id: 9,
        year: "1237-40 ",
        title: " Golden Horde",
        description:"In the western part of the empire, also known as the Golden Horde, there was a annihilation of the Bulgars in eastern Europe. Batu, a grandson of Genghis Khan, expands the domain of the Golden Horde in a series of campaigns. That include sacking and burning of the city of Kyiv in 1240. (At this time Kyiv is the major city of Russia.)",
        image:"Raid.jpg",
    }, 
    {
        id: 10,
        year: "1241-46 ",
        title: " The effects of Ögödei",
        description:"In 1241 Ögödei dies in a drinking bout and the Mongol weastern leaders ceases their advances into Europe so that they can be present in Mongolia when a new supreme ruler or great khan, is selected. It is only Ögödei's death that prevents Batu from invading western Europe. Töregene, Ögödei's widow, rules the empire by the consent of the Mongol nobels. In 1246 her son Güyük becomes great khan.",
    }, 
    {
        id: 11,
        year: "1248-51 ",
        title: " Möngke's rule",
        description:"After Güyük's death in 1248, his widow, Ogul-Gaimish, becomes regent (temporairly) for three years until Möngke is elected the next great khan. He is the last great khan to base his capital at Karakorum, in central Mongolia.",
    }, 
    {
        id: 12,
        year: "1258-59 ",
        title: " Mongol Conquests",
        description:"The Mongols seize Baghdad, in present-day Iraq in 1258 and in 1259 take over much of present-day Syria. Möngke dies during a siege of a provinical town in Sichuan, China.",
    }, 
    {
        id: 13,
        year: "1260 ",
        title: " Kublai's rule",
        description:"After the Mongols failed to conquer Egypt. Kublai, a brother of Möngke, is elected great khan and moves the empire's capital to what is now Beijing. Kublai comes to regaurd himself as a Chinese emperor, and his dynasty becomes knwon as the Yuan Dynasty.",
    }, 
    {
        id: 14,
        year: "1294 ",
        title: " Kublai's death",
        description:"After Kublai's death, the Mongol Empire started to split into fragments as disputes over succession weaken the central government.",
        image:"Yuan.webp",
    }, 
    {
        id: 15,
        year: "1368-70 ",
        title: " The fall of the Yuan Dynasty",
        description:"The Yuan Dynasty fell in 1368, overthrown by a Chinese rebel leader who established a new dynasty, known as the Ming Dynasty. The Mongols are diven out of Beijing, and the last Yuan emperor, Togon-temür, fleed into the steppes, where he dies in 1370.",
    }, 
    {
        id: 16,
        year: "1388-1390s ",
        title: " Weaking of the Mongol Empire",
        description:"The new Ming Dynasty invade into Mongolia, Karakorum, the old Mongol capital, is destroyed. This severely weakens the Mongol empire's power. Timur deafeats the Mongol forces during his campaigns in Central Asia, which further decline the Mongol empires military influence and power.",
    }, 
    {
        id: 17,
        year: "1400-1454 ",
        title: " Civil War in Mongolia",
        description:"Mongolia split into two, Eastern Mongols (Khalkha) and Western Mongols (Oirats/Oryats). This is the start of a 54 year long civil war. In 1449 the Oirat leader, Esen Khan, defeated Ming China. Leading to the capture of the Ming emperor by Mongol forces. In 1454 the civil war largely ends but Mongolia remains politically divided.",
    }, 
    {
        id: 18,
        year: "1466 ",
        title: " Dayan Khan",
        description:"Dayan Khan, a significant Northern Yuan dynasty khagan who, reunited the fragmented Mongol tribes under Genghisid rule.",
        image: "Dayan.jpg"
    }, 
    {
        id: 19,
        year: "1500-1583 ",
        title: " Altan Khan",
        description:"Uzbek powers conquer former Mongol territories in Central Asia. Mongols permanetly lose most land outside Mongolia. Altan Khan, a leader of the Tümed Mongols and the de facto ruler of the Right Wing (western tribes). He was grandson of Dayan Khan. Altan reuntites many Mongol tribes inside Mongolia, launching raids against Ming China. He signs a peace treaty with China in 1571.  ",
    }, 
    {
        id: 20,
        year: "1571 ",
        title: " Peace Treaty",
        description:"Altan Khan signs a peace treaty between the Mongols and the Ming dynsaty. Ending centuries of major Mongol-Ming warefare.",
    }, 
    {
        id: 21,
        year: "1578 ",
        title: " The begining of Tibetan Buddhism",
        description:"Altan Khan converts to Tibetan Buddhism, which evolved from a rigorous intellectual disciplines of Madhyamika and Yogachara philosophy. This incorporates Tantric ritual practices from Central Asia and Tibet, as well as the monastic disciplines of erly Theravada Buddhism. Altan Khan gives the title of 'Dalai Lama' to Sonam Gyatso, a Indian mountaineer who summited Mount Everest. Tibetan Buddihsm spreads rapildy across Mongolia.",
        image: "Altan.jpeg",
    }, 
    {
        id: 22,
        year: "1586 ",
        title: " Monastery",
        description:"The first great Buddhist monastery in Mongolia, Erdene Zuu, was founded near Karakorum.",
    }, 
    {
        id: 23,
        year: "1600s ",
        title: " The Start of the Decline",
        description:"Mongolia fragments again due to rival tribal states and Buddhism fails to unify Mongol tribes politically.",
    }, 
    {
        id: 24,
        year: "1620s ",
        title: " Torgut Mongols",
        description:"Torgut Mongols migrate west toward the Volga River and eventually become the Kalmyks under Russian influence.",
    }, 
    {
        id: 25,
        year: "1634-35 ",
        title: " Ligdan Khan",
        description:"Lighan Khan, the last paramount khagan of the Northern Yuan dynasty. He ruled the Chakhar Mongols from 1604 to 1634. He was the final Borjigin descendant to claim authority over a unified Mongolia. He died of smallpox in Tibet. His death caused Mongol resisitance to the rising Manchus to weaken dramatically.",
        image: "Ligdan.jpeg",
    }, 
    {
        id: 26,
        year: "1635-46 ",
        title: " Qing dynasty",
        description:"Zanabazar is born in 1635, he becomes Mongolia's first Jebtsundamba Khutuktu (Living Buddha). In 1644, Manchus conquers China and establishes the Qing dynasty. Mongolia increasingly falls under Qing influence. And in 1646, Kalmyk Mongols formally accept Russian protection.",
    }, 
    {
        id: 27,
        year: "1688-97 ",
        title: " Final loss of Independence",
        description:"Khalkha Mongols ask the Qing dynasty for military help against the Dzungars. In 1691, Mongolia formaally comes under Qing (Manchu) rule, this is the beginning of long Qing domination over Outer Mongolia. In 1697, Galdan Khan, a major Dzungar leader, dies. This leaves Qing power over Mongolia to solidify.",
    }, 
    {
        id: 28,
        year: "1771 ",
        title: " Migration and Qing Control",
        description:"Massive Torgut/Kalmyk migration from Russia back to Qing territory in Xinjiang and Mongolia. This is one of the largest migrations in Eurasian history, approximately 120,000 to 170,000 people. ",
    }, 
    {
        id: 29,
        year: "1700s-1800s",
        title: " Buddhist Mongolia Under Qing Rule",
        description:"Tibetan Buddhism still dominates Mongolian society, thousands of monasteries are built. With this a large percent of Mongolian men become monks and Mongol prices and Buddhist lamas rule local regions. In the 1800s, Mongolians face heavy Qing taxation and restrictions. This starts a Anti-Chinese resentment in Mongol citizens.",
    },




];

export default timelineData; 