import {useState} from "react";

function HistoryQuiz (){
    const questions = [
        {
            question: "What is Genghis Khans real name?", 
            options: [
                "Temüjin",
                "Kublai",
                "Batu",
                "Ögödei"
            ],
            answer: "Temüjin"
        }, 
        {
            question: "What happens after Genghis Khan's father's death?", 
            options: [
                "He becomes emperor of his clan",
                "The clan abandons him and his family",
                "He moves to China",
                "He joins the army"
            ],
            answer: "The clan abandons him and his family"
        }, 
        {
            question: "What kingdom does Genghis Khan attack first?", 
            options: [
                "Ming Dynasty",
                "Roman Empire",
                "Magic Kingdom",
                "Tangut Kingdom of Xi Xia"
            ],
            answer: "Tangut Kingdom of Xi Xia"
        }, 
        {
            question: "What year does the Mongols capture the city of Beijing?", 
            options: [
                "1214",
                "1215",
                "1212",
                "1204"
            ],
            answer: "1215"
        }, 
        {
            question: "When does Genghis Khan die?", 
            options: [
                "1227",
                "1226",
                "1238",
                "1227"
            ],
            answer: "1227"
        },
        {
            question: "Who takes over after Genghis Khan's death?", 
            options: [
                "His wife, Börte",
                "His son, Ögödei",
                "His daughter, Alakhai Bekhi",
                "His brother, Qasar"
            ],
            answer: "His son, Ögödei"
        },
        {
            question: "Fill he blank: A well-organized messenger system, commonly known as ____ covered most of Asia and kept the Mongol rulers aware of what was happening over the vast empire.", 
            options: [
                "Yam",
                "Buudal",
                "Örtöö",
                "Khüree"
            ],
            answer: "Örtöö"
        },
        {
            question: "In the western part of the empire, known as the Golden Horde, what city did Batu, grandson of Genghis Khan, sack and burn? ", 
            options: [
                "Kyiv",
                "Lviv",
                "Kharkiv",
                "Odesa"
            ],
            answer: "Kyiv"
        },
        {
            question: "Whose death prevented Batu from expanding the Mongol Empire into Western Europe?", 
            options: [
                "Börte",
                "Töregene",
                "Genghis Khan",
                "Ögödei"
            ],
            answer: "Ögödei"
        },
        {
            question: "Who becomes ruler after Ögödeis death?", 
            options: [
                "Töregene, Ögödeis wife",
                "Güyük, Ögödeis son",
                "Sürkhakhan, Ögödeis daughter",
                "Chagatai, Ögödeis brother"
            ],
            answer: "Töregene, Ögödeis wife"
        },
        {
            question: "Why is Möngke important?", 
            options: [
                "He created the Yuan Dynasty",
                "He conquered Japan",
                "He based his capital at Karakorum, in central Mongolia.",
                "He was a cool dude"
            ],
            answer: "He is the last great khan to base his capital at Karakorum, in central Mongolia."
        },
        {
            question: "What did the Mongols seize during 1258-1259? ", 
            options: [
                "Kyiv and much of Moscow",
                "India and much of Tibet",
                "Beijing and mush of Seoul",
                "Baghdad and much of Syria"
            ],
            answer: "Baghdad and much of Syria"
        },
        {
            question: "What did Kublai do?", 
            options: [
                "Defeated Genghis Khan",
                "Moved the empires capital to Beijing ",
                "Started the Qing Dynasty",
                "Moved the empire's capital to Seoul"
            ],
            answer: "Moved the empires capital to Beijing"
        },
        {
            question: "What was Kublais dynasty called?", 
            options: [
                "Yuan Dynasty",
                "Ming Gynasty",
                "Ottoman Empire",
                "Tang Dynasty"
            ],
            answer: "Yuan Dynasty"
        },
        {
            question: "What happened to the Yuan Dynasty in 1368?", 
            options: [
                "The Mongols expanded the dynasty to Egypt",
                "Joined forces with the Qing Dynasty",
                "It became the strongest Dynasty in history",
                "The Yuan Dynasty fell"
            ],
            answer: "The Yuan Dynasty fell"
        },
        {
            question: "What happened to the Mongol Empire during 1388 to 1390s?", 
            options: [
                "It became stronger",
                "It experienced severe weakening",
                "It expanded into Europe",
                "It conquered Japan"
            ],
            answer: "It experienced severe weakening"
        },
        {
            question: "When did the civil war start?", 
            options: [
                "1300-1354",
                "1258-1259",
                "1400-1454",
                "1206-1227"
            ],
            answer: "1400-1454"
        },
        {
            question: "Who were the two opposing sides of the civil war?", 
            options: [
                "Ming and Qing",
                "Eastern Mongols and Western Mongols",
                "China and Mongolia",
                "Northern Mongols and Southern Mongols"
            ],
            answer: "Eastern Mongols and Western Mongols"
        },
        {
            question: "Who was Dayan Khan?", 
            options: [
                "A Chinese emperor",
                "A Buddhist monk",
                "A Yuan dyanasty khan who reunited Mongol tribes",
                "The founder of the Qing Dynasty"
            ],
            answer: "A Yuan dyanasty khan who reunited Mongol tribes"
        },
        {
            question: "After Dayan Khans death, who takes over?", 
            options: [
                "Kublai Khan",
                "Batu Khan",
                "Möngke Khan",
                "Altan Khan"
            ],
            answer: "Altan Khan"
        },
        {
            question: "What does Altan Khan do?", 
            options: [
                "Moves the capital to Baghdad",
                "Launches raids against Ming China",
                "Conquers North Korea",
                "Ends Buddhism"
            ],
            answer: "Launches raids against Ming China"
        },
        {
            question: "What religion did Altan Khan follow?", 
            options: [
                "Islam",
                "Christianity",
                "Tibetan Buddhism",
                "Judaism"
            ],
            answer: "Tibetan Buddhism"
        },
        {
            question: "What two sides sign a peace treaty in 1571?", 
            options: [
                "Mongolia and South Korea",
                "China and Mongolia",
                "Mongolia and Russia",
                "Iraq and Mongolia"
            ],
            answer: "China and Mongolia"
        },
        {
            question: "What did Altan Khan give Sonam Gyatso?", 
            options: [
                "A palace",
                "A military army",
                "A title of 'Dalai Lama'",
                "A piece of land"
            ],
            answer: "A title of 'Dalai Lama'"
        },
        {
            question: "What important building was made in 1589?", 
            options: [
                "A church",
                "The Great Wall",
                "A forbidden city",
                "Erdene Zuu Monastery"
            ],
            answer: "Erdene Zuu Monastery"
        },
        {
            question: "What happens in the 1600s?", 
            options: [
                "Mongolia unites peacefully",
                "The Mongols conquer Europe",
                "Fragmentation due to rival tribal states",
                "The empire gets 10x stronger"
            ],
            answer: "Fragmentation due to rival tribal states"
        },
        {
            question: "What happens to Mongolia during the rise of the Qing dynasty?", 
            options: [
                "It falls under Qing influence",
                "It moves the capital",
                "It becomes independent",
                "It conquers the Qing dyansty"
            ],
            answer: "It falls under Qing influence"
        },
        {
            question: "How many Torgut/Kalmyk people migrated back to Mongolia in 1771?", 
            options: [
                "10,000 to 20,000",
                "500,000",
                "120,000 to 170,000",
                "0"
            ],
            answer: "120,000 to 170,000"
        },
        {
            question: "Why is this migration important?", 
            options: [
                "It helped defeat the Qing dynasty",
                "It was one of the largest migrations in Eurasian history",
                "It ended Buddhism",
                "It created the Mongol Empire"
            ],
            answer: "It was one of the largest migrations in Eurasian history"
        },
        {
            question: "What religion was strong in the 1700s to 1800s?", 
            options: [
                "Islam",
                "Hinduism",
                "Tibetan Buddhism",
                "Christianity"
            ],
            answer: "Tibetan Buddhism"
        },





    ]; 


    const [answers, setAnswers] = useState ({});
    const [submitted, setSubmitted] = useState (false);
    const [score, setScore] = useState (0);

    function handleChange (questionIndex, option){
        setAnswers ({
            ...answers,
            [questionIndex]: option
        });
    }

    function handleSubmit (event){
        event.preventDefault ();
        let count = 0;

        questions.forEach ((q, index) => {
            if (answers[index]=== q.answer){
                count++;
            }
        });

        setScore(count);
        setSubmitted(true);
    }

   return (
    <div className="p-6">

      <h1 className="quiz-container">
        Mongolian Timeline Quiz
      </h1>

      <form onSubmit={handleSubmit}>

        {questions.map((q, index) => (
          <div
            key={index}
            className="mb-8 border p-4 rounded-xl"
          >

            <h2 className="text-xl font-semibold mb-4">
              {index + 1}. {q.question}
            </h2>

            {q.options.map((option, i) => (
              <label
                key={i}
                className="block mb-2"
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}

                  checked={answers[index] === option}

                  onChange={() =>
                    handleChange(index, option)
                  }

                  className="mr-2"
                />

                {option}
              </label>
            ))}

            {submitted && (
              <div className="mt-3 text-2xl">
                {answers[index] === q.answer
                  ? "✅"
                  : "❌"}
              </div>
            )}

          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Submit Quiz
        </button>

      </form>

      {submitted && (
        <h2 className="text-3xl font-bold mt-6">
          Your Score: {score}/{questions.length}
        </h2>
      )}

    </div>
  );
}

export default HistoryQuiz;