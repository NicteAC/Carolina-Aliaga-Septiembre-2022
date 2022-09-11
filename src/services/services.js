import axios from "axios";

export const getCharacters = async () => {
  const data = await axios.get("https://breakingbadapi.com/api/characters");
  console.log(data)
};
