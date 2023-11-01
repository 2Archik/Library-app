import { v4 as uuidv4 } from "uuid";

const createBookWithID = (book) => {
  return {
    ...book,
    id: uuidv4(),
    isFavorite: false,
  };
};

export default createBookWithID;
