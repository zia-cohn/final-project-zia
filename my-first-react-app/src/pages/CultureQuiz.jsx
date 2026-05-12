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
                "",
                "",
                ""
            ],
            answer: ""
        }, 
        {
            question: "", 
            options: [
                "",
                "",
                "",
                ""
            ],
            answer: ""
        }, 
        {
            question: "", 
            options: [
                "",
                "",
                "",
                ""
            ],
            answer: ""
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

      <h1 className="text-4xl font-bold mb-6">
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
