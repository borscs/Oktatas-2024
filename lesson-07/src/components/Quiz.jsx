import {useCallback, useState} from "react";
import quizISCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
import QuestionTime from "./QuestionTime.jsx";

export default function Quiz(){
	const [userAnswer, setUserAnswer] = useState([]);

	const activeQuestionIndex = userAnswer.length;

	const handlerSelectAnswer = useCallback(
	function handlerSelectAnswer(answer){
		setUserAnswer((prevState) => {
			return [...prevState, answer];
		})}, []);

	const handlerSkipAnswer = useCallback(
		() => {
			handlerSelectAnswer(null);
		},
		[handlerSelectAnswer],
	);

	if(activeQuestionIndex === QUESTIONS.length){
		return (
			<div id="summary">
				<img src={quizISCompleteImg} alt="Trophy icon"/>
				<h2>Quiz Completed!</h2>
			</div>
		)
	}

	const randomAnswers = [...QUESTIONS[activeQuestionIndex].answers];
	randomAnswers.sort(() => Math.random() - 0.5);

	return(
		<div id="quiz">
			<div id="question">
				<QuestionTime
					key={activeQuestionIndex}
					timeout={1000}
					onTimeout={handlerSkipAnswer}/>
				<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
				<ul id="answers">
					{randomAnswers.map((answer, index) => (
						<li key={index} className="answer">
							<button onClick={() => handlerSelectAnswer(answer)}>
								{answer}
							</button>
						</li>
						))}
				</ul>
			</div>
		</div>
	)
}
