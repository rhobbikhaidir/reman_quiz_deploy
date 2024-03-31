import React, { createContext, useState } from 'react';

export interface TopicInterface {
  children: React.ReactNode;
  topic: string;
  isSelected: boolean;
}

export const UniversalContext = createContext<{
  selectedTopics: Array<TopicInterface>;
  setSelectedTopics: React.Dispatch<React.SetStateAction<TopicInterface[]>>;
} | null>(null);

export const UniversalProvider: React.FC<TopicInterface> = ({ children }) => {
  const [selectedTopics, setSelectedTopics] = useState<TopicInterface[]>([]);

  return (
    <UniversalContext.Provider value={{ selectedTopics, setSelectedTopics }}>
      {children}
    </UniversalContext.Provider>
  );
};
