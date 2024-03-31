import type { FC, ReactElement } from 'react';
import { useContext } from 'react';
import Header from './header/Header';
import Result from './result/Result';
import Question from './question/Question';
import { QuizContext } from '../../../contexts/QuizContext';

const Quizcore: FC = (): ReactElement => {
  const quizContext = useContext(QuizContext);
  const gameOver = quizContext?.state.gameOver;

  return (
    <div>
      {gameOver && <Result />}
      {!gameOver && (
        <>
          <Header />
          <Question />
        </>
      )}
    </div>
  );
};

export default Quizcore;
