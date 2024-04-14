import { CreateStoryResponse } from "../interfaces/story.interface";

export const mockedStory: CreateStoryResponse = {
  mainStory: {
    theme: "A importância da alimentação balanceada",
    summary:
      "Nesta história, dois personagens discutem sobre a importância de manter uma alimentação balanceada para a saúde e o bem-estar. Eles compartilham experiências pessoais e trocam dicas sobre como manter uma dieta saudável.",
    isRamification: false,
    ramifications: [
      "Nutrição",
      "Saúde",
      "Bem-estar",
      "Alimentação equilibrada",
    ],
    scenes: [
      {
        speech: "Olá! Como você está?",
        emotion: "neutral",
        position: "left",
      },
      {
        speech: "Oi! Estou bem. E você?",
        emotion: "neutral",
        position: "right",
      },
      {
        speech:
          "Estou ótimo! Mas tenho pensado bastante sobre como a alimentação influencia na nossa saúde.",
        emotion: "thinking",
        position: "left",
      },
      {
        speech:
          "É verdade. Uma alimentação equilibrada é essencial para o nosso bem-estar.",
        emotion: "happy",
        position: "right",
      },
      {
        speech:
          "Eu tenho tentado melhorar meus hábitos alimentares, incluindo mais frutas e vegetais na minha dieta.",
        emotion: "happy",
        position: "left",
        ramificationTheme: "Bem-estar",
      },
      {
        speech:
          "Isso é ótimo! Os nutrientes presentes nos alimentos naturais são essenciais para manter o corpo saudável.",
        emotion: "surprised",
        position: "right",
      },
      {
        speech:
          "Às vezes é difícil resistir às tentações de fast food, mas tenho me esforçado para fazer escolhas mais saudáveis.",
        emotion: "confused",
        position: "left",
      },
      {
        speech:
          "Com o tempo, essas mudanças vão se tornar hábitos e você vai se sentir muito melhor.",
        emotion: "very-happy",
        position: "right",
        ramificationTheme: "Saúde",
      },
      {
        speech:
          "É verdade. É incrível como a alimentação pode impactar tão positivamente a nossa saúde e energia.",
        emotion: "happy",
        position: "left",
      },
      {
        speech:
          "Com certeza! E não precisa ser algo radical, pequenas mudanças já fazem diferença.",
        emotion: "very-happy",
        position: "right",
        ramificationTheme: "Alimentação equilibrada",
      },
      {
        speech:
          "Estou animado para continuar melhorando minha alimentação e sentir os benefícios disso.",
        emotion: "happy",
        position: "left",
      },
      {
        speech:
          "Fico feliz em ouvir isso! Vamos nos apoiar nessa jornada de cuidar melhor do nosso corpo.",
        emotion: "very-happy",
        position: "right",
        ramificationTheme: "Nutrição",
      },
      {
        speech:
          "Com certeza! Juntos somos mais fortes. Vamos em busca de uma vida mais saudável e equilibrada.",
        emotion: "happy",
        position: "left",
      },
    ],
  },
  ramificationsStories: [
    {
      theme: "Bem-estar",
      summary:
        "Nesta ramificação da história principal sobre a importância da alimentação balanceada, os personagens continuam sua conversa abordando o tema do bem-estar. Eles discutem como uma dieta equilibrada influencia não apenas na saúde física, mas também no bem-estar emocional e mental.",
      isRamification: true,
      scenes: [
        {
          speech:
            "Falando em bem-estar, você já percebeu como se sente melhor quando está se alimentando de forma saudável?",
          emotion: "happy",
          position: "left",
        },
        {
          speech:
            "Com certeza! Além de benefícios físicos, a alimentação saudável também impacta positivamente no nosso bem-estar emocional.",
          emotion: "happy",
          position: "right",
        },
        {
          speech:
            "Isso mesmo. Acho que o equilíbrio entre corpo e mente é fundamental para alcançar o bem-estar completo.",
          emotion: "very-happy",
          position: "left",
        },
        {
          speech:
            "Concordo plenamente. Quando nos alimentamos bem, nosso corpo funciona melhor e nossa mente também se beneficia.",
          emotion: "very-happy",
          position: "right",
        },
        {
          speech:
            "É incrível como pequenas mudanças na alimentação podem fazer uma grande diferença em como nos sentimos, não é?",
          emotion: "happy",
          position: "left",
        },
        {
          speech:
            "Com certeza. Cuidar de nós mesmos através da alimentação é um ato de amor próprio e autocuidado.",
          emotion: "very-happy",
          position: "right",
        },
        {
          speech:
            "Estou cada vez mais convencido de que uma alimentação balanceada é a chave para uma vida mais saudável e feliz.",
          emotion: "happy",
          position: "left",
        },
        {
          speech:
            "É maravilhoso ver você tão dedicado ao seu bem-estar. Isso inspira outras pessoas a fazerem o mesmo.",
          emotion: "very-happy",
          position: "right",
        },
        {
          speech:
            "Agradeço muito o seu apoio e incentivo. Juntos podemos alcançar um estado de equilíbrio e harmonia em todas as áreas da nossa vida.",
          emotion: "happy",
          position: "left",
        },
        {
          speech:
            "Com certeza! Vamos continuar nos apoiando e incentivando a buscar o melhor para nós mesmos. O bem-estar é uma jornada constante.",
          emotion: "very-happy",
          position: "right",
        },
        {
          speech:
            "Que bom poder compartilhar essas reflexões e experiências. O bem-estar é um tema tão rico e inspirador.",
          emotion: "happy",
          position: "left",
        },
        {
          speech:
            "Com certeza! E é sempre bom lembrar que cuidar de nós mesmos é a base para uma vida plena e feliz. Vamos continuar nesse caminho!",
          emotion: "very-happy",
          position: "right",
        },
        {
          speech:
            "Combinado! Seguir em busca do equilíbrio e bem-estar em todas as áreas da nossa vida. Que jornada incrível!",
          emotion: "happy",
          position: "left",
        },
        {
          speech:
            "Sim, uma jornada maravilhosa e cheia de descobertas. Vamos continuar caminhando juntos rumo a uma vida mais plena e saudável.",
          emotion: "very-happy",
          position: "right",
        },
        {
          speech:
            "Que assim seja! Juntos somos mais fortes. Vamos em direção ao bem-estar e equilíbrio que tanto buscamos.",
          emotion: "happy",
          position: "left",
        },
      ],
    },
    {
      theme: "Nutrição",
      summary:
        "Nesta ramificação da história sobre a importância da alimentação balanceada, os personagens continuam a conversa abordando mais detalhes sobre nutrição e como os diferentes alimentos impactam o corpo de maneira positiva. Eles compartilham dicas e curiosidades sobre como fazer escolhas alimentares mais saudáveis.",
      isRamification: true,
      scenes: [
        {
          speech:
            "Falando em alimentação, você sabia que os diferentes nutrientes presentes nos alimentos desempenham papéis essenciais no funcionamento do nosso organismo?",
          emotion: "thinking",
          position: "left",
          ramificationTheme: "Nutrição",
        },
        {
          speech:
            "Sim, é fascinante como a nutrição pode influenciar nossa saúde de tantas maneiras. Cada alimento tem um papel importante a desempenhar.",
          emotion: "surprised",
          position: "right",
          ramificationTheme: "Nutrição",
        },
        {
          speech:
            "Por exemplo, as frutas são ricas em vitaminas e antioxidantes que ajudam a fortalecer o sistema imunológico.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Nutrição",
        },
        {
          speech:
            "E os vegetais fornecem fibras que melhoram o funcionamento do intestino e ajudam na digestão.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Nutrição",
        },
        {
          speech:
            "Além disso, as proteínas são essenciais para a construção e reparação dos tecidos do corpo. Você costuma incluir proteínas na sua dieta?",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Nutrição",
        },
        {
          speech:
            "Sim, costumo comer carne, peixe e leguminosas para garantir uma boa ingestão de proteínas. É importante variar as fontes para obter todos os aminoácidos essenciais.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Nutrição",
        },
        {
          speech:
            "E a hidratação também é crucial para a saúde. Beber água regularmente mantém nosso corpo funcionando adequadamente.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Nutrição",
        },
        {
          speech:
            "Verdade, muitas vezes esquecemos da importância da água para a nossa saúde. É fundamental manter-se hidratado ao longo do dia.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Nutrição",
        },
        {
          speech:
            "Essas informações são muito úteis! Com pequenas mudanças na alimentação, podemos melhorar significativamente nossa qualidade de vida.",
          emotion: "very-happy",
          position: "left",
          ramificationTheme: "Nutrição",
        },
        {
          speech:
            "Definitivamente! Cuidar da nossa nutrição é um gesto de amor e autocuidado. Vamos continuar aprendendo juntos sobre como fazer escolhas saudáveis.",
          emotion: "very-happy",
          position: "right",
          ramificationTheme: "Nutrição",
        },
        {
          speech:
            "Fico feliz em compartilhar esse conhecimento com você. Vamos nos apoiar para manter uma alimentação equilibrada e nutritiva.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Nutrição",
        },
      ],
    },
    {
      theme: "Alimentação equilibrada",
      summary:
        "Nesta ramificação da história sobre a importância da alimentação balanceada, os personagens continuam a conversa sobre os benefícios de uma alimentação equilibrada. Eles compartilham mais dicas e experiências para manter uma dieta saudável e se motivam mutuamente a manter os bons hábitos alimentares.",
      isRamification: true,
      scenes: [
        {
          speech:
            "Foi ótimo conversar sobre alimentação saudável. Vamos continuar nesse ritmo!",
          emotion: "very-happy",
          position: "left",
        },
        {
          speech:
            "Com certeza! Acho que podemos trocar mais dicas e desafios para nos mantermos motivados.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Motivação",
        },
        {
          speech:
            "Estou sempre em busca de novas receitas saudáveis. Você tem alguma para compartilhar?",
          emotion: "happy",
          position: "left",
        },
        {
          speech:
            "Sim! Recentemente descobri uma salada de quinoa com legumes que é uma delícia e super nutritiva.",
          emotion: "happy",
          position: "right",
        },
        {
          speech:
            "Que legal! Vou tentar fazer em casa também. É bom variar nos pratos saudáveis para não enjoar.",
          emotion: "happy",
          position: "left",
        },
        {
          speech:
            "Isso mesmo! A diversidade de alimentos garante que estamos recebendo todos os nutrientes necessários.",
          emotion: "happy",
          position: "right",
        },
        {
          speech:
            "Às vezes bate aquela vontade de comer um doce, mas tenho optado por opções mais saudáveis, como frutas.",
          emotion: "neutral",
          position: "left",
        },
        {
          speech:
            "Frutas são uma excelente escolha para saciar a vontade de doce e ainda são cheias de vitaminas.",
          emotion: "happy",
          position: "right",
        },
        {
          speech:
            "Estou feliz por estar conseguindo manter uma alimentação equilibrada. Me sinto mais disposto.",
          emotion: "very-happy",
          position: "left",
        },
        {
          speech:
            "Isso é maravilhoso! A alimentação tem um impacto enorme em nossa energia e disposição.",
          emotion: "happy",
          position: "right",
        },
        {
          speech:
            "Vamos continuar nesse caminho juntos. Motivando um ao outro, podemos alcançar nossos objetivos.",
          emotion: "very-happy",
          position: "left",
        },
        {
          speech:
            "Com certeza! Estou animado para ver as melhorias na minha saúde e bem-estar com uma alimentação equilibrada.",
          emotion: "happy",
          position: "right",
        },
        {
          speech:
            "Que bom que estamos comprometidos com nossa saúde. Vamos nos apoiar nessa jornada!",
          emotion: "very-happy",
          position: "left",
        },
        {
          speech:
            "Com certeza! Juntos somos mais fortes e podemos conquistar um estilo de vida saudável e equilibrado.",
          emotion: "happy",
          position: "right",
        },
        {
          speech:
            "É hora de levar adiante esses bons hábitos e colher os frutos de uma alimentação equilibrada!",
          emotion: "very-happy",
          position: "left",
        },
      ],
    },
    {
      theme: "Saúde",
      summary:
        "Nesta ramificação da história principal sobre a importância da alimentação balanceada, os personagens continuam a discutir sobre como a saúde é impactada pelos hábitos alimentares. Eles compartilham experiências pessoais e dicas para manter um estilo de vida saudável.",
      isRamification: true,
      scenes: [
        {
          speech:
            "Falando em saúde, a alimentação balanceada também contribui para prevenir diversas doenças.",
          emotion: "happy",
          position: "left",
        },
        {
          speech:
            "Com certeza! Uma dieta rica em nutrientes fortalece o sistema imunológico e melhora a qualidade de vida.",
          emotion: "very-happy",
          position: "right",
        },
        {
          speech:
            "Eu tenho notado que desde que comecei a me alimentar melhor, minha disposição aumentou muito.",
          emotion: "happy",
          position: "left",
        },
        {
          speech:
            "Isso é maravilhoso! Quando cuidamos do nosso corpo, ele nos recompensa com mais energia e vitalidade.",
          emotion: "very-happy",
          position: "right",
        },
        {
          speech:
            "Além da alimentação, a prática regular de exercícios físicos também é fundamental para manter a saúde em dia.",
          emotion: "happy",
          position: "left",
        },
        {
          speech:
            "Exatamente! O equilíbrio entre uma dieta saudável e atividades físicas é a chave para uma vida longa e mais saudável.",
          emotion: "very-happy",
          position: "right",
        },
        {
          speech:
            "Eu tenho tentado incluir caminhadas no meu dia a dia, e tem feito toda a diferença.",
          emotion: "happy",
          position: "left",
        },
        {
          speech:
            "As pequenas mudanças de hábitos são tão importantes quanto as grandes decisões. Cada passo conta!",
          emotion: "very-happy",
          position: "right",
        },
        {
          speech:
            "É incrível como cuidar da nossa saúde pode impactar positivamente em todos os aspectos da nossa vida.",
          emotion: "happy",
          position: "left",
        },
        {
          speech:
            "Com certeza! Quando estamos bem por dentro, reflete no nosso humor, disposição e até nas nossas relações.",
          emotion: "happy",
          position: "right",
        },
        {
          speech:
            "Vamos continuar nos apoiando nesse caminho de saúde e bem-estar? Juntos somos mais fortes!",
          emotion: "very-happy",
          position: "left",
        },
        {
          speech:
            "Com certeza! Estamos no mesmo barco em busca de uma vida mais saudável e feliz.",
          emotion: "happy",
          position: "right",
        },
        {
          speech:
            "Que bom contar com um amigo que compartilha dos mesmos valores de cuidar da saúde. Vamos em frente!",
          emotion: "very-happy",
          position: "left",
        },
        {
          speech:
            "Com certeza! Juntos podemos alcançar nossos objetivos e aproveitar a vida ao máximo.",
          emotion: "happy",
          position: "right",
        },
        {
          speech:
            "Hora de voltar para a história principal. Mas que tal continuarmos essa conversa sobre saúde em nosso dia a dia?",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Saúde",
        },
      ],
    },
  ],
};
