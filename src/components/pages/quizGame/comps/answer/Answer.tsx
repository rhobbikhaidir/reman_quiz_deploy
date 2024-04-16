import { FC, ReactElement } from 'react';
import wrongAudio from '../../../../assets/audios/wrongAudio.mp3'
import correctAudio from '../../../../assets/audios/correctAudio.mp3';

interface AnswerProps {
  answer: string;
  index: number;
  onSelectAnswer: (answer: string) => void;
  selectedAnswer: string | null | undefined;
  correctAnswer: string | null | undefined;
  askedHelp: boolean | null | undefined;
}

const Answer: FC<AnswerProps> = ({
  answer,
  index,
  onSelectAnswer,
  selectedAnswer,
  correctAnswer,
  askedHelp,
}): ReactElement => {
  const answerLetterMapping: Array<string> = ['A', 'B', 'C', 'D'];
  const isCorrect =
    selectedAnswer && correctAnswer === answer ? 'correct-answer' : null;
  const isWrong =
    selectedAnswer && selectedAnswer === answer && answer !== correctAnswer
      ? 'wrong-answer'
      : null;
  const isDisabled = selectedAnswer ? 'disabled-answer' : null;
  const isHelp =
    askedHelp && !selectedAnswer && answer !== correctAnswer
      ? 'help-answer'
      : null;

  const startAudio = () => {
    if (correctAnswer === answer) {
      new Audio(correctAudio).play();
    } else {
      new Audio(wrongAudio).play();
    }
  };
  console.log('checking---> 1', answer);
  console.log('checking---> 2', answerLetterMapping[index]);
  return (
    <>
      <div
        className={`answer ${isCorrect} ${isWrong} ${isDisabled} ${isHelp}`}
        onClick={() => {
          onSelectAnswer(answer);
          startAudio();
        }}
      >
        <div className="flex h-[3rem] items-center justify-center text-base font-semibold cursor-pointer">
          <div className="flex-[10%] items-center justify-center ml-[10px] text-white text-center">
            <p className="answer-letter p-[5px] bg-[#008fed] rounded-[10px]">
              {answerLetterMapping[index]}
            </p>
          </div>
          <div className="flex-[90%]">
            <p className="text-select-answer">{answer}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Answer;
