export const sortRamificationSentence = (ramification: string) => {
  const sentenceOptions = [
    "Agora que você falou sobre {THEME}, me lembrei de algo, posso te contar?",
    "Ao falar sobre {THEME}, me veio a mente algumas coisas, posso compartilhar?",
    "Sobre {THEME}, eu tenho algo para falar, quer saber?",
    "Pensando em {THEME}, agora lembrei de algo que pode te interessar, quer saber?",
    "Tenho curiosidade sobre {THEME}, pode me contar mais?",
    "Já que falou em {THEME}, poderia me explicar mais?",
    "{THEME} é um tema interessante, você poderia me contar mais?",
    "Me parece que {THEME} é um tema interessante, que tal falarmos mais sobre isso?",
    "Estou intrigado com {THEME}, pode me ajudar a entender melhor?",
    "Quero aprender mais sobre {THEME}, pode me ajudar?",
    "Você falou sobre {THEME}, me conta mais sobre isso?",
  ];

  const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
  return sentenceOptions[randomIndex].replace("{THEME}", ramification);
};