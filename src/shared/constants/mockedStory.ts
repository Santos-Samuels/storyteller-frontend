import { CreateStoryResponse } from "../interfaces/story.interface";

export const mockedStory: CreateStoryResponse = {
  mainStory: {
    id: "f090513d-6b3f-4eda-9062-0961f59c5717",
    userId: "1",
    theme: "Matemática Discreta",
    summary:
      "Dois amigos discutem o conceito de matemática discreta e sua importância na resolução de problemas computacionais.",
    isRamification: false,
    ramifications: [
      "Teoria dos Grafos",
      "Álgebra Booleana",
      "Problemas de Combinatória",
      "Algoritmos de Busca e Ordenação",
    ],
    created_at: "2024-04-16T00:58:18.070Z",
    scenes: [
      {
        id: "11ad5aba-64af-43d6-af7d-dc874c90d383",
        storyId: "f090513d-6b3f-4eda-9062-0961f59c5717",
        backgroundUrl: "background",
        caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
        caracterSpriteUrl:
          "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
        speech:
          "O que você acha da importância da matemática discreta na computação?",
        emotion: "thinking",
        position: "left",
        caracter: {
          id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          baseSpriteRef:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          name: "Caracter 1",
          created_at: "2024-04-16T00:49:06.379Z",
        },
        created_at: "2024-04-16T00:58:18.070Z",
      },
      {
        id: "6baf3d38-801f-41fa-b465-0b80e4c15853",
        storyId: "f090513d-6b3f-4eda-9062-0961f59c5717",
        backgroundUrl: "background",
        caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
        caracterSpriteUrl:
          "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
        speech:
          "Eu acredito que a matemática discreta é fundamental para a computação, principalmente na resolução de problemas complexos.",
        emotion: "happy",
        position: "right",
        caracter: {
          id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          baseSpriteRef:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          name: "Caracter 2",
          created_at: "2024-04-16T00:49:06.379Z",
        },
        created_at: "2024-04-16T00:58:18.070Z",
      },
      {
        id: "cdb5a9ef-69ac-4ca8-a99c-b1f0299c69d5",
        storyId: "f090513d-6b3f-4eda-9062-0961f59c5717",
        backgroundUrl: "background",
        caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
        caracterSpriteUrl:
          "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
        speech:
          "Verdade, a Teoria dos Grafos é um exemplo de como a matemática discreta é aplicada na computação.",
        emotion: "surprised",
        position: "left",
        ramificationTheme: "Teoria dos Grafos",
        caracter: {
          id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          baseSpriteRef:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          name: "Caracter 1",
          created_at: "2024-04-16T00:49:06.379Z",
        },
        created_at: "2024-04-16T00:58:18.070Z",
      },
      {
        id: "6ccd35ca-2308-4dab-929f-89213387923e",
        storyId: "f090513d-6b3f-4eda-9062-0961f59c5717",
        backgroundUrl: "background",
        caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
        caracterSpriteUrl:
          "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
        speech:
          "Sim, os grafos são muito utilizados em algoritmos de busca e em redes de computadores.",
        emotion: "happy",
        position: "right",
        caracter: {
          id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          baseSpriteRef:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          name: "Caracter 2",
          created_at: "2024-04-16T00:49:06.379Z",
        },
        created_at: "2024-04-16T00:58:18.070Z",
      },
      {
        id: "69874568-14bf-43c2-8f13-5249fed83a03",
        storyId: "f090513d-6b3f-4eda-9062-0961f59c5717",
        backgroundUrl: "background",
        caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
        caracterSpriteUrl:
          "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
        speech:
          "E a Álgebra Booleana, você acha que tem relevância na matemática discreta?",
        emotion: "thinking",
        position: "left",
        ramificationTheme: "Álgebra Booleana",
        caracter: {
          id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          baseSpriteRef:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          name: "Caracter 1",
          created_at: "2024-04-16T00:49:06.379Z",
        },
        created_at: "2024-04-16T00:58:18.070Z",
      },
      {
        id: "07a512bf-3988-4132-8f53-20573cf89cd5",
        storyId: "f090513d-6b3f-4eda-9062-0961f59c5717",
        backgroundUrl: "background",
        caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
        caracterSpriteUrl:
          "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
        speech:
          "Com certeza! A Álgebra Booleana é essencial para a representação de dados e lógica computacional.",
        emotion: "happy",
        position: "right",
        caracter: {
          id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          baseSpriteRef:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          name: "Caracter 2",
          created_at: "2024-04-16T00:49:06.379Z",
        },
        created_at: "2024-04-16T00:58:18.070Z",
      },
      {
        id: "0775566f-1e49-4491-9d9b-d3793573fa96",
        storyId: "f090513d-6b3f-4eda-9062-0961f59c5717",
        backgroundUrl: "background",
        caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
        caracterSpriteUrl:
          "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
        speech:
          "Sem a Álgebra Booleana, muitos circuitos lógicos não funcionariam corretamente.",
        emotion: "surprised",
        position: "left",
        caracter: {
          id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          baseSpriteRef:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          name: "Caracter 1",
          created_at: "2024-04-16T00:49:06.379Z",
        },
        created_at: "2024-04-16T00:58:18.070Z",
      },
      {
        id: "13d42929-76b6-4b27-811d-c9302bfd6ad3",
        storyId: "f090513d-6b3f-4eda-9062-0961f59c5717",
        backgroundUrl: "background",
        caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
        caracterSpriteUrl:
          "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
        speech:
          "Isso mesmo, é incrível como conceitos aparentemente simples têm um impacto tão grande na computação.",
        emotion: "happy",
        position: "right",
        caracter: {
          id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          baseSpriteRef:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          name: "Caracter 2",
          created_at: "2024-04-16T00:49:06.379Z",
        },
        created_at: "2024-04-16T00:58:18.070Z",
      },
      {
        id: "a661f5a0-c0ca-4430-b779-7455314d3898",
        storyId: "f090513d-6b3f-4eda-9062-0961f59c5717",
        backgroundUrl: "background",
        caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
        caracterSpriteUrl:
          "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
        speech:
          "E não podemos esquecer dos problemas de Combinatória, não é mesmo?",
        emotion: "thinking",
        position: "left",
        caracter: {
          id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          baseSpriteRef:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          name: "Caracter 1",
          created_at: "2024-04-16T00:49:06.379Z",
        },
        created_at: "2024-04-16T00:58:18.070Z",
      },
      {
        id: "f7db5325-76b2-4894-afda-f5ef14222d03",
        storyId: "f090513d-6b3f-4eda-9062-0961f59c5717",
        backgroundUrl: "background",
        caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
        caracterSpriteUrl:
          "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
        speech:
          "Claro, a Combinatória é fundamental para a análise de algoritmos e otimização de soluções.",
        emotion: "happy",
        position: "right",
        caracter: {
          id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          baseSpriteRef:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          name: "Caracter 2",
          created_at: "2024-04-16T00:49:06.379Z",
        },
        created_at: "2024-04-16T00:58:18.070Z",
      },
      {
        id: "fd0d04bd-32d3-4974-9760-195d013fd750",
        storyId: "f090513d-6b3f-4eda-9062-0961f59c5717",
        backgroundUrl: "background",
        caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
        caracterSpriteUrl:
          "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
        speech:
          "Os conhecimentos de Combinatória são essenciais para lidar com situações de escolha e organização.",
        emotion: "happy",
        position: "left",
        caracter: {
          id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          baseSpriteRef:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          name: "Caracter 1",
          created_at: "2024-04-16T00:49:06.379Z",
        },
        created_at: "2024-04-16T00:58:18.070Z",
      },
      {
        id: "375ba827-38bf-498d-8cc5-2405f0316722",
        storyId: "f090513d-6b3f-4eda-9062-0961f59c5717",
        backgroundUrl: "background",
        caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
        caracterSpriteUrl:
          "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
        speech:
          "Com certeza, a ordem e a quantidade de possibilidades são aspectos importantes na resolução de problemas computacionais.",
        emotion: "happy",
        position: "right",
        ramificationTheme: "Algoritmos de Busca e Ordenação",
        caracter: {
          id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          baseSpriteRef:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          name: "Caracter 2",
          created_at: "2024-04-16T00:49:06.379Z",
        },
        created_at: "2024-04-16T00:58:18.070Z",
      },
      {
        id: "80d7f05b-4363-429f-b008-c2fb3c49e27b",
        storyId: "f090513d-6b3f-4eda-9062-0961f59c5717",
        backgroundUrl: "background",
        caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
        caracterSpriteUrl:
          "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
        speech:
          "Por fim, os algoritmos de busca e ordenação são outra aplicação prática da matemática discreta.",
        emotion: "thinking",
        position: "left",
        ramificationTheme: "Problemas de Combinatória",
        caracter: {
          id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          baseSpriteRef:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          name: "Caracter 1",
          created_at: "2024-04-16T00:49:06.379Z",
        },
        created_at: "2024-04-16T00:58:18.070Z",
      },
      {
        id: "2abc8c6a-f789-419d-85c3-11b7b50da8c9",
        storyId: "f090513d-6b3f-4eda-9062-0961f59c5717",
        backgroundUrl: "background",
        caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
        caracterSpriteUrl:
          "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
        speech:
          "Sim, a eficiência dos algoritmos de busca depende de conceitos como grafos e Combinatória.",
        emotion: "happy",
        position: "right",
        caracter: {
          id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          baseSpriteRef:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          name: "Caracter 2",
          created_at: "2024-04-16T00:49:06.379Z",
        },
        created_at: "2024-04-16T00:58:18.070Z",
      },
      {
        id: "d654f451-4399-4eae-a9a4-493e56701635",
        storyId: "f090513d-6b3f-4eda-9062-0961f59c5717",
        backgroundUrl: "background",
        caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
        caracterSpriteUrl:
          "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
        speech:
          "Os algoritmos de ordenação também se beneficiam dos princípios matemáticos da matemática discreta.",
        emotion: "happy",
        position: "left",
        caracter: {
          id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          baseSpriteRef:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          name: "Caracter 1",
          created_at: "2024-04-16T00:49:06.379Z",
        },
        created_at: "2024-04-16T00:58:18.070Z",
      },
      {
        id: "46e56553-2e59-4cca-981c-790e10bae075",
        storyId: "f090513d-6b3f-4eda-9062-0961f59c5717",
        backgroundUrl: "background",
        caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
        caracterSpriteUrl:
          "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
        speech:
          "É impressionante como a matemática discreta é a base de tantas aplicações na computação, não é?",
        emotion: "happy",
        position: "right",
        caracter: {
          id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          baseSpriteRef:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          name: "Caracter 2",
          created_at: "2024-04-16T00:49:06.379Z",
        },
        created_at: "2024-04-16T00:58:18.070Z",
      },
    ],
  },
  ramificationsStories: [
    {
      id: "053fea70-d0a1-4234-b6d9-1aa373d6786e",
      userId: "1",
      theme: "Álgebra Booleana",
      summary:
        "Continuação da conversa sobre matemática discreta, agora focando na importância da Álgebra Booleana na computação.",
      isRamification: true,
      created_at: "2024-04-16T00:58:18.070Z",
      scenes: [
        {
          id: "1c3afa4d-d637-4812-9a80-506211f70809",
          storyId: "053fea70-d0a1-4234-b6d9-1aa373d6786e",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Falando em matemática discreta, não podemos esquecer da Álgebra Booleana e sua relevância na computação.",
          emotion: "thinking",
          position: "left",
          ramificationTheme: "Álgebra Booleana",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "c1dcf46f-3779-4076-b2ae-c6965d9220f2",
          storyId: "053fea70-d0a1-4234-b6d9-1aa373d6786e",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Sim, a Álgebra Booleana é fundamental para representar a lógica computacional de forma precisa.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Álgebra Booleana",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "c7d0c8b4-8e14-4071-8f0c-c84b80c4c972",
          storyId: "053fea70-d0a1-4234-b6d9-1aa373d6786e",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Os operadores lógicos como AND, OR e NOT são baseados nos princípios da Álgebra Booleana.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Álgebra Booleana",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "ff576481-5889-4ba6-bd99-c807af05ffd4",
          storyId: "053fea70-d0a1-4234-b6d9-1aa373d6786e",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Esses operadores são essenciais para a manipulação de dados binários e para o funcionamento de circuitos digitais.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Álgebra Booleana",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "c4977e94-e3c7-4f7e-b960-680019742b84",
          storyId: "053fea70-d0a1-4234-b6d9-1aa373d6786e",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Além disso, a simplificação de expressões booleanas é crucial para a otimização de circuitos e algoritmos.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Álgebra Booleana",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "93f3da91-cf13-4517-9f29-362e41257852",
          storyId: "053fea70-d0a1-4234-b6d9-1aa373d6786e",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "A Álgebra Booleana também é utilizada na construção de portas lógicas e na elaboração de algoritmos eficientes.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Álgebra Booleana",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "7408c28b-984f-47a4-80d6-8b4a0c1299ae",
          storyId: "053fea70-d0a1-4234-b6d9-1aa373d6786e",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Ela é a base para a lógica digital que rege os computadores e sistemas computacionais atuais.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Álgebra Booleana",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "5cc599fa-a59a-42b2-84aa-e6d1dfe335ac",
          storyId: "053fea70-d0a1-4234-b6d9-1aa373d6786e",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Sem a Álgebra Booleana, a computação moderna não seria possível.",
          emotion: "surprised",
          position: "right",
          ramificationTheme: "Álgebra Booleana",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "f1cc8148-033d-4237-b929-6fd76eaaaac5",
          storyId: "053fea70-d0a1-4234-b6d9-1aa373d6786e",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Realmente, é incrível como esses conceitos teóricos são essenciais para a tecnologia que usamos no dia a dia.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Álgebra Booleana",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "c7c18c52-98da-44a1-8651-588bfa22a42a",
          storyId: "053fea70-d0a1-4234-b6d9-1aa373d6786e",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Com certeza, a Álgebra Booleana tem um papel fundamental na computação e na tecnologia digital como um todo.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Álgebra Booleana",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "338c1cd8-269b-4f76-818f-f5892aaa05f3",
          storyId: "053fea70-d0a1-4234-b6d9-1aa373d6786e",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Interessante como a base matemática é alicerce de toda a nossa moderna tecnologia.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Álgebra Booleana",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "cd6c0884-b873-4ab0-9474-66ac3295ad10",
          storyId: "053fea70-d0a1-4234-b6d9-1aa373d6786e",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Sim, a matemática discreta e a Álgebra Booleana são pilares da computação moderna.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Álgebra Booleana",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "33e7c4df-df57-4178-8b03-dbb7bae920e3",
          storyId: "053fea70-d0a1-4234-b6d9-1aa373d6786e",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "De fato, a compreensão desses conceitos nos ajuda a entender melhor como nossos dispositivos e sistemas funcionam.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Álgebra Booleana",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "8868a21f-5c27-407f-8b47-32dffa958de1",
          storyId: "053fea70-d0a1-4234-b6d9-1aa373d6786e",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "E assim concluímos nossa conversa sobre a importância da matemática discreta e da Álgebra Booleana na computação.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Álgebra Booleana",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
      ],
    },
    {
      id: "a856e5d7-3ba2-4796-81f0-f2c160b9a8f4",
      userId: "1",
      theme: "Teoria dos Grafos",
      summary:
        "Os amigos continuam a conversa explorando a importância da Teoria dos Grafos na resolução de problemas complexos de computação.",
      isRamification: true,
      created_at: "2024-04-16T00:58:18.071Z",
      scenes: [
        {
          id: "ce956bc6-6490-4cf7-85a0-c007161a6762",
          storyId: "a856e5d7-3ba2-4796-81f0-f2c160b9a8f4",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Falando em grafos, você sabia que a Teoria dos Grafos é essencial para a resolução de problemas computacionais?",
          emotion: "thinking",
          position: "left",
          ramificationTheme: "Teoria dos Grafos",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "db8f1cb3-c7bf-4f62-9342-580dea394aee",
          storyId: "a856e5d7-3ba2-4796-81f0-f2c160b9a8f4",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Sim, os grafos são estruturas muito poderosas e versáteis na computação.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Teoria dos Grafos",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "f6f4ab06-e5c1-4e97-9103-040f8fbadda6",
          storyId: "a856e5d7-3ba2-4796-81f0-f2c160b9a8f4",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Os algoritmos de busca e caminhamento em grafos são amplamente utilizados na resolução de diversos problemas.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Teoria dos Grafos",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "010ab4c8-25a7-4788-a9b0-86f5dc4ee1c4",
          storyId: "a856e5d7-3ba2-4796-81f0-f2c160b9a8f4",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Verdade, a análise de grafos permite visualizar e resolver problemas de forma mais eficiente.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Teoria dos Grafos",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "63af3c35-2984-4060-a462-effa0cd005f4",
          storyId: "a856e5d7-3ba2-4796-81f0-f2c160b9a8f4",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Além disso, os grafos são fundamentais em áreas como redes de computadores e sistemas de informação.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Teoria dos Grafos",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "64ded38c-ca58-40bf-83a6-2be61c01304c",
          storyId: "a856e5d7-3ba2-4796-81f0-f2c160b9a8f4",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Sim, a representação de dados por meio de grafos facilita a interpretação e o desenvolvimento de soluções.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Teoria dos Grafos",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "caab139c-454f-425c-9cf1-b6be1e29bd9f",
          storyId: "a856e5d7-3ba2-4796-81f0-f2c160b9a8f4",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Os caminhos mais curtos em grafos são essenciais em diversas aplicações práticas.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Teoria dos Grafos",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "78cf0d3f-8512-49fc-9cf6-6c5fe31d55dc",
          storyId: "a856e5d7-3ba2-4796-81f0-f2c160b9a8f4",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "É impressionante como a Teoria dos Grafos é uma ferramenta poderosa para resolver problemas de otimização e roteamento.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Teoria dos Grafos",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "376e0fa5-af8b-41ae-808d-baf48bf70d88",
          storyId: "a856e5d7-3ba2-4796-81f0-f2c160b9a8f4",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "E não podemos esquecer da importância das árvores em grafos, não é mesmo?",
          emotion: "thinking",
          position: "left",
          ramificationTheme: "Teoria dos Grafos",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "87b4e4fd-5a4b-4b93-90e8-6d8140a400dd",
          storyId: "a856e5d7-3ba2-4796-81f0-f2c160b9a8f4",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Certamente, as árvores em grafos possuem propriedades únicas que facilitam a resolução de vários problemas.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Teoria dos Grafos",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "c32cc6b5-e63d-4dba-9204-4a80979434bf",
          storyId: "a856e5d7-3ba2-4796-81f0-f2c160b9a8f4",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "As aplicações da Teoria dos Grafos são infinitas e essenciais em diversas áreas da computação.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Teoria dos Grafos",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "93a39147-f864-445b-817f-3c4d5ad3b46e",
          storyId: "a856e5d7-3ba2-4796-81f0-f2c160b9a8f4",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Sim, a complexidade computacional pode ser reduzida significativamente utilizando conceitos da Teoria dos Grafos.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Teoria dos Grafos",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "13c85502-beac-474d-a0fb-f48383a8a7f2",
          storyId: "a856e5d7-3ba2-4796-81f0-f2c160b9a8f4",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "A Teoria dos Grafos é realmente fascinante e abre um universo de possibilidades na computação.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Teoria dos Grafos",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "3af4d2cf-2d70-441e-a1f5-28edecae6279",
          storyId: "a856e5d7-3ba2-4796-81f0-f2c160b9a8f4",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Sem dúvida, é incrível como uma simples estrutura matemática pode ter tantas aplicações práticas.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Teoria dos Grafos",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "c82f5d87-d163-4cb3-ac15-5b1539180aa6",
          storyId: "a856e5d7-3ba2-4796-81f0-f2c160b9a8f4",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Agora que discutimos a importância da Teoria dos Grafos, podemos voltar ao tema principal da matemática discreta.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Teoria dos Grafos",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
      ],
    },
    {
      id: "b1d51958-d343-4ac0-93b7-9bf72fdd7ba7",
      userId: "1",
      theme: "Problemas de Combinatória",
      summary:
        "Os amigos exploram a importância dos problemas de Combinatória na resolução de desafios computacionais complexos.",
      isRamification: true,
      created_at: "2024-04-16T00:58:18.071Z",
      scenes: [
        {
          id: "241295bb-423b-4b8c-ba4d-20c9e7e51472",
          storyId: "b1d51958-d343-4ac0-93b7-9bf72fdd7ba7",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Voltando à nossa conversa, e o que dizer sobre os problemas de Combinatória na computação?",
          emotion: "neutral",
          position: "left",
          ramificationTheme: "Combinatória",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "f1b8a486-109a-4563-88fa-482f90913f5a",
          storyId: "b1d51958-d343-4ac0-93b7-9bf72fdd7ba7",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Os problemas de Combinatória são essenciais para a análise de algoritmos e a otimização de soluções.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Combinatória",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "7a02f59a-8639-4ce5-80a7-751ae6135fb8",
          storyId: "b1d51958-d343-4ac0-93b7-9bf72fdd7ba7",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "É verdade, a combinação e a permutação de elementos são fundamentais em muitos cenários computacionais.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Combinatória",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "04bc10a3-3422-464d-af84-68098e92fe09",
          storyId: "b1d51958-d343-4ac0-93b7-9bf72fdd7ba7",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Sim, a ordem e a escolha dos elementos têm um impacto significativo na eficiência dos algoritmos.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Combinatória",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "fd6290a0-4d14-499a-960d-774da5ad123b",
          storyId: "b1d51958-d343-4ac0-93b7-9bf72fdd7ba7",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "E não podemos esquecer da análise de probabilidade que a Combinatória proporciona.",
          emotion: "thinking",
          position: "left",
          ramificationTheme: "Combinatória",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "ae5d3a3c-dddc-4edd-9691-f70d2212a202",
          storyId: "b1d51958-d343-4ac0-93b7-9bf72fdd7ba7",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Certamente, a probabilidade é um elemento crucial na avaliação de resultados e na tomada de decisões computacionais.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Combinatória",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "c8377512-009a-4cf6-a37f-e7ceea8f1068",
          storyId: "b1d51958-d343-4ac0-93b7-9bf72fdd7ba7",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "A combinação de elementos para formar conjuntos é essencial em muitos problemas computacionais.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Combinatória",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "cdd9dfc9-9c46-4f07-b3e5-5baa49770dc7",
          storyId: "b1d51958-d343-4ac0-93b7-9bf72fdd7ba7",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Sim, a manipulação de conjuntos e subconjuntos é uma habilidade valiosa na resolução de desafios computacionais.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Combinatória",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "7ed2bb95-1af1-4db1-a350-494f422c154f",
          storyId: "b1d51958-d343-4ac0-93b7-9bf72fdd7ba7",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "A Combinatória também permite a contagem eficiente de possíveis soluções para determinados problemas.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Combinatória",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "f7202713-2923-4db3-abb5-fc5f7d3ca801",
          storyId: "b1d51958-d343-4ac0-93b7-9bf72fdd7ba7",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Sim, a abordagem combinatória ajuda a encontrar soluções de forma sistemática e eficaz.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Combinatória",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "437305c0-7d5d-421d-816a-2b6643614280",
          storyId: "b1d51958-d343-4ac0-93b7-9bf72fdd7ba7",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Compreender os princípios da Combinatória é essencial para a resolução de problemas complexos na computação.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Combinatória",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "5cedf7fd-f4d3-4423-8b10-db00929c9d43",
          storyId: "b1d51958-d343-4ac0-93b7-9bf72fdd7ba7",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Definitivamente, a combinação de técnicas combinatoriais com algoritmos é fundamental para avançar em desafios computacionais.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Combinatória",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "d69332d9-22e5-4f30-8312-72ffdfd61449",
          storyId: "b1d51958-d343-4ac0-93b7-9bf72fdd7ba7",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Os problemas de Combinatória nos desafiam a pensar de forma estruturada e criativa.",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Combinatória",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "50519a8b-3043-4622-8833-7b98986e93ca",
          storyId: "b1d51958-d343-4ac0-93b7-9bf72fdd7ba7",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Sim, a Combinatória expande nossa capacidade de resolver problemas de maneira inovadora e eficiente.",
          emotion: "happy",
          position: "right",
          ramificationTheme: "Combinatória",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "7956726a-2569-439f-899c-838f5b8d3a7d",
          storyId: "b1d51958-d343-4ac0-93b7-9bf72fdd7ba7",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "É fascinante como a Combinatória desempenha um papel crucial na computação, não é mesmo?",
          emotion: "happy",
          position: "left",
          ramificationTheme: "Combinatória",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
      ],
    },
    {
      id: "3b8d3b22-271b-451b-b4ff-14e3bd49a0ce",
      userId: "1",
      theme: "Algoritmos de Busca e Ordenação",
      summary:
        "Os amigos continuam a conversa sobre a importância dos algoritmos de busca e ordenação na computação.",
      isRamification: true,
      created_at: "2024-04-16T00:58:18.071Z",
      scenes: [
        {
          id: "31a06534-a391-43d0-ae29-78992c5cf5f3",
          storyId: "3b8d3b22-271b-451b-b4ff-14e3bd49a0ce",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Falando em algoritmos de busca e ordenação, você já utilizou algum algoritmo específico?",
          emotion: "thinking",
          position: "left",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "0d587e2e-df6d-4dd2-9354-60f146480583",
          storyId: "3b8d3b22-271b-451b-b4ff-14e3bd49a0ce",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Sim, já estudei o algoritmo de busca binária e de ordenação por inserção. E você?",
          emotion: "happy",
          position: "right",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "8057793e-c31d-42f9-9cbc-5158ec265a0a",
          storyId: "3b8d3b22-271b-451b-b4ff-14e3bd49a0ce",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Eu também já trabalhei com esses algoritmos. A eficiência deles é impressionante, não é?",
          emotion: "happy",
          position: "left",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "02ec707e-4e18-46f8-b229-d33f8d228961",
          storyId: "3b8d3b22-271b-451b-b4ff-14e3bd49a0ce",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Com certeza, a busca binária é muito rápida para encontrar um elemento em uma lista ordenada.",
          emotion: "happy",
          position: "right",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "bb877262-61b5-40fe-9766-10a16bf3153f",
          storyId: "3b8d3b22-271b-451b-b4ff-14e3bd49a0ce",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "E a ordenação por inserção é simples e eficaz para listas pequenas.",
          emotion: "happy",
          position: "left",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "76ac2a71-33ed-4300-85b5-5c9c230cb6ee",
          storyId: "3b8d3b22-271b-451b-b4ff-14e3bd49a0ce",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Verdade, a escolha do algoritmo correto pode impactar significativamente o desempenho de um sistema.",
          emotion: "happy",
          position: "right",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "51c4e20e-f966-44bd-830d-851173963476",
          storyId: "3b8d3b22-271b-451b-b4ff-14e3bd49a0ce",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Você já teve que implementar um algoritmo de busca ou ordenação em algum projeto prático?",
          emotion: "thinking",
          position: "left",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "9178cd47-938c-4bde-99e5-5a1d54972642",
          storyId: "3b8d3b22-271b-451b-b4ff-14e3bd49a0ce",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Sim, em um projeto de análise de dados, utilizei um algoritmo de ordenação eficiente para classificar grandes conjuntos de dados.",
          emotion: "happy",
          position: "right",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "88aed812-1145-4659-b0b2-009bd07afd32",
          storyId: "3b8d3b22-271b-451b-b4ff-14e3bd49a0ce",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "É interessante como a escolha do algoritmo pode impactar diretamente na performance do sistema, não é?",
          emotion: "happy",
          position: "left",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "b3703005-9a4d-40ea-a11b-f1724b1f059f",
          storyId: "3b8d3b22-271b-451b-b4ff-14e3bd49a0ce",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Com certeza, a otimização do tempo de execução é um dos grandes desafios da computação.",
          emotion: "happy",
          position: "right",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "9f5dfef0-dd1f-4635-8cbc-ed3184eb1613",
          storyId: "3b8d3b22-271b-451b-b4ff-14e3bd49a0ce",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "A combinação de algoritmos de busca e ordenação adequados é essencial para resolver problemas complexos de forma eficiente.",
          emotion: "happy",
          position: "left",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "801614c7-1f0a-4540-aa1e-d5b9dca2d340",
          storyId: "3b8d3b22-271b-451b-b4ff-14e3bd49a0ce",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Sim, a análise criteriosa dos algoritmos disponíveis pode fazer toda a diferença na resolução de um problema.",
          emotion: "happy",
          position: "right",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "34f11023-e09c-4b1f-888c-d73aa4f5f5ac",
          storyId: "3b8d3b22-271b-451b-b4ff-14e3bd49a0ce",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Essa combinação de eficiência e escolha adequada dos algoritmos é o que realmente faz a diferença, não é?",
          emotion: "happy",
          position: "left",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "2a0ae740-eb13-4b92-b4d6-3d53b5355f6f",
          storyId: "3b8d3b22-271b-451b-b4ff-14e3bd49a0ce",
          backgroundUrl: "background",
          caracterId: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
          speech:
            "Com certeza, a prática e o conhecimento teórico dos algoritmos são fundamentais para o sucesso na computação.",
          emotion: "happy",
          position: "right",
          caracter: {
            id: "6a5e0f75-f02b-40d3-a65c-531ba2aaf499",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220424/original/pngtree-d-rendering-cute-female-character-avatar-wearing-teal-turtle-neck-and-png-image_7555239.png",
            name: "Caracter 2",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
        {
          id: "dbe5c6e9-3d0e-4eae-9208-1ccdedf741d7",
          storyId: "3b8d3b22-271b-451b-b4ff-14e3bd49a0ce",
          backgroundUrl: "background",
          caracterId: "cc9816d9-03a9-448b-9473-79b3269ddfad",
          caracterSpriteUrl:
            "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
          speech:
            "Que tal voltarmos à conversa sobre matemática discreta e explorarmos mais sobre suas aplicações?",
          emotion: "thinking",
          position: "left",
          caracter: {
            id: "cc9816d9-03a9-448b-9473-79b3269ddfad",
            baseSpriteRef:
              "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png",
            name: "Caracter 1",
            created_at: "2024-04-16T00:49:06.379Z",
          },
          created_at: "2024-04-16T00:58:18.071Z",
        },
      ],
    },
  ],
};
