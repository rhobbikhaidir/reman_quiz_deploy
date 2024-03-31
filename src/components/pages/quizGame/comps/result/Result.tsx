import { FC, ReactElement, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext, allowedActions } from '../../../../contexts/QuizContext';
import { TopicsContext, TopicsContextType } from '../../../chooseTopic/Topics';
import { PointIcon } from '../../../../assets/svg/icons';
import FireworkComponent from '../fireworksAnimate/FireworkComponent';
import {
  getStarsIcons,
  playSongIfScoreMatches,
  stopPlaySong,
  value,
} from '../../../../helpers/getIcons';

const Result: FC = (): ReactElement => {
  const navigate = useNavigate();
  const topicsContext = useContext(TopicsContext) as TopicsContextType;
  const quizContext = useContext(QuizContext);
  const dispatch = quizContext?.dispatch;
  console.log('testing :', topicsContext?.formData);
  // const { topicsContext.formData } = item;

  const name = topicsContext ? topicsContext.formData : 'unkwon';
  const totalQuestions = quizContext!.state.questions.length;
  const correctAnswer = quizContext!.state.assertedAnswerCount;
  const score = quizContext?.state.score;

  const calcAssertPercentage = () => {
    const assertPercentage = (correctAnswer * 100) / totalQuestions;
    return assertPercentage;
  };

  console.log('check name result--->', name);
  console.log('score--->', score);

  return (
    <>
      <div className="result-animate-container w-[100%] text-center tracking-[1px]">
        {score !== undefined && score >= value ? (
          <FireworkComponent>
            <div className="w-[100%] pt-[10vh] bg-[#008fed] py-[1.5rem] px-[.2rem]">
              <p className="text-white text-lg font-bold uppercase">
                Congratulations !!! 👏👏👏
              </p>
              <p className="text-grey text-2xl font-normal font-mono">{name}</p>
            </div>
          </FireworkComponent>
        ) : (
          <div className="w-[100%] pt-[10vh] bg-[#008fed] py-[1.5rem] px-[.2rem]">
            <p className="text-white text-lg font-bold uppercase">
              Congratulations !!! 👏👏👏
            </p>
            <p className="text-grey text-2xl font-normal font-mono">{name}</p>
          </div>
        )}
        <div className="flex justify-center items-center bg-[#FFFF]">
          <div className="result-body container">
            <small className="stars-wrap">
              {getStarsIcons(calcAssertPercentage())}
            </small>
            <div className="flex justify-center items-center text-center">
              <PointIcon />
              <p className="ml-1 text-xl font-bold text-[#FFD700]">
                {score !== undefined && playSongIfScoreMatches(score)}
              </p>
            </div>
            <p className="result-answered-text mt-5 mb-2">
              successfully answered {correctAnswer} out of {totalQuestions}{' '}
              questions
            </p>
            <div className="flex justify-center gap-16">
              <button
                className="mt-[1rem] mb-[1rem] w-[40%] text-[#fff] tracking-[1px] bg-[#008fed] text-lg font-bold h-[2.4rem] border-none rounded-full"
                onClick={() => {
                  stopPlaySong();
                  dispatch &&
                    dispatch({
                      type: allowedActions.RESET_GAME,
                      payload: null,
                    });
                }}
              >
                New Game
              </button>
              <button
                className="mt-[1rem] mb-[1rem] w-[40%] text-[#fff] tracking-[1px] bg-[#008fed] text-lg font-bold h-[2.4rem] border-none rounded-full"
                onClick={() => {
                  stopPlaySong();
                  navigate('/');
                }}
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
