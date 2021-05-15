import { useState, createContext } from 'react';

export const CardListContext = createContext();

export const CardListContextProvider = ({ children }) => {
  const [cardList, setCardList] = useState([]);

  const addCard = (card) => setCardList((prevList) => [...prevList, card]);
  const reset = () => setCardList(() => []);

  return (
    <CardListContext.Provider value={{ cardList, setCardList, addCard, reset }}>{children}</CardListContext.Provider>
  );
};
