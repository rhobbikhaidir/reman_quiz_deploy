import { FC, ReactElement, useContext } from 'react';
import { QuizContext } from '../../../../contexts/QuizContext';
import { getLifeIcons } from '../../../../helpers/getIcons';
import { PointIcon } from '../../../../assets/svg/icons';

const Header: FC = (): ReactElement => {
  const quizContext = useContext(QuizContext);

  const score = quizContext?.state.score;
  const totalQuestions = quizContext?.state.questions.length;
  const currentQuestionIndex = quizContext?.state.currentQuestionIndex;
  const currentQuestionIndexShow = currentQuestionIndex! + 1;
  const life = quizContext!.state.life;

  return (
    <div className="header">
      <div className="score-header block font-bold text-center tracking-[1px]">
        <div className="flex justify-center items-center">
          <PointIcon />{' '}
          <p className="ml-1 text-xl font-bold text-[#FFD700]">{score}</p>
        </div>
      </div>
      <span className="index-header block font-bold text-center tracking-[1px]">
        Questions from {currentQuestionIndexShow} to {totalQuestions}
      </span>
      <span className="score-header">{getLifeIcons(life)}</span>
    </div>
  );
};

export default Header;
