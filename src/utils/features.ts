import axios from "axios";
import { generate } from "random-words";

export const translateWords = async (params: LangType): Promise<WordType[]> => {
  try {
    const words = generate(8) as string[];
    const word = words.map((word) => ({
      Text: word,
    }));

    const response = await axios.post(
      "https://microsoft-translator-text.p.rapidapi.com/translate",
      word,
      {
        params: {
          to: params,
          "api-version": "3.0",
          profanityAction: "NoAction",
          textType: "plain",
        },
        headers: {
          "x-rapidapi-key":
            "2f4395adfbmsha5a871e73f54415p18be01jsne35a76c0db49",
          "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      }
    );

    // console.log(response);

    const data: FetchedDataType[] = response.data as FetchedDataType[];

    const arr: WordType[] = data.map((i, index) => {
      return {
        word: i.translations[0].text,
        meaning: word[index].Text,
        options: ["asdf"],
      };
    });

    return arr;
    
  } catch (err) {
    console.log("Error in features.ts ", err);
    throw new Error("Some error");
  }
};
