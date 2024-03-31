import { FC, ReactElement, useContext } from 'react';
import Answer from '../answer/Answer';
import { QuizContext, allowedActions } from '../../../../contexts/QuizContext';

const Question: FC = (): ReactElement => {
  const quizContext = useContext(QuizContext);
  const dispatch = quizContext?.dispatch;
  const currentQuestion =
    quizContext?.state.questions[quizContext.state.currentQuestionIndex];
  const answers = quizContext?.state.currentQuestionAnswer;
  const selectedAnswer = quizContext?.state.selectedAnswer;
  const correctAnswer = quizContext?.state.correctAnswer;
  const helpChances = quizContext?.state.helpChances;
  const askedHelp = quizContext?.state.askedHelp;

  const helpDisabled =
    helpChances && helpChances <= 0 ? 'help-disabled disabled' : null;

  console.log('pertanyaan --->', currentQuestion?.question);
  console.log('answers --->', answers);

  return (
    <div className='flex justify-center'>
      <div className="question container">
        <p className="question-text">{currentQuestion?.question}</p>
        <div className="mt-[1rem] answers">
          {answers?.map((answer, index) => (
            <Answer
              answer={answer}
              key={index}
              index={index}
              onSelectAnswer={(answer) =>
                dispatch &&
                dispatch({
                  type: allowedActions.SELECT_ANSWER,
                  payload: answer,
                })
              }
              selectedAnswer={selectedAnswer}
              correctAnswer={correctAnswer}
              askedHelp={askedHelp}
            />
          ))}
        </div>

        <div className="flex">
          <div
            className={`help-btn action-btn ${helpDisabled}`}
            onClick={() =>
              dispatch &&
              dispatch({ type: allowedActions.ASK_HELP, payload: null })
            }
          >
            <p className="text-center leading-[2.8rem]">Help</p>
            <span className="help-chances">{helpChances}</span>
          </div>

          <div
            className="next-btn action-btn"
            onClick={() =>
              dispatch &&
              dispatch({ type: allowedActions.NEXT_QUESTION, payload: null })
            }
          >
            <span className="text-center leading-[2.8rem] cursor-pointer">
              Next Question
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;