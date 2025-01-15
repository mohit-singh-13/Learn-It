import axios from "axios";
import { sampleSize, shuffle } from "lodash";
import { generate } from "random-words";

export const translateWords = async (params: LangType) => {
  const generateOptions = (
    words: {
      text: string;
    }[],
    idx: number
  ): string[] => {
    const correctAns: string = words[idx].text;

    const incorrectOptionsList = words.filter(
      (word) => word.text !== correctAns
    );

    const incorrectOptions: string[] = sampleSize(incorrectOptionsList, 3).map(
      (word) => word.text
    );

    const mcqOptions = shuffle([correctAns, ...incorrectOptions]);

    return mcqOptions;
  };

  try {
    const words = generate(8) as string[];
    const word = words.map((word) => ({
      text: word,
    }));

    const API_KEY = import.meta.env.VITE_RAPID_API_KEY;

    const response = await axios.post(
      "https://microsoft-translator-text-api3.p.rapidapi.com/translate",
      word,
      {
        params: {
          to: params,
          from: "en",
          textType: "plain",
        },
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "microsoft-translator-text-api3.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      }
    );

    const data: FetchedDataType[] = response.data as FetchedDataType[];

    const arr: WordType[] = data.map((i, index) => {
      const options: string[] = generateOptions(word, index);

      return {
        word: i.translations[0].text,
        meaning: word[index].text,
        options,
      };
    });

    return arr;
  } catch (err) {
    console.log("Error in features.ts ", err);
    throw new Error("Some error");
  }
};

export const countMatchingElements = (arr1: string[], arr2: string[]) => {
  if (arr1.length !== arr2.length) throw new Error("Arrays are not equal");
  console.log(arr1, arr2);
  let matchingCount = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) matchingCount++;
  }
  console.log(matchingCount);

  return matchingCount;
};
