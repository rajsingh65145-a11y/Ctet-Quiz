const englishQuestions = [
  {
    id: 51,
    subject: "English",
    question: "Choose the correct synonym of 'Happy'.",
    options: ["Sad", "Joyful", "Angry", "Weak"],
    answer: 1,
    explanation: "'Joyful' means happy or cheerful."
  },

  {
    id: 52,
    subject: "English",
    question: "Choose the correct antonym of 'Brave'.",
    options: ["Strong", "Bold", "Cowardly", "Clever"],
    answer: 2,
    explanation: "'Cowardly' is the opposite of brave."
  },

  {
    id: 53,
    subject: "English",
    question: "Choose the correctly spelt word.",
    options: ["Enviroment", "Environment", "Envirnment", "Environmant"],
    answer: 1,
    explanation: "The correct spelling is 'Environment'."
  },

  {
    id: 54,
    subject: "English",
    question: "Choose the correct plural form of 'Child'.",
    options: ["Childs", "Childes", "Children", "Childrens"],
    answer: 2,
    explanation: "The plural form of 'child' is 'children'."
  },

  {
    id: 55,
    subject: "English",
    question: "Choose the correct article: He is ___ honest man.",
    options: ["a", "an", "the", "no article"],
    answer: 1,
    explanation: "'Honest' begins with a vowel sound, so 'an' is used."
  },

  {
    id: 56,
    subject: "English",
    question: "Choose the correct preposition: She is good ___ mathematics.",
    options: ["in", "at", "on", "for"],
    answer: 1,
    explanation: "The correct expression is 'good at mathematics'."
  },

  {
    id: 57,
    subject: "English",
    question: "Choose the correct tense: She ___ to school every day.",
    options: ["go", "goes", "going", "gone"],
    answer: 1,
    explanation: "With 'she', the simple present form is 'goes'."
  },

  {
    id: 58,
    subject: "English",
    question: "Choose the correct form: They ___ playing cricket now.",
    options: ["is", "am", "are", "was"],
    answer: 2,
    explanation: "'They' takes 'are' in the present continuous tense."
  },

  {
    id: 59,
    subject: "English",
    question: "What is the past tense of 'Go'?",
    options: ["Goed", "Gone", "Went", "Going"],
    answer: 2,
    explanation: "The simple past form of 'go' is 'went'."
  },

  {
    id: 60,
    subject: "English",
    question: "Choose the correct passive voice: 'Ram writes a letter.'",
    options: [
      "A letter is written by Ram.",
      "A letter was written by Ram.",
      "A letter has written by Ram.",
      "A letter writes by Ram."
    ],
    answer: 0,
    explanation: "The simple present passive form is 'is written'."
  },

  {
    id: 61,
    subject: "English",
    question: "Choose the correct indirect speech: He said, 'I am tired.'",
    options: [
      "He said that I am tired.",
      "He said that he was tired.",
      "He says that he was tired.",
      "He said he is tired."
    ],
    answer: 1,
    explanation: "In reported speech, 'I am' changes to 'he was'."
  },

  {
    id: 62,
    subject: "English",
    question: "Which word is a noun?",
    options: ["Beautiful", "Quickly", "Teacher", "Run"],
    answer: 2,
    explanation: "'Teacher' is a noun because it names a person."
  },

  {
    id: 63,
    subject: "English",
    question: "Which word is an adjective?",
    options: ["Beauty", "Beautiful", "Beautifully", "Beautify"],
    answer: 1,
    explanation: "'Beautiful' describes a noun, so it is an adjective."
  },

  {
    id: 64,
    subject: "English",
    question: "Which word is an adverb?",
    options: ["Slow", "Slowly", "Slowness", "Slower"],
    answer: 1,
    explanation: "'Slowly' describes how an action is performed."
  },

  {
    id: 65,
    subject: "English",
    question: "Choose the correct conjunction: I was tired ___ I continued working.",
    options: ["because", "but", "or", "so"],
    answer: 1,
    explanation: "'But' shows contrast between the two ideas."
  },

  {
    id: 66,
    subject: "English",
    question: "Choose the correct pronoun: Riya is a student. ___ is intelligent.",
    options: ["He", "She", "It", "They"],
    answer: 1,
    explanation: "'She' is the appropriate pronoun for Riya."
  },

  {
    id: 67,
    subject: "English",
    question: "Choose the correct question tag: You are coming, ___?",
    options: ["are you", "aren't you", "isn't you", "don't you"],
    answer: 1,
    explanation: "A positive statement takes a negative question tag."
  },

  {
    id: 68,
    subject: "English",
    question: "Choose the correct comparative form of 'Good'.",
    options: ["Gooder", "Best", "Better", "More good"],
    answer: 2,
    explanation: "The comparative form of 'good' is 'better'."
  },

  {
    id: 69,
    subject: "English",
    question: "Choose the superlative form of 'Bad'.",
    options: ["Badder", "Worst", "Worse", "More bad"],
    answer: 1,
    explanation: "The superlative form of 'bad' is 'worst'."
  },

  {
    id: 70,
    subject: "English",
    question: "Choose the correct sentence.",
    options: [
      "She don't like tea.",
      "She doesn't likes tea.",
      "She doesn't like tea.",
      "She not like tea."
    ],
    answer: 2,
    explanation: "With 'doesn't', the main verb remains in its base form."
  },

  {
    id: 71,
    subject: "English",
    question: "What is the main purpose of teaching English at the primary level?",
    options: [
      "Only memorising grammar rules",
      "Developing communication skills",
      "Only learning spellings",
      "Only writing essays"
    ],
    answer: 1,
    explanation: "Language teaching should primarily help learners develop meaningful communication skills."
  },

  {
    id: 72,
    subject: "English",
    question: "Which skill is related to understanding spoken language?",
    options: ["Reading", "Writing", "Listening", "Grammar"],
    answer: 2,
    explanation: "Listening involves understanding spoken language."
  },

  {
    id: 73,
    subject: "English",
    question: "Which skill involves producing spoken language?",
    options: ["Speaking", "Reading", "Writing", "Listening"],
    answer: 0,
    explanation: "Speaking involves producing language orally."
  },

  {
    id: 74,
    subject: "English",
    question: "Which approach gives importance to real-life communication?",
    options: [
      "Grammar Translation Method",
      "Communicative Language Teaching",
      "Memorisation Method",
      "Lecture Method"
    ],
    answer: 1,
    explanation: "Communicative Language Teaching focuses on meaningful communication."
  },

  {
    id: 75,
    subject: "English",
    question: "What is the role of a teacher in a learner-centred classroom?",
    options: [
      "Only lecturer",
      "Facilitator of learning",
      "Strict examiner",
      "Silent observer only"
    ],
    answer: 1,
    explanation: "In a learner-centred classroom, the teacher facilitates and supports learning."
  },

  {
    id: 76,
    subject: "English",
    question: "Which activity best develops speaking skills?",
    options: [
      "Role play",
      "Copying paragraphs",
      "Silent reading",
      "Dictation only"
    ],
    answer: 0,
    explanation: "Role play provides learners with opportunities to use spoken language."
  },

  {
    id: 77,
    subject: "English",
    question: "Which activity is most useful for developing reading comprehension?",
    options: [
      "Copying words",
      "Answering questions based on a passage",
      "Memorising alphabets",
      "Writing numbers"
    ],
    answer: 1,
    explanation: "Questions based on a passage encourage learners to understand and interpret text."
  },

  {
    id: 78,
    subject: "English",
    question: "What is phonics mainly concerned with?",
    options: [
      "Relationship between letters and sounds",
      "Sentence translation",
      "Essay writing",
      "Punctuation only"
    ],
    answer: 0,
    explanation: "Phonics focuses on the relationship between written letters and their corresponding sounds."
  },

  {
    id: 79,
    subject: "English",
    question: "Which is an example of formative assessment?",
    options: [
      "Final examination",
      "Board examination",
      "Regular classroom feedback",
      "Annual examination only"
    ],
    answer: 2,
    explanation: "Formative assessment takes place during learning and provides feedback for improvement."
  },

  {
    id: 80,
    subject: "English",
    question: "Why should children be encouraged to read storybooks?",
    options: [
      "Only to improve handwriting",
      "To develop vocabulary and comprehension",
      "Only to memorise words",
      "To avoid classroom activities"
    ],
    answer: 1,
    explanation: "Storybooks can develop vocabulary, comprehension, imagination and reading habits."
  },

  {
    id: 81,
    subject: "English",
    question: "What does 'bilingual' mean?",
    options: [
      "Knowing one language",
      "Knowing two languages",
      "Knowing three languages",
      "Knowing no language"
    ],
    answer: 1,
    explanation: "Bilingual refers to the ability to use two languages."
  },

  {
    id: 82,
    subject: "English",
    question: "Which is the best way to correct a child's language error?",
    options: [
      "Humiliate the child",
      "Ignore every error",
      "Give supportive feedback",
      "Punish the child"
    ],
    answer: 2,
    explanation: "Supportive feedback helps children learn from errors without creating fear."
  },

  {
    id: 83,
    subject: "English",
    question: "Which activity encourages vocabulary development?",
    options: [
      "Word games",
      "Punishment",
      "Silence",
      "Copying the same word repeatedly"
    ],
    answer: 0,
    explanation: "Word games provide an engaging way to learn and practise vocabulary."
  },

  {
    id: 84,
    subject: "English",
    question: "What is skimming?",
    options: [
      "Reading every word carefully",
      "Reading quickly to get the main idea",
      "Reading only the last sentence",
      "Reading aloud"
    ],
    answer: 1,
    explanation: "Skimming means reading quickly to understand the overall idea of a text."
  },

  {
    id: 85,
    subject: "English",
    question: "What is scanning?",
    options: [
      "Reading for a specific piece of information",
      "Reading for pleasure",
      "Reading every word",
      "Memorising a passage"
    ],
    answer: 0,
    explanation: "Scanning means looking through a text to find specific information."
  },

  {
    id: 86,
    subject: "English",
    question: "Which of the following is a receptive language skill?",
    options: ["Speaking", "Writing", "Listening", "Presentation"],
    answer: 2,
    explanation: "Listening is a receptive skill because learners receive and process language."
  },

  {
    id: 87,
    subject: "English",
    question: "Which pair contains two productive language skills?",
    options: [
      "Listening and Reading",
      "Speaking and Writing",
      "Reading and Speaking",
      "Listening and Writing"
    ],
    answer: 1,
    explanation: "Speaking and writing are productive skills because learners produce language."
  },

  {
    id: 88,
    subject: "English",
    question: "Which method traditionally uses translation between the mother tongue and the target language?",
    options: [
      "Communicative Method",
      "Grammar Translation Method",
      "Direct Method",
      "Task-Based Learning"
    ],
    answer: 1,
    explanation: "The Grammar Translation Method makes extensive use of translation."
  },

  {
    id: 89,
    subject: "English",
    question: "Which classroom practice promotes interaction among learners?",
    options: [
      "Pair work",
      "Only teacher lecture",
      "Silent copying",
      "Individual memorisation only"
    ],
    answer: 0,
    explanation: "Pair work allows learners to interact and practise language with each other."
  },

  {
    id: 90,
    subject: "English",
    question: "What is the main purpose of a dictionary?",
    options: [
      "Only to provide pictures",
      "To provide information about words",
      "Only to teach handwriting",
      "Only to test memory"
    ],
    answer: 1,
    explanation: "A dictionary provides information such as meanings, spellings, pronunciation and usage."
  },

  {
    id: 91,
    subject: "English",
    question: "Choose the correct meaning of the idiom 'A piece of cake'.",
    options: [
      "Something difficult",
      "Something very easy",
      "A food item only",
      "Something expensive"
    ],
    answer: 1,
    explanation: "'A piece of cake' means something that is very easy to do."
  },

  {
    id: 92,
    subject: "English",
    question: "Choose the correct meaning of 'Break the ice'.",
    options: [
      "To break something",
      "To start a friendly conversation",
      "To become angry",
      "To stop talking"
    ],
    answer: 1,
    explanation: "'Break the ice' means to make people feel more comfortable and start interaction."
  },

  {
    id: 93,
    subject: "English",
    question: "Choose the correct word: The sun ___ in the east.",
    options: ["rise", "rises", "rising", "rose"],
    answer: 1,
    explanation: "A general truth is expressed using the simple present: 'The sun rises in the east.'"
  },

  {
    id: 94,
    subject: "English",
    question: "Choose the correct sentence.",
    options: [
      "There are a book on the table.",
      "There is a book on the table.",
      "There be a book on the table.",
      "There have a book on the table."
    ],
    answer: 1,
    explanation: "'A book' is singular, so 'there is' is correct."
  },

  {
    id: 95,
    subject: "English",
    question: "Which punctuation mark is used at the end of a question?",
    options: [".", ",", "?", "!"],
    answer: 2,
    explanation: "A question mark (?) is used at the end of a direct question."
  },

  {
    id: 96,
    subject: "English",
    question: "Which approach encourages children to learn language through meaningful tasks?",
    options: [
      "Task-Based Language Teaching",
      "Only translation",
      "Rote memorisation",
      "Lecture method"
    ],
    answer: 0,
    explanation: "Task-Based Language Teaching uses meaningful tasks as a central part of language learning."
  },

  {
    id: 97,
    subject: "English",
    question: "A multilingual classroom should be viewed by a teacher as:",
    options: [
      "A problem only",
      "A valuable linguistic resource",
      "A reason to exclude some children",
      "An obstacle to all learning"
    ],
    answer: 1,
    explanation: "Learners' different languages can be valuable resources for classroom learning."
  },

  {
    id: 98,
    subject: "English",
    question: "Which activity is most suitable for developing listening comprehension?",
    options: [
      "Listening to a short story and answering questions",
      "Copying a paragraph",
      "Memorising spellings",
      "Drawing only"
    ],
    answer: 0,
    explanation: "Listening to meaningful content followed by questions directly develops listening comprehension."
  },

  {
    id: 99,
    subject: "English",
    question: "What is the best reason for using authentic materials in language teaching?",
    options: [
      "They expose learners to language used in real contexts",
      "They eliminate the need for teachers",
      "They make grammar unnecessary",
      "They are always easier than textbooks"
    ],
    answer: 0,
    explanation: "Authentic materials expose learners to language in meaningful real-world contexts."
  },

  {
    id: 100,
    subject: "English",
    question: "A good language assessment should primarily:",
    options: [
      "Only rank students",
      "Measure and support language learning",
      "Punish weak learners",
      "Test memorisation only"
    ],
    answer: 1,
    explanation: "Good assessment measures learning and provides information that can help improve teaching and learning."
  }
];

export default englishQuestions;