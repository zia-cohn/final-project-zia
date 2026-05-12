import {useState} from "react";

function CultureQuiz (){
    const questions = [
        {
            question: "What is a traditional Mongolian home called?", 
            options: [
                "Igloo",
                "Ger/Yurt",
                "Hut",
                "Cave"
            ],
            answer: "Ger/Yurt"
        }, 
        {
            question: "What are yurts mainly made from?", 
            options: [
                "Brick and cement",
                "Metal sheets",
                "Wood and felt/fabric",
                "Plastic"
            ],
            answer: "Wood and felt/fabric"
        }, 
        {
            question: "How long does it usually take to assemble a yurt?", 
            options: [
                "1 to 2 days",
                "1 to 2 hours",
                "30 minutes to 3 hours",
                "10 hours"
            ],
            answer: "30 minutes to 3 hours"
        }, 
        {
            question: "Which of these are the 'Five Animals'?", 
            options: [
                "Dogs, cats, birds, fish, sheep",
                "Tigers, Lions, Bears, Lepoards, Cheetas",
                "Fish, Dolphins, Whales, Orcas, Jellyfish",
                "Horses, Sheep, Goats, Camels, Cattle"
            ],
            answer: "Horses, Sheep, Goats, Camels, Cattle"
        }, 
        {
            question: "Why are these animals important?", 
            options: [
                "Only for sports",
                "Food, transport, clothing, and trade",
                "Hunting",
                "Decoration"
            ],
            answer: "Food, transport, clothing, and trade"
        }, 
        {
            question: "What lifestyle is this animal system connected to?", 
            options: [
                "City life",
                "Factory farming",
                "Nomadic hearding life",
                "Fishing villages"
            ],
            answer: "Nomadic hearding life"
        }, 
        {
            question: "Why are horses important in Mongolia?", 
            options: [
                "Transport, culture, and survival",
                "Only for racing",
                "Having as pets",
                "They aren't important"
            ],
            answer: "Transport, culture, and survival"
        }, 
        {
            question: "Which historical figure is strongly connected to Mongolian horse culture?", 
            options: [
                "Napoleon",
                "Julius Caeser",
                "Ghenghis Khan",
                "Alexander the Great"
            ],
            answer: "Ghenghis Khan"
        }, 
        {
            question: "What is the main religon in Mongolia?", 
            options: [
                "Islam",
                "Christianity",
                "Hinduism",
                "Tibetan Buddhism"
            ],
            answer: "Tibetan Buddhism"
        }, 
        {
            question: "When did Buddhism become widely practiced in Mongolia?", 
            options: [
                "5th century",
                "16th century",
                "19th century",
                "21st century"
            ],
            answer: "16th century"
        }, 
        {
            question: "What is traditional Mongolian clothign called?", 
            options: [
                "Kimono",
                "Sari",
                "Deel",
                "Robe"
            ],
            answer: "Deel"
        }, 
        {
            question: "Why is the deel practical?", 
            options: [
                "It is waterproof only",
                "It works well in cold climate and nomadic life",
                "It is very fashionable",
                "It is super lightweight for sports"
            ],
            answer: "It works well in cold climate and nomadic life"
        }, 
        {
            question: "What accessories are often worn with a deel?", 
            options: [
                "Belt/sash, boots, hat",
                "Tie",
                "Gloves",
                "Sneakers"
            ],
            answer: "Belt/sash, boots, hat"
        }, 
        {
            question: "What is Mongolian cuisine mainly based on?", 
            options: [
                "Fruits and vegetables",
                "Meat and dairy",
                "Pasta",
                "Rice only"
            ],
            answer: "Meat and dairy"
        }, 
        {
            question: "What is buuz?", 
            options: [
                "Milk drink",
                "Fried bread",
                "Steamed meat dumplings",
                "Soup"
            ],
            answer: "Steamed meat dumplings"
        },
        {
            question: "What is Mongolian throat singing called?", 
            options: [
                "Opera",
                "Khoomei",
                "Rap",
                "Choir singing"
            ],
            answer: "Khoomei"
        }, 
        {
            question: "What instrument is the Morin Khuur?", 
            options: [
                "Flute",
                "Guitar",
                "Drum",
                "Horsehead fiddle"
            ],
            answer: "Horsehead fiddle"
        }, 
        {
            question: "What is throat singing known for?", 
            options: [
                "One simple tone",
                "Multiple tones at the same time",
                "Loud shouting",
                "Whispering only"
            ],
            answer: "Multiple tones at the same time"
        },
        {
            question: "What are the “Three Manly Games” of the Naadam Festival?", 
            options: [
                "Soccer, basketball, tennis",
                "Swimming, running, cycling",
                "Wrestling, horse racing, archery",
                "Dancing, singing, acting"
            ],
            answer: "Wrestling, horse racing, archery"
        },
        {
            question: "What does Naadam celebrate?", 
            options: [
                "Technology",
                "Nomadic culture and traditions",
                "Space exploration",
                "Urban life"
            ],
            answer: "Nomadic culture and traditions"
        },
        {
            question: "What is an important Mongolian value?", 
            options: [
                "Individualism only",
                "Competition only",
                "Silence",
                "Hospitality and respect for elders"
            ],
            answer: "Hospitality and respect for elders"
        },
        {
            question: "How are guests traditionally treated?", 
            options: [
                "With food and milk tea",
                "Ignored",
                "Only given water",
                "Asked to leave quickly"
            ],
            answer: "With food and milk tea"
        },
        {
            question: "Mongolian culture strongly values:", 
            options: [
                "Isolation",
                "Technology only",
                "Community cooperation and nature connection",
                "Wealth over family"
            ],
            answer: "Community cooperation and nature connection"
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
        Mongolian Culture Quiz
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

export default CultureQuiz;
