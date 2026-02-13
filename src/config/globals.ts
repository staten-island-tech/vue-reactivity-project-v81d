// https://dictionaryapi.dev
// Thanks to meetDeveloper for making this API
export const DICTIONARY_API_ENDPOINT: string =
  "https://api.dictionaryapi.dev/api/v2/entries/en/";

// Interfaces for dictionary entries
export type DictionaryEntry = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings?: Meaning[];
  license: License;
  sourceUrls: string[];
};

export type Phonetic = {
  text: string;
  audio: string; // should be a URL
  sourceUrl?: string;
  license?: License;
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
};

export type Definition = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example: string;
};

export type License = {
  name: string;
  url: string;
};
