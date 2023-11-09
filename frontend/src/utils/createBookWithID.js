import { v4 as uuidv4 } from "uuid";

const createBookWithID = (book, sourse) => {
  return {
    ...book,
    sourse,
    id: uuidv4(),
    isFavorite: false,
  };
};

export default createBookWithID;
