export interface IGPTStory {
  id: string;
  theme: string;
  title: string;
  intro: string;
  summary: string;
  backgroundUrl: string; // no implement

  characters: GPTCharacter[];
  sceneCharacters: GPTSceneCharacter[];
}

interface GPTCharacter {
  id: string;
  name: string;
  role: string;
  position: string;
  avatarUrl: string; // no implement
}

interface GPTSceneCharacter {
  id: string;
  characterId: string;
  order: number;
  speech: string;
  emotion: string;
  avatarUrl: string; // no implement

  interaction: GPTUserInteraction;
}

interface GPTUserInteraction {
  id: string;
  sceneCharacterId: string;
  userInteractionOptionId: string;

  sentence: string; // TODO: change this attribute to "sentence"

  options: GPTUserInteractionOption[];
}

interface GPTUserInteractionOption {
  id: string;
  sceneCharacterId: string;
  nextSceneCharacterId: string;

  label: string;
  feedback: string;
}
