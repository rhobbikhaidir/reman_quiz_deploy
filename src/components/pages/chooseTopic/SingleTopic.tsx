import type { FC, ReactElement } from 'react';

interface SingleTopicProps {
  topic: string;
  onSelectTopic: (topic: string) => void;
}

const SingleTopic: FC<SingleTopicProps> = (props): ReactElement => {
  return (
    <div
      className="w-[100%] h-[80px] mt-[8px] flex rounded-md border-none cursor-pointer font-sans bg-[#1C90F3] relative"
      onClick={() => {
        props.onSelectTopic(props.topic);
        document.getElementById(`${props.topic}`)?.click();
      }}
    >
      <div className="flex-[30%] flex justify-center items-center font-bold">
        <span>x + 1</span>
      </div>

      <div className="flex-[70%] flex flex-col justify-around">
        <input
          className="absolute right-0 top-0 bottom-0"
          type="checkbox"
          id={props.topic}
        />
        <span className="block pl-2 text-white text-center font-bold">
          {props.topic}
        </span>
      </div>
    </div>
  );
};

export default SingleTopic;
