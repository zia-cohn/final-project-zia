import {useNavigate} from "react-router-dom";

function QuizSelector (){
    const navigate = useNavigate ();

    const handleChange = (event) => {
        const selectedQuiz= event.target.value;

        if (selectedQuiz) {
            navigate (selectedQuiz);
        }
    };
    
    return (
        <select onChange={handleChange} defaultValue="">
            <option value ="">Select a Quiz</option>
            
            <option value ="/HistoryQuiz">Timeline Quiz</option>
        
            <option value="/CultureQuiz">Culture Quiz</option>
        </select>
    );
}

export default QuizSelector;