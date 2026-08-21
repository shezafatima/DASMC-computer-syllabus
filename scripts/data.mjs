// Structured content sourced from Digital_Future_Skills_Complete_Syllabus_Grades_2-7_Final.docx
// Semicolon-separated syllabus phrases are split into bullet points for readability;
// wording is kept faithful to the original document.

export const themeIcons = {
  "Computer Foundations": "🖥️",
  "Digital Skills": "🗂️",
  "Office Productivity": "📊",
  "Internet Awareness": "🌐",
  "Internet & Digital Citizenship": "🌐",
  "Canva & Creativity": "🎨",
  "Canva & Digital Creativity": "🎨",
  "Scratch & Logic": "🐱",
  "Scratch & Computational Thinking": "🐱",
  "AI Awareness": "🤖",
  "AI Foundations": "🤖",
  "AI & Productivity Tools": "🤖",
  "AI Foundations → Advanced AI": "🤖",
  "Web Fundamentals": "🕸️",
  "Web Development Foundations": "🕸️",
};

export const programThemes = [
  {
    theme: "Computer Foundations",
    icon: "🖥️",
    coverage:
      "Computer basics, operating systems, files and folders, typing, shortcuts, troubleshooting and responsible device use.",
  },
  {
    theme: "Office Productivity",
    icon: "📊",
    coverage:
      "Documents, presentations and spreadsheets at an age-appropriate level, focused on practical use.",
  },
  {
    theme: "Internet & Digital Citizenship",
    icon: "🌐",
    coverage:
      "Internet use, searching, source awareness, privacy, security, digital footprint and responsible online behavior.",
  },
  {
    theme: "Canva & Digital Creativity",
    icon: "🎨",
    coverage:
      "Design principles, posters, presentations, infographics, visual storytelling and digital communication.",
  },
  {
    theme: "Scratch & Computational Thinking",
    icon: "🐱",
    coverage:
      "Algorithms, programming concepts, Scratch projects, problem-solving, debugging and age-appropriate game/project creation.",
  },
  {
    theme: "AI & Productivity Tools",
    icon: "🤖",
    coverage:
      "AI foundations, responsible use, prompting, selected productivity tools, fact-checking and age-appropriate AI-assisted work.",
  },
  {
    theme: "Web & Digital Building",
    icon: "🕸️",
    coverage:
      "Website concepts, HTML/CSS foundations and simple web projects, with depth adjusted by grade.",
  },
  {
    theme: "Innovation & Projects",
    icon: "🚀",
    coverage:
      "Practical activities, mini projects, final projects, presentation and online assessment.",
  },
];

export const programGoals = [
  "Build confident and responsible computer users.",
  "Develop creativity, logical thinking, problem-solving and digital communication.",
  "Teach students to create practical digital work rather than only memorize computer theory.",
  "Introduce programming through Scratch and gradually develop computational thinking.",
  "Build age-appropriate AI literacy and productive use of a small set of AI tools.",
  "Give every grade a complete standalone syllabus while increasing depth and complexity for older students.",
];

export const miniProjectModel = [
  {
    area: "Computer / Digital Skills",
    task: "Organize files or complete a digital-safety challenge.",
  },
  {area: "Office", task: "Create a short document, presentation or simple data sheet."},
  {area: "Canva", task: "Create a poster, infographic, card or campaign visual."},
  {area: "Scratch", task: "Create an animation, quiz, story or game."},
  {area: "AI", task: "Solve a small productivity/creative task and evaluate the output."},
  {area: "Web", task: "Create a simple webpage appropriate to the grade."},
];

export const finalAssessment = [
  {component: "Mini Projects", weight: "25%"},
  {component: "Practical Participation & Class Tasks", weight: "15%"},
  {component: "Final Project", weight: "30%"},
  {component: "Online Overall MCQ Exam", weight: "30%"},
];

export const finalProjectExpectations = [
  {grade: 2, expectation: "Guided digital story, creative poster or Scratch animation."},
  {grade: 3, expectation: "Interactive Scratch story, Canva campaign or digital presentation."},
  {grade: 4, expectation: "Scratch game, Canva campaign or interactive presentation."},
  {grade: 5, expectation: "Scratch game, digital campaign or learning resource."},
  {grade: 6, expectation: "Scratch game, simple website or AI-enhanced digital project."},
  {
    grade: 7,
    expectation: "Simple website, Scratch project, digital campaign or AI-assisted creative/learning project.",
  },
];

// Each grade: number, title, intro blurb, sections (in syllabus order), miniProjects, finalProject
export const grades = [
  {
    number: 2,
    title: "Computer Discovery",
    blurb:
      "A first, guided introduction to computers — building comfort with devices, mouse and keyboard, and simple creative and digital tools.",
    sections: [
      {
        title: "Computer Foundations",
        items: [
          {
            topic: "What is a computer?",
            type: "concept",
            definition: "A computer is a smart machine that follows our instructions to help us learn, play, and create.",
            example: "The big machine on your desk with a screen and keyboard is a computer.",
          },
          {
            topic: "Common computer devices",
            type: "concept",
            definition: "Computers come in many shapes and sizes, like desktops, laptops, and tablets.",
            example: "A tablet you use for games and a laptop your teacher uses are both computer devices.",
          },
          {
            topic: "Monitor, keyboard, mouse and basic parts",
            type: "concept",
            definition: "A computer has different parts that work together: the monitor shows pictures, the keyboard has buttons for typing, and the mouse helps us move things on the screen.",
            example: "Think of the monitor like a TV screen and the keyboard like a board full of buttons.",
          },
          {
            topic: "Turning a computer on/off",
            type: "steps",
            steps: [
              "Locate the power button on the computer case (CPU) or monitor.",
              "Press it once gently and wait for the lights to come on.",
              "To turn it off, click the 'Start' button on the screen, click 'Power,' and then click 'Shut down.'",
            ],
          },
          {
            topic: "Mouse skills; clicking, dragging and selecting",
            type: "steps",
            steps: [
              "Rest your hand gently on the mouse.",
              "Click the left button once to select an item.",
              "Click and hold the button to 'grab' an item and move it (dragging).",
            ],
          },
          {
            topic: "Basic keyboard use",
            type: "concept",
            definition: "The keyboard is used to type letters, numbers, and instructions into the computer.",
            example: "You can use the keyboard to type your name in a document or search for a video.",
          },
          {
            topic: "Opening and closing programs",
            type: "steps",
            steps: [
              "Find a picture (icon) on the desktop for the program you want.",
              "Double-click it quickly with the left mouse button to open it.",
              "To close it, click the small 'X' button in the top-right corner of the window.",
            ],
          },
        ],
      },
      {
        title: "Digital Skills",
        items: [
          {
            topic: "Simple file awareness",
            type: "concept",
            definition: "Every piece of work you do on a computer, like a drawing or a story, is saved as a 'file.'",
            example: "Your drawing of a house is a file, and your typed name is another file.",
          },
          {
            topic: "Saving and opening work with guidance",
            type: "steps",
            steps: [
              "Click the 'File' menu at the top of your program.",
              "Choose 'Save' and give your work a name.",
              "To see it again later, click 'File' then 'Open' and find your name.",
            ],
          },
          {
            topic: "Basic digital classroom rules",
            type: "concept",
            definition: "Rules help us stay safe and take care of our computers in the lab.",
            example: "Always ask your teacher before printing or going to a new website.",
          },
          {
            topic: "Safe and responsible computer use",
            type: "concept",
            definition: "Using computers responsibly means being kind to the equipment and only visiting safe places online.",
            example: "Never have food or drinks near the keyboard, and always tell a teacher if you see something strange.",
          },
        ],
      },
      {
        title: "Office Productivity",
        items: [
          {
            topic: "Very basic word processing: typing words/sentences",
            type: "steps",
            steps: [
              "Open a program like Word or Google Docs.",
              "Use the keyboard to type a short sentence about yourself.",
              "Press the 'Enter' key to move to a new line.",
            ],
          },
          {
            topic: "Simple formatting and adding a picture",
            type: "steps",
            steps: [
              "Select your text and click the 'B' button to make it bold.",
              "Click 'Insert' then 'Picture' to add an image from the computer.",
              "Drag the corners of the picture to make it smaller or larger.",
            ],
          },
          {
            topic: "Introduction to simple presentations",
            type: "concept",
            definition: "A presentation is a way to show your ideas using big pictures and a few words on 'slides.'",
            example: "You can make a slide with a picture of your favorite animal and its name.",
          },
        ],
      },
      {
        title: "Internet Awareness",
        items: [
          {
            topic: "What is the internet? What is a browser?",
            type: "concept",
            definition: "The internet is a giant library of information that connects computers all over the world. A browser is the app we use to visit that library.",
            example: "Chrome and Edge are browsers that help us 'surf' the internet.",
          },
          {
            topic: "Safe browsing with an adult/teacher",
            type: "concept",
            definition: "Safe browsing means only visiting websites that your teacher or parents say are okay.",
            example: "If a screen pops up that you don't recognize, always ask your teacher for help.",
          },
          {
            topic: "Recognizing that not everything online is trustworthy",
            type: "concept",
            definition: "Just because something is on a screen doesn't mean it is true. Always check with a grown-up.",
            example: "A video might show something impossible, like a talking dog, which is just for fun and not real.",
          },
        ],
      },
      {
        title: "Canva & Creativity",
        items: [
          {
            topic: "Simple templates",
            type: "steps",
            steps: [
              "Open Canva and choose a 'Poster' or 'Card' template.",
              "Scroll through the choices and click one you like.",
              "A template gives you a beautiful starting point for your design.",
            ],
          },
          {
            topic: "Adding text and images",
            type: "steps",
            steps: [
              "Click the 'Text' button on the left to add a heading.",
              "Click 'Elements' and search for a picture, like 'sun' or 'cat.'",
              "Drag the picture onto your design.",
            ],
          },
          {
            topic: "Basic posters, cards and visual stories",
            type: "concept",
            definition: "You can use Canva to make colorful posters for your room or cards for your friends.",
            example: "Creating a 'Happy Birthday' card with balloons and a picture is a great Canva project.",
          },
        ],
      },
      {
        title: "Scratch & Logic",
        items: [
          {
            topic: "Sequencing activities",
            type: "concept",
            definition: "Sequencing means putting steps in the right order so a task gets done correctly.",
            example: "Think of brushing your teeth: first you get the brush, then the paste, then you scrub.",
          },
          {
            topic: "Commands and instructions",
            type: "concept",
            definition: "A command is a simple instruction we give to a computer to make it do something.",
            example: "Telling a character in a game to 'Move 10 steps' is a command.",
          },
          {
            topic: "Scratch interface",
            type: "concept",
            definition: "The Scratch interface is the playground where we build our games and stories.",
            example: "It has a stage where the characters move and a toolbox full of code blocks.",
          },
          {
            topic: "Sprites",
            type: "concept",
            definition: "Sprites are the characters and objects in Scratch that we can program.",
            example: "The orange cat you see when you open Scratch is a sprite.",
          },
          {
            topic: "Simple movement and short animations",
            type: "steps",
            steps: [
              "Drag a 'Move 10 steps' block into the workspace.",
              "Click the block to see your sprite move on the stage.",
              "Add a 'Turn' block to make your sprite spin around.",
            ],
          },
        ],
      },
      {
        title: "AI Awareness",
        items: [
          {
            topic: "What is AI? Simple examples from everyday life",
            type: "concept",
            definition: "AI, or Artificial Intelligence, is a type of computer technology that helps machines 'think' or make decisions.",
            example: "When a tablet recognizes your face to unlock, or a video app suggests a song you might like, that is AI.",
          },
          {
            topic: "AI as a computer technology",
            type: "concept",
            definition: "AI is made by people using code to help computers solve problems and learn from information.",
            example: "Just like a student learns from books, an AI learns from data provided by programmers.",
          },
          {
            topic: "Basic safety and asking an adult/teacher before using AI tools",
            type: "concept",
            definition: "Always ask your teacher before using any AI tool, just like you ask before going to a new website.",
            example: "If you want to use a tool that draws pictures with AI, check with your teacher first.",
          },
        ],
      },
    ],
    miniProjects: [
      "My Computer Poster",
      "Digital Greeting Card",
      "Simple Scratch Animation",
      "My First Digital Story",
    ],
    finalProject:
      "A small guided digital creation combining typing, creativity and simple Scratch or Canva work.",
  },
  {
    number: 3,
    title: "Digital Explorer",
    blurb:
      "Students start exploring computers more independently — basic documents, safe browsing, Scratch storytelling and early AI awareness.",
    sections: [
      {
        title: "Computer Foundations",
        items: [
          {
            topic: "Computer hardware and software",
            type: "concept",
            definition: "Hardware is the physical parts of a computer you can touch, while software is the programs that tell the hardware what to do.",
            example: "The monitor is hardware; the browser you use to visit websites is software.",
          },
          {
            topic: "Operating system basics",
            type: "concept",
            definition: "The operating system (OS) is the main software that manages everything on the computer.",
            example: "Windows and macOS are examples of operating systems that help you open apps and save files.",
          },
          {
            topic: "Keyboard and mouse skills",
            type: "steps",
            steps: [
              "Practice using the mouse to click small icons and menu items accurately.",
              "Use the keyboard to type longer sentences, using the Shift key for capital letters.",
              "Learn to use the 'Right Click' to see more options for a file or folder.",
            ],
          },
          {
            topic: "Typing practice",
            type: "concept",
            definition: "Typing practice helps you find letters on the keyboard quickly so you can write faster.",
            example: "Using a fun typing game for 10 minutes a day can help you become a keyboard expert.",
          },
          {
            topic: "Files and folders",
            type: "steps",
            steps: [
              "Right-click on the desktop and choose 'New' then 'Folder.'",
              "Give your folder a name like 'My School Work.'",
              "Drag your files into the folder to keep them organized.",
            ],
          },
          {
            topic: "Simple shortcuts",
            type: "steps",
            steps: [
              "Press Ctrl + C to copy an item you have selected.",
              "Press Ctrl + V to paste the copied item somewhere else.",
              "Press Ctrl + S to quickly save your work.",
            ],
          },
        ],
      },
      {
        title: "Office Productivity",
        items: [
          {
            topic: "Basic documents; formatting text",
            type: "steps",
            steps: [
              "Type a short paragraph in Word or Docs.",
              "Highlight a word and change its color or font size using the toolbar.",
              "Use the 'Alignment' buttons to center your title on the page.",
            ],
          },
          {
            topic: "Inserting images",
            type: "steps",
            steps: [
              "Click the 'Insert' menu and select 'Image' or 'Picture.'",
              "Choose a picture saved on your computer or search for one online.",
              "Resize the image so it fits perfectly with your text.",
            ],
          },
          {
            topic: "Simple tables",
            type: "steps",
            steps: [
              "Go to the 'Insert' menu and click 'Table.'",
              "Choose how many rows and columns you need (e.g., 3x3).",
              "Click inside a cell to start typing information, like a class schedule.",
            ],
          },
          {
            topic: "Creating a short presentation with text and images",
            type: "steps",
            steps: [
              "Open PowerPoint or Slides and choose a theme.",
              "Add a title slide with your name and the topic.",
              "Add a new slide with a few bullet points and a matching picture.",
            ],
          },
        ],
      },
      {
        title: "Internet & Digital Citizenship",
        items: [
          {
            topic: "Browsers and search engines",
            type: "concept",
            definition: "A browser is the app you use to get on the internet, while a search engine is a website that helps you find specific information.",
            example: "Chrome is a browser; Google and Bing are search engines.",
          },
          {
            topic: "Basic searching",
            type: "steps",
            steps: [
              "Open your browser and go to a search engine.",
              "Type a few key words (e.g., 'fastest land animal') instead of a long question.",
              "Look at the results and click on a link that looks helpful.",
            ],
          },
          {
            topic: "Online safety",
            type: "concept",
            definition: "Online safety means protecting yourself and your information when you are on the internet.",
            example: "Never share your real name or address with someone you meet online.",
          },
          {
            topic: "Passwords",
            type: "concept",
            definition: "A password is like a secret key that keeps your accounts and information private.",
            example: "A good password uses a mix of letters and numbers and is something only you know.",
          },
          {
            topic: "Privacy",
            type: "concept",
            definition: "Privacy means keeping your personal information, like your age or school name, safe from strangers.",
            example: "Think of privacy like closing the curtains in your house so people can't see inside.",
          },
          {
            topic: "Respectful online behavior",
            type: "concept",
            definition: "Being respectful online means treating others the same way you would in the classroom.",
            example: "Always use kind words when sending a message or commenting on someone's work.",
          },
        ],
      },
      {
        title: "Canva & Creativity",
        items: [
          {
            topic: "Templates, text, images and elements",
            type: "steps",
            steps: [
              "Start with a template and click on any text to change what it says.",
              "Go to 'Elements' to find shapes, stickers, and icons for your design.",
              "Use the 'Uploads' button to add a picture from your computer.",
            ],
          },
          {
            topic: "Posters",
            type: "concept",
            definition: "Posters are large, eye-catching designs used to share information or celebrate an event.",
            example: "You can create a colorful poster to invite your friends to a science fair.",
          },
          {
            topic: "Invitations",
            type: "concept",
            definition: "Invitations are special cards used to ask people to come to a party or gathering.",
            example: "Design a birthday invitation with a fun theme and all the party details.",
          },
          {
            topic: "Book covers",
            type: "concept",
            definition: "A book cover shows the title and a picture that hints at what the story is about.",
            example: "Create a cover for your favorite story using a bold title and a cool background image.",
          },
          {
            topic: "Simple visual storytelling",
            type: "concept",
            definition: "Visual storytelling uses pictures and a little bit of text to tell a story or explain an idea.",
            example: "Make a series of 3-4 slides in Canva that show the steps of how a seed grows into a flower.",
          },
        ],
      },
      {
        title: "Scratch & Logic",
        items: [
          {
            topic: "Sprites and backdrops",
            type: "concept",
            definition: "Sprites are the characters, and backdrops are the backgrounds or settings for your Scratch project.",
            example: "You can have a fish sprite swimming in an underwater backdrop.",
          },
          {
            topic: "Sequence",
            type: "concept",
            definition: "A sequence is the order in which commands are carried out by the computer.",
            example: "If you want a sprite to move then talk, you must put the move block before the say block.",
          },
          {
            topic: "Events",
            type: "concept",
            definition: "Events are things that happen that 'trigger' or start a piece of code.",
            example: "The 'When Green Flag Clicked' block is an event that starts your program.",
          },
          {
            topic: "Motion",
            type: "steps",
            steps: [
              "Drag a 'Point in direction' block to change which way your sprite is facing.",
              "Use 'Glide' blocks to make your sprite move smoothly across the stage.",
              "Experiment with 'Go to random position' to see your sprite jump around.",
            ],
          },
          {
            topic: "Dialogue",
            type: "steps",
            steps: [
              "Use the 'Say [Hello!] for 2 seconds' block to make a speech bubble appear.",
              "Add another sprite and use the 'Wait' block to make them take turns talking.",
              "This creates a simple conversation between characters.",
            ],
          },
          {
            topic: "Simple loops",
            type: "concept",
            definition: "A loop is a command that tells the computer to repeat a set of instructions many times.",
            example: "Use a 'Repeat 10' block to make a sprite jump up and down ten times.",
          },
          {
            topic: "Interactive stories",
            type: "concept",
            definition: "Interactive stories are projects where the viewer can make choices that change what happens.",
            example: "You can program a sprite to ask 'Do you want to go left or right?' and react to the answer.",
          },
        ],
      },
      {
        title: "AI Awareness",
        items: [
          {
            topic: "What AI is; examples of AI around us",
            type: "concept",
            definition: "AI is computer technology that can perform tasks that usually require human intelligence, like recognizing speech or images.",
            example: "Smart speakers that answer your questions or map apps that find the fastest route use AI.",
          },
          {
            topic: "Generative AI at a basic level",
            type: "concept",
            definition: "Generative AI is a type of AI that can create new things, like stories, pictures, or even music.",
            example: "An AI that can write a poem about a dragon based on your request is a generative AI.",
          },
          {
            topic: "What AI can and cannot do",
            type: "concept",
            definition: "AI is very good at following patterns and processing data, but it doesn't have feelings or real-world experience like people do.",
            example: "An AI can write a story, but it doesn't actually understand what it feels like to be happy or sad.",
          },
          {
            topic: "Safe and responsible use",
            type: "concept",
            definition: "Using AI responsibly means always checking the information it gives you and never sharing personal details.",
            example: "If an AI tells you a fact for your homework, you should double-check it in a book or on a trusted website.",
          },
        ],
      },
    ],
    miniProjects: [
      "One-page digital document",
      "Canva event poster",
      "Scratch interactive story",
      "Simple online research task",
    ],
    finalProject: "A small digital story, Scratch animation/game or Canva-based awareness project.",
  },
  {
    number: 4,
    title: "Digital Creator",
    blurb:
      "A step up in independence and depth — real office tools, algorithmic thinking in Scratch, and structured introductions to generative AI.",
    sections: [
      {
        title: "Computer Foundations",
        items: [
          {
            topic: "Hardware and software",
            type: "concept",
            definition: "Hardware includes the physical parts of a computer system, while software includes the operating system and applications that run on it.",
            example: "The CPU and Hard Drive are internal hardware; the operating system is system software.",
          },
          {
            topic: "Operating systems",
            type: "concept",
            definition: "The operating system is the most important software that runs on a computer, managing memory, processes, and all of its software and hardware.",
            example: "Common operating systems include Windows, macOS, and Linux.",
          },
          {
            topic: "File and folder management",
            type: "steps",
            steps: [
              "Use the 'File Explorer' (Windows) or 'Finder' (Mac) to see all your work.",
              "Create a logical folder structure (e.g., Grade 4 > Science > Projects).",
              "Rename files clearly so you can find them later (e.g., 'Solar_System_Report_v1').",
            ],
          },
          {
            topic: "Typing",
            type: "concept",
            definition: "Accurate typing is an essential skill that allows you to communicate your ideas effectively on a computer.",
            example: "Aiming for 20-30 words per minute with high accuracy is a great goal for Grade 4.",
          },
          {
            topic: "Keyboard shortcuts",
            type: "steps",
            steps: [
              "Use Ctrl + Z to undo a mistake you just made.",
              "Use Ctrl + A to select everything in your document or folder.",
              "Use Alt + Tab to quickly switch between open programs.",
            ],
          },
          {
            topic: "Basic troubleshooting",
            type: "steps",
            steps: [
              "If a program freezes, try closing it and opening it again.",
              "Check that all cables (like the mouse or power) are plugged in securely.",
              "Restart the computer if it is acting slow or not responding.",
            ],
          },
        ],
      },
      {
        title: "Office Productivity",
        items: [
          {
            topic: "Word/Docs: formatting, images and tables",
            type: "steps",
            steps: [
              "Apply 'Styles' to your headings to make your document look professional.",
              "Use 'Text Wrapping' so your images sit neatly next to your writing.",
              "Add borders and shading to your tables to make them easier to read.",
            ],
          },
          {
            topic: "PowerPoint/Slides: structure and visual presentation",
            type: "steps",
            steps: [
              "Plan your presentation with a clear beginning, middle, and end.",
              "Use 'Transitions' to make the move between slides look smooth.",
              "Keep each slide simple with just a few bullet points and one clear image.",
            ],
          },
          {
            topic: "Excel/Sheets: simple tables, basic formulas and charts",
            type: "steps",
            steps: [
              "Enter data into rows and columns to create a clear table.",
              "Use the =SUM() formula to add up a list of numbers automatically.",
              "Select your data and click 'Insert Chart' to create a colorful bar graph.",
            ],
          },
        ],
      },
      {
        title: "Internet & Digital Citizenship",
        items: [
          {
            topic: "Browsers; effective searching",
            type: "steps",
            steps: [
              "Use specific keywords and quotation marks to find exact phrases.",
              "Open multiple tabs to compare information from different websites.",
              "Check the 'History' if you need to find a site you visited recently.",
            ],
          },
          {
            topic: "Evaluating basic information",
            type: "concept",
            definition: "Evaluating information means checking if a website is reliable and if the facts it shares are true.",
            example: "Check if the website has an author or if it is from a well-known organization like a museum or university.",
          },
          {
            topic: "Passwords; privacy",
            type: "steps",
            steps: [
              "Create a 'passphrase' using several random words for a stronger password.",
              "Never share your password with anyone, even your best friend.",
              "Check the privacy settings on any apps or sites you use with a parent.",
            ],
          },
          {
            topic: "Phishing/scams",
            type: "concept",
            definition: "Phishing is when someone sends a fake message to try and trick you into giving away your information.",
            example: "If you get an email saying you won a prize but you don't recognize the sender, it might be a scam.",
          },
          {
            topic: "Digital footprint and responsible behavior",
            type: "concept",
            definition: "Your digital footprint is the record of everything you do online, which can be seen by others.",
            example: "Always be kind and helpful in your posts, because your digital footprint can last a long time.",
          },
        ],
      },
      {
        title: "Canva & Digital Creativity",
        items: [
          {
            topic: "Design basics; typography; colors; layout",
            type: "concept",
            definition: "Good design uses clear fonts (typography), matching colors, and a balanced layout to share a message.",
            example: "Use a bold font for your title and a lighter one for the details so people know what to read first.",
          },
          {
            topic: "Posters",
            type: "steps",
            steps: [
              "Choose a poster size and a background that isn't too distracting.",
              "Add a large, catchy headline that can be read from far away.",
              "Include the 'Who, What, Where, and When' for any event you are advertising.",
            ],
          },
          {
            topic: "Presentations",
            type: "steps",
            steps: [
              "Use a consistent color scheme across all your slides.",
              "Add 'Animate' effects to your text so it appears one point at a time.",
              "Include a 'Thank You' or 'Questions' slide at the very end.",
            ],
          },
          {
            topic: "Infographics",
            type: "concept",
            definition: "An infographic uses pictures, icons, and short text to explain a topic or show data simply.",
            example: "An infographic about recycling could use icons of bottles and cans to show what can be reused.",
          },
          {
            topic: "Visual storytelling",
            type: "steps",
            steps: [
              "Create a series of panels like a comic strip to tell a short story.",
              "Use 'Speech Bubbles' and 'Thought Bubbles' for your characters.",
              "Choose colors and images that match the mood of your story.",
            ],
          },
        ],
      },
      {
        title: "Scratch & Computational Thinking",
        items: [
          {
            topic: "Algorithms; sequence; events",
            type: "concept",
            definition: "An algorithm is a step-by-step plan to solve a problem. In Scratch, this plan is made of a sequence of code blocks started by events.",
            example: "A recipe for baking a cake is a type of algorithm.",
          },
          {
            topic: "Loops; conditions",
            type: "concept",
            definition: "Loops repeat code, and conditions (if-then statements) let the program make decisions.",
            example: "Use an 'if' block to say: 'If the sprite touches the edge, then bounce back.'",
          },
          {
            topic: "Variables introduction",
            type: "concept",
            definition: "A variable is like a container that stores a piece of information that can change, like a score or a timer.",
            example: "Create a variable called 'Score' that goes up by 1 every time you click a sprite.",
          },
          {
            topic: "Debugging",
            type: "steps",
            steps: [
              "Read through your code blocks carefully to find where the mistake is.",
              "Test one small part of your code at a time to see if it works.",
              "Ask a friend to look at your code — sometimes a fresh pair of eyes helps!",
            ],
          },
          {
            topic: "Interactive stories and simple games",
            type: "steps",
            steps: [
              "Use 'Broadcast' blocks to send messages between sprites to coordinate actions.",
              "Add sounds and music to make your game more exciting.",
              "Create a 'Game Over' screen that appears when the player loses.",
            ],
          },
        ],
      },
      {
        title: "AI Foundations",
        items: [
          {
            topic: "What AI is; AI in everyday life",
            type: "concept",
            definition: "AI is a branch of computer science that builds systems capable of doing things that usually require human intelligence.",
            example: "Face recognition on a phone or the way Netflix recommends movies are common AI uses.",
          },
          {
            topic: "Generative AI; AI assistants",
            type: "concept",
            definition: "Generative AI is a type of AI that can create new content like text, images, or code. AI assistants help you with tasks and answer questions.",
            example: "ChatGPT and Gemini are AI assistants that can help you brainstorm ideas for a story.",
          },
          {
            topic: "Basic prompting",
            type: "steps",
            steps: [
              "Start with a clear instruction (e.g., 'Write a 3-sentence story about...').",
              "Give the AI some context (e.g., '...for a 4th grade class').",
              "If the answer isn't quite right, ask the AI to 'try again' with more detail.",
            ],
          },
          {
            topic: "Brainstorming and learning with AI",
            type: "steps",
            steps: [
              "Ask the AI for '5 ideas for a science project about plants.'",
              "Ask the AI to 'Explain photosynthesis in a simple way for a 10-year-old.'",
              "Use the AI's ideas as a starting point for your own original work.",
            ],
          },
          {
            topic: "AI limitations; privacy and responsible use",
            type: "concept",
            definition: "AI can sometimes make mistakes or share incorrect facts. It is important to protect your privacy and use AI as a tool to help you, not do all your work for you.",
            example: "Never tell an AI your full name, phone number, or where you live.",
          },
        ],
      },
    ],
    miniProjects: [
      "Digital research poster",
      "Canva infographic",
      "Scratch interactive quiz/game",
      "Simple productivity project",
    ],
    finalProject: "A manageable digital project such as a Scratch game, Canva campaign or interactive presentation.",
  },
  {
    number: 5,
    title: "Digital Problem Solver",
    blurb:
      "Students apply computer skills to solve practical problems — combining office tools, more advanced Scratch logic, and early AI-assisted work.",
    sections: [
      {
        title: "Computer Foundations",
        items: [
          {
            topic: "Computer systems",
            type: "concept",
            definition: "A computer system includes all the hardware and software working together to process and store information.",
            example: "Think of a system like a team: the CPU is the captain, the RAM is the short-term memory, and the hard drive is the library.",
          },
          {
            topic: "File organization",
            type: "steps",
            steps: [
              "Create a main folder for the current school year.",
              "Use sub-folders for each subject (e.g., Math, Science, English).",
              "Archive old work in a separate folder to keep your main workspace clean.",
            ],
          },
          {
            topic: "Productivity shortcuts",
            type: "steps",
            steps: [
              "Use Ctrl + F to quickly find a word or phrase in a document or webpage.",
              "Use Windows + D (or Cmd + F3) to hide all windows and see your desktop instantly.",
              "Use Ctrl + P to open the print menu for any document.",
            ],
          },
          {
            topic: "Basic troubleshooting",
            type: "steps",
            steps: [
              "If your internet is slow, check if other devices are working or try restarting the router.",
              "If you can't find a file, use the 'Search' bar in your file explorer.",
              "Look for error messages on the screen and try searching for what they mean online.",
            ],
          },
          {
            topic: "Digital organization",
            type: "concept",
            definition: "Digital organization is the practice of keeping your files, emails, and accounts tidy and easy to find.",
            example: "Giving your files clear names like 'Volcano_Diagram_Final.png' instead of 'image123.png' is a key part of organization.",
          },
        ],
      },
      {
        title: "Office Productivity",
        items: [
          {
            topic: "Practical use of documents, presentations and spreadsheets",
            type: "concept",
            definition: "Using the right office tool for the task makes your work more efficient and professional.",
            example: "Use Word for a report, PowerPoint for a class talk, and Excel to track your grades.",
          },
          {
            topic: "Tables; formatting",
            type: "steps",
            steps: [
              "Use 'Cell Merging' in a table to create a header that spans multiple columns.",
              "Apply 'Conditional Formatting' in a spreadsheet to highlight high or low numbers.",
              "Use consistent fonts and colors to make your tables look like they belong together.",
            ],
          },
          {
            topic: "Basic formulas; charts",
            type: "steps",
            steps: [
              "Use =AVERAGE() to find the middle value of a list of numbers.",
              "Use =MIN() and =MAX() to find the smallest and largest values in your data.",
              "Create a 'Pie Chart' to show how different parts make up a whole (e.g., your daily schedule).",
            ],
          },
          {
            topic: "Using the right tool for a task",
            type: "concept",
            definition: "Choosing the best application based on whether you need to write, present, or analyze data.",
            example: "If you want to write a letter, Word is better than Excel. If you want to list expenses, Excel is better.",
          },
        ],
      },
      {
        title: "Internet & Digital Citizenship",
        items: [
          {
            topic: "Effective research",
            type: "steps",
            steps: [
              "Use a variety of sources like encyclopedias, news sites, and educational videos.",
              "Take notes in your own words instead of copying and pasting directly.",
              "Keep a list of the websites you used so you can cite them later.",
            ],
          },
          {
            topic: "Reliable vs. unreliable information",
            type: "concept",
            definition: "Reliable information comes from experts and is backed by facts. Unreliable information may be biased or incorrect.",
            example: "A government health website is usually more reliable than a random person's social media post.",
          },
          {
            topic: "Privacy; scams",
            type: "steps",
            steps: [
              "Be careful with 'Clickbait' — headlines that sound too good to be true often lead to scams.",
              "Use 'Two-Factor Authentication' (2FA) if an app offers it for extra security.",
              "Never enter your password on a website that doesn't have the 'padlock' icon in the address bar.",
            ],
          },
          {
            topic: "Digital footprint",
            type: "concept",
            definition: "Your digital footprint is the permanent trail of your online activities, which can affect your reputation in the future.",
            example: "Think before you post: would you be happy for your teacher or future boss to see this?",
          },
          {
            topic: "Responsible communication",
            type: "concept",
            definition: "Responsible communication means being polite, clear, and safe when sending messages or participating in online groups.",
            example: "Avoid using 'ALL CAPS' because it can look like you are shouting at the other person.",
          },
        ],
      },
      {
        title: "Canva & Digital Creativity",
        items: [
          {
            topic: "Typography; color and layout",
            type: "concept",
            definition: "Advanced design involves choosing fonts and colors that match the mood of your project and arranging elements to guide the viewer's eye.",
            example: "Use 'Serif' fonts (with small feet) for a formal look, and 'Sans Serif' for a modern, clean look.",
          },
          {
            topic: "Infographics",
            type: "steps",
            steps: [
              "Pick a specific topic (e.g., 'How to Save Water') and find 3-4 key facts.",
              "Use icons and charts to represent your data visually.",
              "Keep the text short and use a clear path for the reader to follow from top to bottom.",
            ],
          },
          {
            topic: "Campaign posters",
            type: "concept",
            definition: "A campaign poster is designed to persuade people to take action or support a cause.",
            example: "Create a poster for a 'Clean Up the School' campaign with a powerful slogan and an inspiring image.",
          },
          {
            topic: "Presentation design",
            type: "steps",
            steps: [
              "Use high-quality images that aren't blurry or pixelated.",
              "Limit the amount of text on each slide to 5-6 bullet points maximum.",
              "Use 'Brand Kits' in Canva to keep your colors and fonts consistent.",
            ],
          },
          {
            topic: "Visual communication",
            type: "concept",
            definition: "Visual communication is the use of graphic elements to convey information or ideas quickly and effectively.",
            example: "A red octagon is a visual way to communicate 'Stop' without using any words.",
          },
        ],
      },
      {
        title: "Scratch & Computational Thinking",
        items: [
          {
            topic: "Algorithms; conditions; loops",
            type: "concept",
            definition: "Using algorithms with nested loops (loops inside loops) and complex conditions allows for more advanced logic.",
            example: "A loop that checks 'If touching player' every second is a common game mechanic.",
          },
          {
            topic: "Variables; operators",
            type: "concept",
            definition: "Operators let you perform math or compare values, which is essential for working with variables in games.",
            example: "Use the 'greater than' operator to check if 'Score > 10' to trigger a win.",
          },
          {
            topic: "Scoring; game mechanics",
            type: "steps",
            steps: [
              "Create a variable for 'Lives' and set it to 3 at the start of the game.",
              "Subtract 1 from 'Lives' whenever the sprite touches an enemy.",
              "Show a 'Game Over' message when 'Lives = 0.'",
            ],
          },
          {
            topic: "Debugging",
            type: "steps",
            steps: [
              "Use the 'Say' block to have your sprite tell you the value of a variable during the game.",
              "Slow down your code by adding 'Wait' blocks to see exactly what is happening step-by-step.",
              "Look for common mistakes, like forgetting to reset a variable at the start of the game.",
            ],
          },
        ],
      },
      {
        title: "AI & Productivity Tools",
        items: [
          {
            topic: "AI fundamentals; prompting basics",
            type: "concept",
            definition: "Building on the basics, good prompting involves being specific and giving the AI a clear role.",
            example: "Instead of 'Write a story,' try 'Act as a history teacher and tell a story about life in ancient Rome.'",
          },
          {
            topic: "Context and clear instructions",
            type: "steps",
            steps: [
              "State the goal clearly (e.g., 'I need a summary of this article').",
              "Specify the length (e.g., 'in exactly 100 words').",
              "Give the AI an intended audience (e.g., 'for a 5th grade student').",
            ],
          },
          {
            topic: "Brainstorming; summarizing; learning support",
            type: "steps",
            steps: [
              "Ask the AI to 'Brainstorm 10 title ideas for my project on ocean pollution.'",
              "Paste a long text and ask for 'the 3 most important points.'",
              "Ask 'Give me a quiz with 5 questions based on this paragraph' to test your learning.",
            ],
          },
          {
            topic: "AI-assisted creative work",
            type: "concept",
            definition: "AI can be used as a 'co-creator' to help you generate ideas for images, music, or writing.",
            example: "Use an AI image generator to create a background for your Scratch game based on your description.",
          },
          {
            topic: "Verification and responsible use",
            type: "steps",
            steps: [
              "Always check any dates, names, or facts an AI gives you using a second source.",
              "If the AI's output sounds strange or bias, ask it to 'cite its sources.'",
              "Be honest about when you have used AI to help you with your work.",
            ],
          },
          {
            topic: "Core tools: an AI assistant, Canva AI and one research/learning AI tool",
            type: "concept",
            definition: "Becoming familiar with a few key AI tools allows you to choose the best one for the task at hand.",
            example: "Use Gemini for writing, Magic Media in Canva for pictures, and Perplexity for searching.",
          },
        ],
      },
    ],
    miniProjects: [
      "Research infographic",
      "Spreadsheet task",
      "Scratch game",
      "Useful-prompt challenge",
      "AI-assisted creative project",
    ],
    finalProject: "A small digital campaign, Scratch game, interactive presentation or learning resource.",
  },
  {
    number: 6,
    title: "Digital Builder",
    blurb:
      "Students begin building, not just using — combining project-based office work, custom Scratch blocks, first HTML/CSS pages, and stronger AI prompting.",
    sections: [
      {
        title: "Computer Foundations",
        items: [
          {
            topic: "System components",
            type: "concept",
            definition: "Understanding how the CPU, RAM, storage, and motherboard work together to make a computer function.",
            example: "The CPU is the 'brain,' RAM is the 'workspace,' and storage is the 'filing cabinet.'",
          },
          {
            topic: "File organization",
            type: "steps",
            steps: [
              "Use tags or colors to mark important or urgent files.",
              "Set up an 'In-Progress' and a 'Completed' folder for your big projects.",
              "Clean out your 'Downloads' folder once a week to save space.",
            ],
          },
          {
            topic: "Efficient shortcuts",
            type: "steps",
            steps: [
              "Use Ctrl + Shift + T to reopen a browser tab you accidentally closed.",
              "Use Ctrl + K to quickly insert a hyperlink into your text.",
              "Use Windows + V (or Cmd + Ctrl + V) to access your clipboard history.",
            ],
          },
          {
            topic: "Troubleshooting",
            type: "concept",
            definition: "Troubleshooting is the process of identifying and solving technical problems through logic and testing.",
            example: "If your headphones don't work, check the volume settings, then try them in another device to see if the headphones are broken.",
          },
          {
            topic: "Digital security and responsible device use",
            type: "concept",
            definition: "Taking care of your digital health includes using strong passwords, updating software, and limiting screen time.",
            example: "Enable 'Automatic Updates' on your computer so you always have the latest security patches.",
          },
        ],
      },
      {
        title: "Office Productivity",
        items: [
          {
            topic: "Project-based documents, presentations and spreadsheets",
            type: "concept",
            definition: "Applying office tools to complete a single, large project that requires research, data analysis, and presentation.",
            example: "A project on local weather might include a written report (Word), a data table (Excel), and a final presentation (PowerPoint).",
          },
          {
            topic: "Charts; data organization",
            type: "steps",
            steps: [
              "Choose a 'Line Graph' to show how something changes over time.",
              "Use 'Sort' and 'Filter' in Excel to find the highest or lowest values in a large list.",
              "Add labels and a legend to your chart so it is clear and easy to understand.",
            ],
          },
          {
            topic: "Combining tools to communicate information",
            type: "steps",
            steps: [
              "Copy a chart from Excel and paste it into your Word report.",
              "Use the 'Link' option so the chart in Word updates automatically when you change the data in Excel.",
              "Export your finished report as a PDF so it looks the same on every computer.",
            ],
          },
        ],
      },
      {
        title: "Internet & Digital Citizenship",
        items: [
          {
            topic: "Research strategies; source evaluation",
            type: "steps",
            steps: [
              "Use 'Boolean Operators' like AND, OR, and NOT to refine your searches.",
              "Look for the '.gov,' '.edu,' or '.org' extensions to find more reliable sites.",
              "Cross-check a fact on three different websites to see if they all agree.",
            ],
          },
          {
            topic: "Misinformation",
            type: "concept",
            definition: "Misinformation is false or inaccurate information that is spread, sometimes intentionally to deceive people.",
            example: "A 'Deepfake' video that makes a famous person look like they are saying something they never said is a dangerous form of misinformation.",
          },
          {
            topic: "Privacy; scams",
            type: "steps",
            steps: [
              "Review the 'App Permissions' on your phone to see which apps are tracking your location.",
              "Be wary of messages asking for 'Verification Codes' — this is often a sign of a hack.",
              "Use a 'Guest Network' for your smart devices to keep your main home network safe.",
            ],
          },
          {
            topic: "Digital footprint",
            type: "concept",
            definition: "A positive digital footprint can help you with school applications and future jobs, while a negative one can cause problems.",
            example: "Sharing your projects and achievements online is a great way to build a professional digital footprint.",
          },
          {
            topic: "Ethical digital behavior",
            type: "concept",
            definition: "Ethics in the digital world includes respecting copyright, avoiding cyberbullying, and being honest in your work.",
            example: "If you use a photo from the internet, always give credit to the person who took it.",
          },
        ],
      },
      {
        title: "Canva & Digital Creativity",
        items: [
          {
            topic: "Visual hierarchy",
            type: "concept",
            definition: "Visual hierarchy is the arrangement of elements in a way that implies importance, guiding the viewer to the most critical information first.",
            example: "Make your most important text the largest and brightest so it stands out.",
          },
          {
            topic: "Infographic design",
            type: "steps",
            steps: [
              "Use 'Negative Space' (empty space) to prevent your design from looking cluttered.",
              "Pick a consistent set of icons to use throughout your infographic.",
              "Use lines or arrows to show the 'flow' of information.",
            ],
          },
          {
            topic: "Campaign communication",
            type: "concept",
            definition: "Strategic use of visuals and text to deliver a consistent message across different formats (posters, social media, slides).",
            example: "A campaign for 'Healthy Eating' should use the same colors and logo on the poster and the presentation slides.",
          },
          {
            topic: "Presentation design",
            type: "steps",
            steps: [
              "Use 'Slide Master' to set a consistent look for all your slides at once.",
              "Incorporate interactive elements like 'Hyperlinks' or 'QR Codes' for your audience.",
              "Rehearse with your slides so you know exactly when to click to the next one.",
            ],
          },
          {
            topic: "Consistent visual identity",
            type: "concept",
            definition: "A visual identity is the collection of visual elements that represent a brand or project, such as its logo, colors, and fonts.",
            example: "Companies like Apple or Nike have very strong visual identities that make them easy to recognize.",
          },
        ],
      },
      {
        title: "Scratch & Computational Thinking",
        items: [
          {
            topic: "Algorithms; flowcharts",
            type: "concept",
            definition: "A flowchart is a visual diagram that shows the steps of an algorithm using shapes and arrows.",
            example: "Drawing a flowchart for your game logic before you start coding helps you avoid mistakes.",
          },
          {
            topic: "Variables; conditions; loops; operators",
            type: "concept",
            definition: "Combining these elements allows you to create complex behavior, such as a sprite that moves faster as the score increases.",
            example: "Use a loop with an operator: 'Repeat until Score > 100.'",
          },
          {
            topic: "Custom blocks",
            type: "steps",
            steps: [
              "Click 'My Blocks' in the toolbox and then 'Make a Block.'",
              "Give your block a name like 'Jump' and define the steps (move up, then down).",
              "Use your new 'Jump' block whenever you need your sprite to leap, making your code cleaner.",
            ],
          },
          {
            topic: "Debugging",
            type: "steps",
            steps: [
              "Use 'Dry Running' — step through your code on paper to see if the logic works.",
              "Look for 'Infinite Loops' that might be causing your program to freeze.",
              "Use the 'Clean Up Blocks' option to keep your workspace tidy and easy to read.",
            ],
          },
          {
            topic: "Multi-level games and interactive projects",
            type: "steps",
            steps: [
              "Use a 'Level' variable to track progress.",
              "Switch to a new backdrop whenever the 'Level' changes.",
              "Increase the difficulty (e.g., more enemies) as the player moves to higher levels.",
            ],
          },
        ],
      },
      {
        title: "Web Fundamentals",
        items: [
          {
            topic: "What websites are; webpages vs. websites",
            type: "concept",
            definition: "A webpage is a single document on the internet, while a website is a collection of related webpages linked together.",
            example: "The 'About Us' page is a webpage; the entire 'Dars-e-Arqam' site is a website.",
          },
          {
            topic: "HTML structure; headings; paragraphs",
            type: "steps",
            steps: [
              "Start your file with the `<!DOCTYPE html>` tag.",
              "Use `<h1>` to `<h6>` tags for your titles and subheadings.",
              "Wrap your main text in `<p>` tags for paragraphs.",
            ],
          },
          {
            topic: "Images; links",
            type: "steps",
            steps: [
              "Use the `<img>` tag with an 'src' attribute to show a picture.",
              "Use the `<a>` tag with an 'href' attribute to create a link to another page.",
              "Always include 'alt' text for images so people who can't see them know what they are.",
            ],
          },
          {
            topic: "Introductory CSS",
            type: "concept",
            definition: "CSS (Cascading Style Sheets) is the language used to style and layout webpages, such as changing colors and fonts.",
            example: "Using CSS to make all your `<h1>` headings blue and centered.",
          },
          {
            topic: "Simple layouts",
            type: "steps",
            steps: [
              "Use the `<div>` tag to group elements together into sections.",
              "Experiment with 'padding' and 'margin' to add space around your content.",
              "Use 'text-align: center' to keep your headers and images in the middle of the page.",
            ],
          },
        ],
      },
      {
        title: "AI & Productivity Tools",
        items: [
          {
            topic: "AI concepts; stronger prompting",
            type: "concept",
            definition: "Professional prompting involves providing the AI with clear constraints, a specific format, and examples of what you want.",
            example: "Try 'Write a 3-paragraph summary of this text in bullet points, using a formal tone, and highlighting 3 key facts.'",
          },
          {
            topic: "Context, constraints and desired output",
            type: "steps",
            steps: [
              "Context: 'I am writing a report on renewable energy.'",
              "Constraint: 'Do not use any jargon; keep it under 200 words.'",
              "Output: 'Format the answer as a table with two columns: Advantage and Disadvantage.'",
            ],
          },
          {
            topic: "Research support; summarization",
            type: "steps",
            steps: [
              "Use an AI to 'Explain this complex scientific paper in 5 simple bullet points.'",
              "Ask the AI to 'Find three opposing viewpoints on this topic' to ensure a balanced report.",
              "Use AI to generate a list of 'Frequently Asked Questions' for your project.",
            ],
          },
          {
            topic: "Creative generation; fact-checking",
            type: "steps",
            steps: [
              "Generate a creative story prompt, then use AI to help you outline the plot.",
              "Paste a specific claim into an AI and ask 'Is this factually correct based on reliable sources?'",
              "Use AI to generate different color palettes or logo ideas for your Canva project.",
            ],
          },
          {
            topic: "Limitations; privacy and copyright",
            type: "concept",
            definition: "AI models are trained on huge amounts of data, which can sometimes include biased information or copyrighted material.",
            example: "Remember that an AI doesn't 'know' things; it predicts the next word based on patterns, so it can be confidently wrong.",
          },
          {
            topic: "AI-assisted coding introduction",
            type: "steps",
            steps: [
              "Ask an AI to 'Write a simple HTML template for a personal homepage.'",
              "Use the AI to 'Explain what this piece of CSS code does.'",
              "Ask the AI to 'Find the error in my HTML code' and paste your work.",
            ],
          },
          {
            topic: "Core tools: an AI assistant, Canva AI and one research/learning AI tool",
            type: "concept",
            definition: "Choosing the right AI tool for the right job is a key digital skill.",
            example: "Use Gemini for complex brainstorming, Magic Design in Canva for quick layouts, and Perplexity for verified research.",
          },
        ],
      },
    ],
    miniProjects: [
      "Scratch game with scoring",
      "HTML webpage",
      "AI fact-checking task",
      "Canva campaign",
      "Data presentation",
    ],
    finalProject: "A functional Scratch game, basic website, digital campaign or AI-enhanced learning/creative project.",
  },
  {
    number: 7,
    title: "Digital Innovator",
    blurb:
      "The capstone year — strategic use of productivity tools, complex Scratch projects, real website building, and advanced, responsible AI use.",
    sections: [
      {
        title: "Computer Foundations",
        items: [
          {
            topic: "Computer systems and components",
            type: "concept",
            definition: "A deep dive into how specialized hardware like GPUs and SSDs impact performance for gaming, design, and AI.",
            example: "An SSD (Solid State Drive) is much faster than a traditional Hard Drive, helping apps load instantly.",
          },
          {
            topic: "Operating systems",
            type: "concept",
            definition: "Comparing how different operating systems handle permissions, file systems, and user privacy.",
            example: "Linux is often used by developers because it is open-source and very customizable.",
          },
          {
            topic: "Efficient file management",
            type: "steps",
            steps: [
              "Use 'Cloud Storage' (like Google Drive or OneDrive) to sync your files across different devices.",
              "Set up 'Version Control' for your big projects by saving copies with dates (e.g., Project_v2026_08_21).",
              "Use file compression (ZIP files) to send large projects over email or the web.",
            ],
          },
          {
            topic: "Troubleshooting",
            type: "steps",
            steps: [
              "Use the 'Task Manager' (Windows) or 'Activity Monitor' (Mac) to find apps that are using too much CPU or RAM.",
              "Learn to read 'Log Files' to find the specific cause of a system crash.",
              "Practice 'Safe Mode' booting to fix problems when the computer won't start normally.",
            ],
          },
          {
            topic: "Security awareness",
            type: "concept",
            definition: "Security awareness is the knowledge and attitude students have regarding the protection of their digital assets.",
            example: "Being able to spot a 'Zero-Day Vulnerability' or knowing why you shouldn't use public Wi-Fi for banking.",
          },
          {
            topic: "Digital productivity",
            type: "concept",
            definition: "Digital productivity is about using technology strategically to manage your time, focus, and output effectively.",
            example: "Using 'Focus Mode' on your laptop to block distractions while you work on your final project.",
          },
        ],
      },
      {
        title: "Office Productivity",
        items: [
          {
            topic: "Strategic use of documents, presentations and spreadsheets for research, data and project communication",
            type: "concept",
            definition: "Choosing and mastering office tools to deliver high-impact, professional-quality work for any academic or real-world scenario.",
            example: "Using 'Mail Merge' to create personalized letters or 'Data Validation' to make an error-free spreadsheet.",
          },
          {
            topic: "Charts and structured information",
            type: "steps",
            steps: [
              "Create 'Pivot Tables' in Excel to summarize thousands of rows of data in seconds.",
              "Use 'Trendlines' in your charts to predict future values based on current data.",
              "Use 'Interactive Dashboards' in Google Sheets to show multiple charts that update together.",
            ],
          },
        ],
      },
      {
        title: "Internet & Digital Citizenship",
        items: [
          {
            topic: "Advanced search strategies",
            type: "steps",
            steps: [
              "Use 'filetype:pdf' to find specific document types or 'site:.gov' to search only government websites.",
              "Use the 'Tools' menu in Google to filter results by date or location.",
              "Search for 'Similar Pages' to find more sources on the same topic.",
            ],
          },
          {
            topic: "Source verification",
            type: "steps",
            steps: [
              "Use 'Lateral Reading' — open new tabs to see what other sources say about the website you are on.",
              "Check the 'About Us' page for clear funding or bias.",
              "Use 'Reverse Image Search' to see if a photo has been used in a different context before.",
            ],
          },
          {
            topic: "Misinformation and manipulation",
            type: "concept",
            definition: "Understanding how algorithms and 'Echo Chambers' can reinforce false beliefs and how to resist digital manipulation.",
            example: "Knowing that social media feeds are designed to show you things you already agree with, which can hide the truth.",
          },
          {
            topic: "Privacy; scams",
            type: "steps",
            steps: [
              "Learn about 'End-to-End Encryption' and why it is important for private messaging.",
              "Identify 'Dark Patterns' — design tricks that make you sign up for things or spend money by mistake.",
              "Set up a 'Security Key' for your most important accounts.",
            ],
          },
          {
            topic: "Digital footprint",
            type: "concept",
            definition: "Managing your online reputation proactively to ensure it reflects your best self for college and career opportunities.",
            example: "A LinkedIn profile or a digital portfolio website is a great way to showcase your Grade 7 projects.",
          },
          {
            topic: "Copyright and responsible digital participation",
            type: "concept",
            definition: "Understanding 'Fair Use,' 'Creative Commons,' and the legal aspects of using other people's digital work.",
            example: "Using 'Creative Commons Attribution' to correctly credit a piece of music you used in your video.",
          },
        ],
      },
      {
        title: "Canva & Digital Creativity",
        items: [
          {
            topic: "Professional visual hierarchy",
            type: "concept",
            definition: "Using advanced principles like the 'Rule of Thirds' and 'Leading Lines' to create professional-grade compositions.",
            example: "Aligning your most important graphic on one of the grid intersections to make it naturally more appealing.",
          },
          {
            topic: "Typography and color",
            type: "steps",
            steps: [
              "Use 'Color Theory' to pick 'Complementary' or 'Analogous' colors that work together.",
              "Adjust the 'Kerning' (space between letters) and 'Leading' (space between lines) for better readability.",
              "Pair a 'Display' font for titles with a highly readable 'Body' font for paragraphs.",
            ],
          },
          {
            topic: "Infographics",
            type: "steps",
            steps: [
              "Tell a 'Data Story' by choosing the most surprising or important facts to highlight.",
              "Use 'Visual Metaphors' (like a growing tree for progress) to explain complex ideas.",
              "Ensure your infographic has a clear 'Call to Action' at the end.",
            ],
          },
          {
            topic: "Presentation storytelling",
            type: "concept",
            definition: "Moving beyond just slides to using narrative techniques to engage and persuade an audience.",
            example: "Starting your presentation with a personal story or a 'Hook' that grabs everyone's attention.",
          },
          {
            topic: "Campaign and project design",
            type: "steps",
            steps: [
              "Create a 'Brand Guide' with your chosen hex codes, font names, and logo variations.",
              "Design a consistent 'Multi-Channel' campaign that includes a poster, a website banner, and a presentation.",
              "Use Canva's 'Content Planner' to schedule when your designs should be shared.",
            ],
          },
        ],
      },
      {
        title: "Scratch & Computational Thinking",
        items: [
          {
            topic: "Algorithms; flowcharts",
            type: "concept",
            definition: "Designing complex, multi-path algorithms and documenting them with detailed flowcharts before implementation.",
            example: "A flowchart for a platformer game that includes jumping, gravity, and collision detection.",
          },
          {
            topic: "Variables; conditions; loops; operators",
            type: "concept",
            definition: "Mastering the interplay of these elements to create dynamic systems, like a game shop with changing prices.",
            example: "Using 'Global Variables' to track data across multiple sprites and levels.",
          },
          {
            topic: "Custom blocks",
            type: "steps",
            steps: [
              "Use custom blocks with 'Inputs' (parameters) to make your code reusable.",
              "Create a block like 'Jump [Height]' so you can make your sprite jump different distances with one block.",
              "Tick 'Run without screen refresh' for custom blocks that need to happen instantly, like drawing a complex shape.",
            ],
          },
          {
            topic: "Debugging",
            type: "steps",
            steps: [
              "Implement 'Error Logging' — have your sprites output their state to a list when something goes wrong.",
              "Learn to recognize 'Logic Errors' — where the code runs fine but doesn't do what you intended.",
              "Collaborate on 'Peer Reviews' — explain your code to a classmate to find hidden bugs.",
            ],
          },
          {
            topic: "Project planning",
            type: "concept",
            definition: "Using tools like 'Trello' or simple checklists to manage the different tasks in a large software project.",
            example: "Breaking down your final game into 'Assets,' 'Logic,' and 'Testing' phases.",
          },
          {
            topic: "More complex game mechanics",
            type: "steps",
            steps: [
              "Implement 'Physics' like acceleration, friction, and momentum.",
              "Create 'AI Enemies' that follow a path or react to the player's position.",
              "Use 'Lists' to store and retrieve large amounts of data, like an inventory system or a high-score board.",
            ],
          },
        ],
      },
      {
        title: "Web Development Foundations",
        items: [
          {
            topic: "How websites work",
            type: "concept",
            definition: "Understanding the Client-Server model, DNS, and how browsers render HTML, CSS, and JavaScript.",
            example: "When you type a URL, your browser (the client) asks a server for the files, which it then displays.",
          },
          {
            topic: "HTML structure; headings; text; images; links",
            type: "steps",
            steps: [
              "Use 'Semantic HTML' tags like `<header>`, `<nav>`, `<main>`, and `<footer>` for better structure.",
              "Organize your project with separate folders for 'css' and 'images.'",
              "Use 'Relative Paths' (e.g., images/logo.png) so your links work on any computer.",
            ],
          },
          {
            topic: "Basic CSS; colors; typography; spacing",
            type: "steps",
            steps: [
              "Use 'External Stylesheets' to keep your CSS separate from your HTML.",
              "Master the 'CSS Box Model' — understanding content, padding, border, and margin.",
              "Use 'Google Fonts' to add professional typography to your site.",
            ],
          },
          {
            topic: "Simple layouts",
            type: "steps",
            steps: [
              "Use 'CSS Flexbox' to easily align items in rows or columns.",
              "Apply 'Media Queries' to make your website 'Responsive' (so it looks good on phones too).",
              "Use 'Opacity' and 'Transitions' to add subtle hover effects to your buttons.",
            ],
          },
          {
            topic: "Building and refining a small website",
            type: "steps",
            steps: [
              "Draft a 'Sitemap' showing how all your pages connect.",
              "Build a 'Wireframe' of your homepage before you start coding.",
              "Ask friends to test your site and 'Refine' your layout based on their feedback.",
            ],
          },
        ],
      },
      {
        title: "AI Foundations → Advanced AI",
        items: [
          {
            topic: "Introduction to AI and generative AI",
            type: "concept",
            definition: "Exploring the history of AI and how 'Large Language Models' (LLMs) are trained on massive datasets to predict human-like responses.",
            example: "Understanding that ChatGPT doesn't 'think' but uses probability to find the best next word.",
          },
          {
            topic: "How AI assistants are used; strengths and limitations",
            type: "concept",
            definition: "Strategic use of AI as a mentor, tutor, and creative partner while being aware of its 'Hallucinations.'",
            example: "An AI is great for summarizing a book but bad at solving a brand-new, complex logic puzzle.",
          },
          {
            topic: "Responsible use",
            type: "concept",
            definition: "Ethical considerations including academic integrity, data privacy, and the environmental impact of training large AI models.",
            example: "Always disclosing your AI use in your school projects and not using AI to create harmful content.",
          },
          {
            topic: "Advanced prompting: context, role, constraints and output formats",
            type: "steps",
            steps: [
              "Role: 'Act as a senior software engineer.'",
              "Context: 'I am building a website for a local bakery.'",
              "Constraint: 'Write the code in clean, commented HTML/CSS only.'",
              "Output: 'Provide the code blocks followed by a brief explanation of each section.'",
            ],
          },
          {
            topic: "Prompt refinement; multi-step prompting",
            type: "steps",
            steps: [
              "Start with a broad request, then use 'Follow-up Prompts' to narrow it down.",
              "Ask the AI to 'Review your own work and suggest improvements' for a better final result.",
              "Use 'Chain of Thought' prompting: 'Think step-by-step to solve this problem.'",
            ],
          },
          {
            topic: "Research and source verification",
            type: "steps",
            steps: [
              "Use AI tools that provide 'Citations' (links to original sources) for every claim.",
              "Verify the AI's citations — sometimes AI can 'Hallucinate' (make up) fake links.",
              "Compare AI summaries with the original source text to ensure accuracy.",
            ],
          },
          {
            topic: "AI-assisted writing, design and coding",
            type: "concept",
            definition: "Integrating AI into your professional workflow to speed up repetitive tasks while maintaining your own creative control.",
            example: "Using AI to 'Refactor' (clean up) your Scratch logic or generate a starting outline for a 1000-word essay.",
          },
          {
            topic: "Hallucinations; privacy; copyright; bias",
            type: "concept",
            definition: "The critical risks of AI: 'Hallucinations' (false facts), 'Bias' (unfairness in the data), and 'Copyright' (using artists' work without permission).",
            example: "An AI might confidently state that a person died on a certain date even if they are still alive.",
          },
          {
            topic: "Evaluating AI output",
            type: "steps",
            steps: [
              "Check for 'Internal Consistency' — does the AI contradict itself in the same answer?",
              "Look for 'Biased Language' — is the AI favoring one perspective over another?",
              "Determine the 'Reliability Score' of the AI's answer based on your own research.",
            ],
          },
          {
            topic: "Core tools: an AI assistant, Canva AI and one research/learning AI tool",
            type: "concept",
            definition: "Mastering a suite of professional AI tools and knowing when to switch between them for maximum impact.",
            example: "Use Gemini for coding help, Magic Media for high-end design, and Elicit or Perplexity for academic research.",
          },
        ],
      },
    ],
    miniProjects: [
      "AI prompt challenge",
      "Source-verification task",
      "Styled webpage",
      "Scratch project",
      "AI-assisted presentation or design project",
    ],
    finalProject:
      "A manageable student-designed website, Scratch game, digital campaign, AI-assisted learning/creative project or combination of these.",
  },
];
