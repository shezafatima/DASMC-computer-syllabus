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
        diagram: {
          caption: "The main parts of a computer",
          mermaid: "flowchart TD\n  A[Screen / Monitor] --- B[Computer Box / CPU]\n  B --- C[Keyboard]\n  B --- D[Mouse]"
        },
        items: [
          {
            topic: "What is a computer?",
            type: "concept",
            definition: "A computer is a smart electronic machine that follows our instructions. We can use it to help us learn new things, play fun games, and create beautiful art.",
            example: "The big machine sitting on your desk with a bright screen and a keyboard is a computer. A tablet is also a type of computer.",
            whyItMatters: "Computers are all around us and help people do their jobs every single day.",
            funFactOrMisconception: "Did you know that computers used to be as big as an entire room? Now they can fit in your pocket!"
          },
          {
            topic: "Common computer devices",
            type: "concept",
            definition: "Computers come in many different shapes and sizes to do different jobs. Some are heavy and stay on a desk, while others are light and can be carried around.",
            example: "A tablet you use to play games at home and the laptop your teacher uses in class are both computer devices.",
            whyItMatters: "Knowing the different types helps you pick the right tool for the job you want to do.",
            funFactOrMisconception: "A phone is actually a very powerful small computer, not just a device for calling people!"
          },
          {
            topic: "Monitor, keyboard, mouse and basic parts",
            type: "concept",
            definition: "A computer has different parts that work together as a team. The monitor shows pictures, the keyboard has buttons for typing, and the mouse helps us point at things.",
            example: "Think of the monitor like a television screen. The keyboard is like a board full of letter buttons.",
            whyItMatters: "You need to know what each part does so you can use the computer properly.",
            funFactOrMisconception: "The 'mouse' on your desk doesn't eat cheese! It got its name because the wire looks like a long tail."
          },
          {
            topic: "Turning a computer on/off",
            type: "steps",
            intro: "Learn how to wake up your computer and put it to sleep safely.",
            steps: [
              {
                action: "Look for the power button on the computer case or monitor.",
                detail: "It is usually a round button with a circle and a line through it."
              },
              {
                action: "Press the button once gently and wait for the screen to light up.",
                detail: "Do not push it hard or hold it down, just a quick tap is enough."
              },
              {
                action: "To turn it off, click the 'Start' button at the bottom of the screen.",
                detail: "This looks like a small window or a colorful flag."
              },
              {
                action: "Click the 'Power' icon, and then click 'Shut down'.",
                detail: "Wait patiently until the screen goes completely black before walking away."
              }
            ],
            tip: "Never pull the plug out of the wall to turn off your computer!"
          },
          {
            topic: "Mouse skills; clicking, dragging and selecting",
            type: "steps",
            intro: "Practice using the mouse to control what happens on the screen.",
            steps: [
              {
                action: "Rest your hand gently on the mouse with your fingers pointing forward.",
                detail: "Your index finger should sit lightly on the left button."
              },
              {
                action: "Move the mouse slowly on the desk to see the pointer move on the screen.",
                detail: "If you run out of space on the desk, lift the mouse up and move it back."
              },
              {
                action: "Click the left button once very quickly to select an item.",
                detail: "This makes a short 'click' sound, like tapping a button."
              },
              {
                action: "Click and hold the button down to 'grab' an item.",
                detail: "Keep your finger pushed down on the button."
              },
              {
                action: "Move the mouse while holding the button to move the item (dragging).",
                detail: "Let go of the button when the item is exactly where you want it."
              }
            ],
            tip: "Don't squeeze the mouse tightly! Hold it gently like a small egg."
          },
          {
            topic: "Basic keyboard use",
            type: "concept",
            definition: "The keyboard is the tool we use to type letters, numbers, and instructions into the computer. It has many rows of keys that you press with your fingers.",
            example: "You can use the keyboard to type your name into a story or to search for a fun video.",
            whyItMatters: "Using the keyboard is the fastest way to write words on a computer screen.",
            funFactOrMisconception: "The letters on the keyboard are not in ABC order! They are arranged in a special way to make typing easier."
          },
          {
            topic: "Opening and closing programs",
            type: "steps",
            intro: "Start the apps you want to use and close them when you are done.",
            steps: [
              {
                action: "Find a small picture on the screen for the program you want to use.",
                detail: "These small pictures are called 'icons' and they sit on your desktop."
              },
              {
                action: "Move your mouse pointer exactly over the icon.",
                detail: "Make sure the tip of the arrow is touching the picture."
              },
              {
                action: "Double-click the left mouse button very quickly.",
                detail: "Click two times fast, like a quick heartbeat: tap-tap!"
              },
              {
                action: "Wait a moment for the program window to open up.",
                detail: "Sometimes computers need a few seconds to think, so be patient."
              },
              {
                action: "To close it, click the small 'X' button in the top-right corner.",
                detail: "The 'X' is usually inside a red box to warn you that it will close."
              }
            ],
            tip: "If double-clicking is hard, you can click the icon once and then press the 'Enter' key on the keyboard."
          }
        ]
      },
      {
        title: "Digital Skills",
        items: [
          {
            topic: "Simple file awareness",
            type: "concept",
            definition: "A 'file' is like a piece of paper on your computer. Every piece of work you do, like a drawing or a typed story, is saved as its very own file.",
            example: "If you draw a picture of a house, you save it as an image file. If you type your name, it is a document file.",
            whyItMatters: "If you do not understand files, you might lose the beautiful work you spent a long time making.",
            funFactOrMisconception: "Sometimes people think their work is gone forever when they close a program, but it is just hiding in a file safely on the computer!"
          },
          {
            topic: "Saving and opening work with guidance",
            type: "steps",
            intro: "Keep your work safe so you can look at it again tomorrow.",
            steps: [
              {
                action: "Look at the very top of your program for the word 'File' and click it.",
                detail: "This opens a menu with a list of things you can do."
              },
              {
                action: "Move your mouse down and click the word 'Save'.",
                detail: "A new box will pop up asking you what to call your work."
              },
              {
                action: "Use the keyboard to type a name, like 'My Dog Drawing'.",
                detail: "Always give it a name you will remember."
              },
              {
                action: "Click the blue 'Save' button at the bottom of the box.",
                detail: "Now your work is safe on the computer."
              },
              {
                action: "To see it again later, click 'File', then 'Open', and find your drawing's name.",
                detail: "Click on the name, and your drawing will appear on the screen!"
              }
            ],
            tip: "Save your work often, even before you are completely finished!"
          },
          {
            topic: "Basic digital classroom rules",
            type: "concept",
            definition: "Digital rules are special instructions that help everyone stay safe and keep the computers working perfectly for the next class.",
            example: "One important rule is to always wash your hands before touching the keyboard, and another is to never run in the computer lab.",
            whyItMatters: "If we don't follow the rules, computers might get broken, and then nobody can play games or learn.",
            funFactOrMisconception: "Rules are not meant to stop you from having fun; they are meant to make sure the fun never stops!"
          },
          {
            topic: "Safe and responsible computer use",
            type: "concept",
            definition: "Being responsible means you are gentle with the equipment, you share nicely, and you only visit websites that are safe for kids.",
            example: "Responsible students never have drinks near the keyboard, and they always tell a teacher if they see something strange on the screen.",
            whyItMatters: "Computers are expensive and fragile. Being responsible shows that you are grown up enough to use them.",
            funFactOrMisconception: "Some students think hitting the keys harder makes the computer work faster. It doesn't—it just breaks the keys!"
          }
        ]
      },
      {
        title: "Office Productivity",
        items: [
          {
            topic: "Very basic word processing: typing words/sentences",
            type: "steps",
            intro: "Write a short story or a sentence about yourself on the computer.",
            steps: [
              {
                action: "Open a writing program like Word or Google Docs from your desktop.",
                detail: "Look for an icon that looks like a blue 'W' or a blue piece of paper."
              },
              {
                action: "Click inside the white page so you see a blinking line.",
                detail: "This blinking line tells you where your letters will appear."
              },
              {
                action: "Use the keyboard to type a short sentence, like 'I like playing soccer.'",
                detail: "Take your time and look for each letter."
              },
              {
                action: "Press the long 'Spacebar' at the bottom to put a space between words.",
                detail: "Without spaces, all your words will be stuck together!"
              },
              {
                action: "Press the 'Enter' key to move to a brand new line.",
                detail: "The 'Enter' key is a big button on the right side of the keyboard."
              }
            ],
            tip: "If you make a mistake, press the 'Backspace' key to erase the last letter."
          },
          {
            topic: "Simple formatting and adding a picture",
            type: "steps",
            intro: "Make your words look bold and add a picture to your page.",
            steps: [
              {
                action: "Use your mouse to click and drag over your text to highlight it in blue.",
                detail: "This tells the computer which words you want to change."
              },
              {
                action: "Click the button with the big 'B' at the top of the screen.",
                detail: "Your letters will become thicker and darker. This is called 'Bold'."
              },
              {
                action: "Click the word 'Insert' at the top, then click 'Picture'.",
                detail: "A menu will open to let you pick a photo."
              },
              {
                action: "Find a picture of an animal or a car on the computer and click 'Open'.",
                detail: "The picture will pop right onto your page!"
              },
              {
                action: "Click the corners of the picture and drag to make it smaller or bigger.",
                detail: "Be careful not to squish the picture too much."
              }
            ],
            tip: "You can also change the color of your words by clicking the button with an 'A' and a red line under it."
          },
          {
            topic: "Introduction to simple presentations",
            type: "concept",
            definition: "A presentation is a fun way to share your ideas using big pictures and a few huge words on pages called 'slides.'",
            example: "You can make a slide with a giant picture of your favorite dinosaur and type its name really big at the top.",
            whyItMatters: "Presentations help you show and tell your friends about what you are learning.",
            funFactOrMisconception: "A presentation slide is not meant for reading a whole book! It is just for showing cool pictures while you talk."
          }
        ]
      },
      {
        title: "Internet Awareness",
        items: [
          {
            topic: "What is the internet? What is a browser?",
            type: "concept",
            definition: "The internet is a giant invisible web that connects computers all over the entire world. A browser is the special app we use to look at websites on that web.",
            example: "When you use Google Chrome or Microsoft Edge to play an online math game, you are using a browser to surf the internet.",
            whyItMatters: "Without the internet, computers would only know what is saved inside them. The internet lets them talk to each other.",
            funFactOrMisconception: "The internet doesn't float in the sky! It travels through huge cables buried deep under the ocean."
          },
          {
            topic: "Safe browsing with an adult/teacher",
            type: "concept",
            definition: "Safe browsing means you only visit websites that a trusted adult, like your teacher or parent, says are okay for kids.",
            example: "If a strange box pops up on your screen that you don't recognize, do not click it! Always raise your hand and ask your teacher for help.",
            whyItMatters: "Just like you wouldn't wander into a strange neighborhood alone, you shouldn't wander around the internet without an adult.",
            funFactOrMisconception: "A picture of a cute puppy doesn't mean a website is safe. Some unsafe sites use cute pictures to trick kids into clicking."
          },
          {
            topic: "Recognizing that not everything online is trustworthy",
            type: "concept",
            definition: "Just because you see a picture or read a story on a screen doesn't mean it is completely true. People can put anything on the internet.",
            example: "You might see a funny video of a dog driving a school bus. That is just for fun and movie magic, not a real dog driver!",
            whyItMatters: "If you believe everything you see online, you might learn things that are wrong and share them with your friends.",
            funFactOrMisconception: "Some people think that if a website looks beautiful, it must be true. But anyone can make a pretty website!"
          }
        ]
      },
      {
        title: "Canva & Creativity",
        items: [
          {
            topic: "Simple templates",
            type: "steps",
            intro: "Start your art with a beautiful background that is already made for you.",
            steps: [
              {
                action: "Open Canva and look at the top for the search bar.",
                detail: "Type in 'Poster' or 'Card' to find what you want to make."
              },
              {
                action: "Scroll down slowly to look at all the colorful choices.",
                detail: "These choices are called 'templates' and they are like coloring pages."
              },
              {
                action: "Click on the picture that you like the best.",
                detail: "It will open up really big so you can start working on it."
              },
              {
                action: "Click on any word on the template to change it to your own words.",
                detail: "You can erase their words and type your name instead."
              }
            ],
            tip: "Look for templates that don't have a small crown on them. The crown means you have to pay for it!"
          },
          {
            topic: "Adding text and images",
            type: "steps",
            intro: "Make the poster your own by adding new words and fun pictures.",
            steps: [
              {
                action: "Click the 'Text' button on the left side of the screen.",
                detail: "It looks like a big letter 'T'."
              },
              {
                action: "Click 'Add a heading' and type a big, bold word.",
                detail: "Try typing 'Happy Birthday' or 'Welcome to my room'."
              },
              {
                action: "Click the 'Elements' button to find pictures.",
                detail: "It has a picture of a square and a circle on it."
              },
              {
                action: "Type a word like 'sun' or 'cat' in the search bar at the top.",
                detail: "Canva will show you hundreds of pictures of suns and cats!"
              },
              {
                action: "Click a picture and drag it onto your beautiful design.",
                detail: "You can use the corners to make the cat tiny or huge."
              }
            ],
            tip: "Don't add too many pictures! Leave some empty space so people can read your words."
          },
          {
            topic: "Basic posters, cards and visual stories",
            type: "concept",
            definition: "You can use Canva to make colorful posters for your bedroom wall or sweet cards for your friends and family.",
            example: "Creating a 'Happy Mother's Day' card with beautiful flowers and a picture of you is a great Canva project.",
            whyItMatters: "Making things yourself is much more special than buying them from a store.",
            funFactOrMisconception: "You don't even need crayons or markers to be an artist! Digital art is just as creative as drawing on paper."
          }
        ]
      },
      {
        title: "Scratch & Logic",
        items: [
          {
            topic: "Sequencing activities",
            type: "concept",
            definition: "Sequencing means putting steps in the exact right order so a task gets done correctly.",
            example: "Think of brushing your teeth: first you get the brush, then you put on the paste, then you scrub. If you scrub before getting the brush, it won't work!",
            whyItMatters: "Computers are not very smart on their own. They need you to put instructions in the perfect sequence to work.",
            funFactOrMisconception: "Sometimes people think coding is just typing fast like in movies. It is actually more like writing a recipe very carefully."
          },
          {
            topic: "Commands and instructions",
            type: "concept",
            definition: "A command is a simple, direct instruction we give to a computer to make it do something specific.",
            example: "Telling a character in a game to 'Move 10 steps' or 'Turn around' is a command.",
            whyItMatters: "Without commands, computers would just sit there doing nothing at all.",
            funFactOrMisconception: "You cannot tell a computer 'Go over there.' You have to give it a specific command like 'Move 50 steps right.'"
          },
          {
            topic: "Scratch interface",
            type: "concept",
            definition: "The Scratch interface is the fun digital playground where we build our games and stories.",
            example: "It has a 'stage' where the characters act, and a 'toolbox' full of colorful code blocks on the left.",
            whyItMatters: "Knowing where all the tools are makes it much easier and faster to build your game.",
            funFactOrMisconception: "The colors of the blocks actually mean something! Blue blocks are for moving, and purple blocks are for looking."
          },
          {
            topic: "Sprites",
            type: "concept",
            definition: "Sprites are the characters and objects in Scratch that we can control with our code commands.",
            example: "The orange cat you see when you open Scratch is the most famous sprite, but you can also use a dog, a car, or a wizard.",
            whyItMatters: "Sprites are the actors in your digital play. Without them, your code wouldn't have anything to move!",
            funFactOrMisconception: "You can even draw your very own sprite or take a picture of yourself to use as a sprite in your game."
          },
          {
            topic: "Simple movement and short animations",
            type: "steps",
            intro: "Make your very first character move across the screen.",
            steps: [
              {
                action: "Click on the blue 'Motion' circle on the far left.",
                detail: "This opens up all the blocks that make things move."
              },
              {
                action: "Click and drag a 'Move 10 steps' block into the big white workspace.",
                detail: "It will snap into place like a puzzle piece."
              },
              {
                action: "Click the block with your mouse to see your sprite move on the stage.",
                detail: "Every time you click it, the sprite takes a tiny step forward."
              },
              {
                action: "Drag a 'Turn 15 degrees' block and snap it under the 'Move' block.",
                detail: "Make sure they click together."
              },
              {
                action: "Click the connected blocks to make your sprite step and spin!",
                detail: "You have just written your first computer program."
              }
            ],
            tip: "If your sprite walks off the screen, you can just click on it in the stage and drag it back to the middle."
          }
        ]
      },
      {
        title: "AI Awareness",
        items: [
          {
            topic: "What is AI? Simple examples from everyday life",
            type: "concept",
            definition: "AI, or Artificial Intelligence, is a special type of computer program that helps machines 'think' or make helpful choices for us.",
            example: "When a tablet recognizes your face to unlock, or a video app guesses which cartoon you want to watch next, that is AI working.",
            whyItMatters: "AI is in many of the toys and tools we use, so it is good to know when a machine is helping you.",
            funFactOrMisconception: "AI isn't a robot with a brain! It is just a very fast computer doing lots of math behind the scenes."
          },
          {
            topic: "AI as a computer technology",
            type: "concept",
            definition: "AI is a tool made by smart people who write code to help computers solve problems and learn from information.",
            example: "Just like a student learns math from a book, an AI learns how to play chess by looking at thousands of past games.",
            whyItMatters: "Understanding that AI is just a tool helps us remember that humans are the ones really in charge.",
            funFactOrMisconception: "Computers do not have feelings or magical powers. They only know what humans have taught them."
          },
          {
            topic: "Basic safety and asking an adult/teacher before using AI tools",
            type: "concept",
            definition: "Always ask a trusted adult before using any AI tool, just like you ask before going to a new website or opening a new app.",
            example: "If you want to use a fun website that draws silly pictures using AI, check with your teacher first to make sure it is safe.",
            whyItMatters: "Some AI tools ask for your name or pictures, and we always want to keep our personal information safe and private.",
            funFactOrMisconception: "Even if an AI talks to you like a friend, it is still a machine. Never tell it secrets or where you live!"
          }
        ]
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
            definition: "Hardware is the physical parts of a computer you can actually touch. Software is the invisible programs that tell the hardware what to do.",
            example: "The heavy monitor and the clicking mouse are hardware. The fun game you play and the browser you use are software.",
            whyItMatters: "If a game won't load, it's a software problem. If your screen is cracked, it's a hardware problem.",
            funFactOrMisconception: "Without software, your computer is just an expensive, heavy block of plastic and metal that can't do anything!"
          },
          {
            topic: "Operating system basics",
            type: "concept",
            definition: "The operating system (OS) is the most important software on your computer. It manages all the other programs, saves your files, and makes the hardware work.",
            example: "Windows, macOS, and ChromeOS are famous operating systems. They give you the desktop and the start menu.",
            whyItMatters: "Without an operating system, you would have to type complicated codes just to open a single picture.",
            funFactOrMisconception: "An operating system is like the principal of a school—it doesn't do the homework, but it makes sure everything runs smoothly!"
          },
          {
            topic: "Keyboard and mouse skills",
            type: "steps",
            intro: "Become a master at controlling your computer quickly and accurately.",
            steps: [
              {
                action: "Practice using the mouse to click small icons without accidentally dragging them.",
                detail: "Keep your hand steady and just tap your index finger quickly."
              },
              {
                action: "Use the keyboard to type longer sentences, using two hands.",
                detail: "Try to rest your fingers on the middle row of keys (ASDF and JKL;)."
              },
              {
                action: "Hold down the 'Shift' key with your pinky while typing a letter to make it a Capital.",
                detail: "This is much faster than turning 'Caps Lock' on and off."
              },
              {
                action: "Learn to use the 'Right Click' (the button on the right side of the mouse).",
                detail: "Right-clicking opens a secret menu of extra options for a file or folder."
              }
            ],
            tip: "When you type, try to look at the screen instead of looking down at your hands."
          },
          {
            topic: "Typing practice",
            type: "concept",
            definition: "Typing practice is doing exercises to help your fingers memorize where all the letters live on the keyboard so you can write faster.",
            example: "Using a fun typing game like TypingClub or Nitro Type for 10 minutes a day is a great way to practice.",
            whyItMatters: "In middle school and high school, you will have to type long reports. Fast typing saves you hours of time!",
            funFactOrMisconception: "The best typists in the world don't even look at the keyboard. Their fingers just 'know' where to go. This is called 'touch typing'."
          },
          {
            topic: "Files and folders",
            type: "steps",
            intro: "Keep your computer organized so you can always find your work.",
            steps: [
              {
                action: "Right-click on an empty spot on the desktop.",
                detail: "A menu will pop up next to your mouse pointer."
              },
              {
                action: "Move your mouse down to 'New', and then carefully click 'Folder'.",
                detail: "A new yellow folder will appear with the name highlighted."
              },
              {
                action: "Type a name for your folder, like 'My School Work', and press Enter.",
                detail: "Now your folder has a clear label."
              },
              {
                action: "Click and hold a file on your desktop, and drag it over the new folder.",
                detail: "Let go of the mouse button to drop the file inside."
              },
              {
                action: "Double-click the folder to open it and check that your file is safe inside.",
                detail: "You can even make folders inside of folders!"
              }
            ],
            tip: "If your desktop is completely covered in files, it is time to make some folders!"
          },
          {
            topic: "Simple shortcuts",
            type: "steps",
            intro: "Use special keyboard tricks to work faster.",
            steps: [
              {
                action: "Select some text or a file that you want to duplicate.",
                detail: "Highlight it in blue."
              },
              {
                action: "Hold down the 'Ctrl' key and press the 'C' key once.",
                detail: "This tells the computer to 'Copy' the item invisibly."
              },
              {
                action: "Click where you want the copy to go, hold 'Ctrl', and press 'V'.",
                detail: "This will 'Paste' the copied item instantly!"
              },
              {
                action: "While working on a document, hold 'Ctrl' and press 'S'.",
                detail: "This quickly 'Saves' your work so you don't have to use the mouse."
              }
            ],
            tip: "On a Mac computer, use the 'Cmd' key instead of the 'Ctrl' key."
          },
        ],
      },
      {
        title: "Office Productivity",
        items: [
          {
            topic: "Basic documents; formatting text",
            type: "steps",
            intro: "Make your stories and reports look beautiful and professional.",
            steps: [
              {
                action: "Type a short paragraph in Google Docs or Microsoft Word.",
                detail: "Don't worry about how it looks yet, just get the words on the page."
              },
              {
                action: "Click and drag your mouse over a word to highlight it in blue.",
                detail: "This selects the word so you can change it."
              },
              {
                action: "Look at the toolbar at the top and click the number to change the 'Font Size'.",
                detail: "Make titles big (like 24) and normal text smaller (like 12)."
              },
              {
                action: "Click the 'Text Color' button (usually an 'A' with a colored line) to change the color.",
                detail: "Pick a dark color that is easy to read against the white page."
              },
              {
                action: "Select your title and click the 'Center Align' button (lines in the middle).",
                detail: "This pushes your title perfectly to the middle of the page."
              }
            ],
            tip: "Do not use yellow text! It is almost impossible to read on a white background."
          },
          {
            topic: "Inserting images",
            type: "steps",
            intro: "Add helpful pictures to make your document more interesting.",
            steps: [
              {
                action: "Click on the page exactly where you want your picture to go.",
                detail: "The blinking line shows where the picture will drop."
              },
              {
                action: "Click the 'Insert' menu at the top and select 'Image' or 'Picture'.",
                detail: "A box will open asking where to find the picture."
              },
              {
                action: "Choose 'Upload from computer' or 'Search the web'.",
                detail: "If you search the web, type what you are looking for and hit Enter."
              },
              {
                action: "Click the picture you want and press the blue 'Insert' button.",
                detail: "The picture will appear in your document."
              },
              {
                action: "Click the picture once, grab a blue corner square, and drag to resize it.",
                detail: "Always use the corners! Pulling the sides will squish the picture and make it look weird."
              }
            ],
            tip: "If you want to move the picture around easily, look for a 'Wrap Text' option when you click the image."
          },
          {
            topic: "Simple tables",
            type: "steps",
            intro: "Organize information into neat rows and columns.",
            steps: [
              {
                action: "Go to the 'Insert' menu and click 'Table'.",
                detail: "A grid of small squares will appear."
              },
              {
                action: "Move your mouse over the grid to choose how many boxes you want.",
                detail: "For example, 3 boxes wide and 4 boxes down (3x4)."
              },
              {
                action: "Click the mouse, and the table will appear on your page.",
                detail: "It will look like a blank grid."
              },
              {
                action: "Click inside the top left box (called a 'cell') and type a heading, like 'Monday'.",
                detail: "You can make the headings bold to stand out."
              },
              {
                action: "Press the 'Tab' key on your keyboard to quickly jump to the next box.",
                detail: "This is much faster than using the mouse to click each box."
              }
            ],
            tip: "Tables are perfect for making class schedules or organizing lists of facts!"
          },
          {
            topic: "Creating a short presentation with text and images",
            type: "steps",
            intro: "Build a slide deck to show off your project to the class.",
            steps: [
              {
                action: "Open Google Slides or PowerPoint and click 'Blank Presentation'.",
                detail: "You will start with a plain white title slide."
              },
              {
                action: "Click the 'Theme' menu on the right side and pick a cool design.",
                detail: "This will instantly make all your slides look colorful and matching."
              },
              {
                action: "Click the big text box and type the title of your project.",
                detail: "Click the smaller box underneath to type your name."
              },
              {
                action: "Click the 'New Slide' button (usually a plus sign +) to add a second page.",
                detail: "Choose a layout that has space for text on one side and a picture on the other."
              },
              {
                action: "Type three short bullet points about your topic, and insert a matching picture.",
                detail: "Keep your text short—you should explain the details out loud when you present!"
              }
            ],
            tip: "Press the 'Present' or 'Slideshow' button to see how it looks full screen."
          },
        ],
      },
      {
        title: "Internet & Digital Citizenship",
        items: [
          {
            topic: "Browsers and search engines",
            type: "concept",
            definition: "A browser is the app you use to get on the internet, while a search engine is a special website inside the browser that helps you find specific information.",
            example: "Google Chrome and Apple Safari are browsers. Google Search and Microsoft Bing are search engines.",
            whyItMatters: "If you don't know the difference, you might get confused when a teacher tells you to 'open your browser' versus 'search for a topic'.",
            funFactOrMisconception: "Many people think Google is the entire internet! Actually, Google is just a search engine that helps you find things on the internet."
          },
          {
            topic: "Basic searching",
            type: "steps",
            intro: "Learn how to find exactly what you need without getting lost.",
            steps: [
              {
                action: "Open your browser and click on the long search bar at the top or middle.",
                detail: "This is where you type what you are looking for."
              },
              {
                action: "Type a few important key words instead of a long, full sentence.",
                detail: "Type 'fastest land animal' instead of 'what is the animal that runs the fastest on land?'"
              },
              {
                action: "Press 'Enter' and scan the list of results that appear.",
                detail: "Do not just click the very first link—sometimes the best answer is the second or third one."
              },
              {
                action: "Look at the short description under the blue link before clicking.",
                detail: "This helps you guess if the website has the answer you need."
              }
            ],
            tip: "If you spell a word wrong, the search engine will often say 'Did you mean...?' and give you the correct spelling."
          },
          {
            topic: "Online safety",
            type: "concept",
            definition: "Online safety means protecting yourself, your computer, and your personal information when you are exploring the internet.",
            example: "Never share your real name, address, or school name with someone you meet in an online game.",
            whyItMatters: "Not everyone on the internet is a friend. Keeping your information secret keeps you safe in the real world.",
            funFactOrMisconception: "Even if an online character looks like a kid, it could be an adult pretending. Always stick to playing with friends you know in real life."
          },
          {
            topic: "Passwords",
            type: "concept",
            definition: "A password is a secret lock that keeps your online accounts and information completely private.",
            example: "A good password uses a mix of letters, numbers, and symbols, like 'BlueDog8!'. It should never just be 'password123'.",
            whyItMatters: "If someone guesses your password, they can log into your games, delete your work, or pretend to be you.",
            funFactOrMisconception: "You should never share your password with your best friend, even if you trust them. The only people who should know are you and your parents."
          },
          {
            topic: "Privacy",
            type: "concept",
            definition: "Privacy means deciding who gets to see your personal information and who doesn't. You have the right to keep things private online.",
            example: "Think of privacy like closing the curtains in your house so strangers can't see inside.",
            whyItMatters: "Once you put a picture or a secret on the internet, it is almost impossible to erase it completely.",
            funFactOrMisconception: "Even if an app promises that a picture will 'disappear in 10 seconds', someone can always take a screenshot and save it forever."
          },
          {
            topic: "Respectful online behavior",
            type: "concept",
            definition: "Being respectful online means treating others with the exact same kindness you would use in a classroom.",
            example: "Always use kind words when sending a message, playing a multiplayer game, or commenting on someone's work.",
            whyItMatters: "Words on a screen can hurt just as much as spoken words. Bullying online is just as bad as bullying in person.",
            funFactOrMisconception: "Some people think that because they are hiding behind a screen, rules don't apply. But being a good citizen applies everywhere, including the internet!"
          }
        ],
      },
      {
        title: "Canva & Creativity",
        items: [
          {
            topic: "Templates, text, images and elements",
            type: "steps",
            intro: "Combine different pieces to build a complete design in Canva.",
            steps: [
              {
                action: "Start by choosing a colorful template that fits your project.",
                detail: "For example, pick a space-themed template for a science report."
              },
              {
                action: "Double-click on any text in the template to type your own words.",
                detail: "Change the font size if your words are too long and don't fit."
              },
              {
                action: "Click the 'Elements' tab on the left to find stickers and shapes.",
                detail: "Type 'rocket' or 'stars' to find cool graphics to add."
              },
              {
                action: "Click the 'Uploads' button to add a picture saved on your computer.",
                detail: "This is great for adding a picture of yourself to a poster."
              },
              {
                action: "Drag all the pieces around until everything is perfectly balanced.",
                detail: "Make sure no text is covering up important parts of an image."
              }
            ],
            tip: "Use the 'Undo' arrow at the top if you make a mistake and want to go backwards!"
          },
          {
            topic: "Posters",
            type: "concept",
            definition: "Posters are large, eye-catching digital designs used to share important information or celebrate an event.",
            example: "You can create a colorful poster to invite your friends to a school science fair or remind people to recycle.",
            whyItMatters: "A good poster catches people's attention so they actually stop to read your message.",
            funFactOrMisconception: "The best posters have very few words! A huge picture and a short, catchy title work much better than a wall of text."
          },
          {
            topic: "Invitations",
            type: "concept",
            definition: "Invitations are special digital cards used to ask people to come to a party, meeting, or gathering.",
            example: "You can design a birthday invitation with a fun superhero theme and all the details like time and place.",
            whyItMatters: "Sending a digital invitation is faster than mailing paper ones, and it saves trees!",
            funFactOrMisconception: "Always remember to include the 'Who, What, Where, and When'. If you forget the 'Where', nobody will show up!"
          },
          {
            topic: "Book covers",
            type: "concept",
            definition: "A book cover is a design that shows the title, the author's name, and a picture that gives a hint about the story.",
            example: "If you write a story about a haunted house, you can create a book cover with spooky dark colors and a glowing window.",
            whyItMatters: "People absolutely do judge books by their covers! A great cover makes people want to read your story.",
            funFactOrMisconception: "The cover shouldn't give away the ending of the story; it should just make the reader curious."
          },
          {
            topic: "Simple visual storytelling",
            type: "concept",
            definition: "Visual storytelling means using pictures, shapes, and just a tiny bit of text to tell a story or explain an idea.",
            example: "You could make a 3-slide Canva project showing how a caterpillar turns into a butterfly, using mostly pictures.",
            whyItMatters: "Pictures are a universal language. Visual storytelling helps you explain things to people even if they speak a different language.",
            funFactOrMisconception: "You don't need a hundred pages to tell a story. A simple 3-panel comic strip is a complete story!"
          }
        ],
      },
      {
        title: "Scratch & Logic",
        items: [
          {
            topic: "Sprites and backdrops",
            type: "concept",
            definition: "Sprites are the characters or objects that move and act. Backdrops are the pictures on the stage that create the setting for your story.",
            example: "You could have a spaceship sprite flying around in a starry space backdrop.",
            whyItMatters: "Using the right backdrop helps tell the story. A spaceship sprite looks silly if the backdrop is a grocery store!",
            funFactOrMisconception: "Backdrops can't move around the screen like sprites can, but you can write code to switch from one backdrop to another to change the scene."
          },
          {
            topic: "Sequence",
            type: "concept",
            definition: "A sequence is the exact order that commands are carried out by the computer, one right after the other from top to bottom.",
            example: "If you want a sprite to walk over to a door and then say 'Open!', you must put the 'move' block before the 'say' block in the sequence.",
            whyItMatters: "Computers follow instructions exactly as they are written. If you put the 'say' block first, the sprite will talk to empty space before walking.",
            funFactOrMisconception: "People sequence things every day without realizing it. Putting on your socks before your shoes is a sequence!"
          },
          {
            topic: "Events",
            type: "concept",
            definition: "Events are the triggers that tell a piece of code it is time to wake up and start running.",
            example: "The 'When Green Flag Clicked' block is an event. 'When Space Key Pressed' is another event.",
            whyItMatters: "Without an event block at the top, a stack of code will just sit there and never run.",
            funFactOrMisconception: "You can have many different event blocks in the same game. One event can start the music, while a different event makes the character jump."
          },
          {
            topic: "Motion",
            type: "steps",
            intro: "Make your sprite explore every corner of the stage.",
            steps: [
              {
                action: "Click the blue 'Motion' category to find all the movement blocks.",
                detail: "These blocks control exactly where your sprite goes."
              },
              {
                action: "Drag a 'Point in direction' block and click the number to choose a direction.",
                detail: "You can use the little steering wheel to make your sprite point up, down, left, or right."
              },
              {
                action: "Use a 'Glide 1 secs to x: y:' block to make your sprite move smoothly.",
                detail: "Unlike the 'move 10 steps' block, glide makes the sprite float gracefully across the screen."
              },
              {
                action: "Experiment with the 'Go to random position' block.",
                detail: "This is great for making a game where you have to catch something that keeps moving around."
              }
            ],
            tip: "If your sprite gets stuck upside down after turning, click the 'Direction' box in the sprite info area and choose the 'Left/Right' arrow icon."
          },
          {
            topic: "Dialogue",
            type: "steps",
            intro: "Make two characters have a conversation without talking over each other.",
            steps: [
              {
                action: "Select your first sprite and drag in a 'Say [Hello!] for 2 seconds' block.",
                detail: "A comic book speech bubble will appear next to the sprite."
              },
              {
                action: "Select your second sprite and drag in a 'Wait 2 seconds' block first.",
                detail: "This is the most important step! The second sprite has to wait while the first one is talking."
              },
              {
                action: "Add a 'Say [How are you?]' block right under the wait block.",
                detail: "Now the second sprite will answer after the first one is finished."
              },
              {
                action: "Go back to the first sprite and add another 'Wait' block.",
                detail: "They have to take turns waiting and talking."
              }
            ],
            tip: "Read the conversation out loud to make sure the timing sounds natural."
          },
          {
            topic: "Simple loops",
            type: "concept",
            definition: "A loop is a special 'hug' block that tells the computer to repeat the instructions inside it many times.",
            example: "Instead of dragging in ten 'move' blocks, you can use one 'Repeat 10' loop with a single 'move' block inside it.",
            whyItMatters: "Loops save you time and make your code much shorter and easier to read.",
            funFactOrMisconception: "The 'Forever' loop will literally run forever until you press the red stop sign to end the program!"
          },
          {
            topic: "Interactive stories",
            type: "concept",
            definition: "An interactive story is a project where the person playing can press buttons or answer questions to change what happens in the story.",
            example: "You can program a wizard sprite to ask 'Do you want to open the red door or the blue door?' and send the player to a different backdrop depending on their answer.",
            whyItMatters: "Interactive stories turn the reader into a player, making the experience much more fun and engaging.",
            funFactOrMisconception: "You don't need a lot of complicated code to make a story interactive. Just using a few keys to change backdrops is a great start."
          }
        ],
      },
      {
        title: "AI Awareness",
        items: [
          {
            topic: "What AI is; examples of AI around us",
            type: "concept",
            definition: "AI (Artificial Intelligence) is a type of computer programming that lets machines do tasks that usually require a human brain, like understanding speech or recognizing pictures.",
            example: "Smart speakers that answer your questions out loud, or map apps that automatically reroute around a traffic jam, are using AI.",
            whyItMatters: "AI is built into many of the tools and toys we use every day. Knowing how it works helps us use it better.",
            funFactOrMisconception: "AI does not 'think' the way humans do. It is just incredibly fast at spotting patterns in huge amounts of math and data."
          },
          {
            topic: "Generative AI at a basic level",
            type: "concept",
            definition: "Generative AI is a special kind of AI that can create brand new things from scratch, like writing stories, drawing pictures, or even composing music.",
            example: "If you ask a Generative AI to 'write a poem about a flying skateboard', it will instantly invent a poem that has never been written before.",
            whyItMatters: "Generative AI is a powerful tool for brainstorming. It can help you get started when you are feeling stuck on a creative project.",
            funFactOrMisconception: "When AI draws a picture, it isn't searching the internet for an image to copy. It is actually generating the pixels one by one!"
          },
          {
            topic: "What AI can and cannot do",
            type: "concept",
            definition: "AI is amazing at processing information quickly, but it has no common sense, no feelings, and it cannot understand the real physical world.",
            example: "An AI can write a brilliant story about playing in the snow, but it doesn't actually know what cold snow feels like.",
            whyItMatters: "Because AI has no common sense, it can sometimes confidently give you an answer that is completely wrong or silly.",
            funFactOrMisconception: "Many people think AI is always right because it sounds very smart. But AI can 'hallucinate' and invent fake facts just to finish a sentence."
          },
          {
            topic: "Safe and responsible use",
            type: "concept",
            definition: "Using AI responsibly means you never share personal secrets with it, and you always use your own brain to double-check its work.",
            example: "If an AI tells you a historical fact for a school report, you should verify that fact in a trusted book before turning it in.",
            whyItMatters: "Companies often read the conversations people have with AI to improve the software, so anything you type is not truly private.",
            funFactOrMisconception: "Copying a story that an AI wrote and putting your name on it is not being a 'good prompt engineer'—it is plagiarism!"
          }
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
        diagram: {
          caption: "How your computer follows an instruction",
          mermaid: "flowchart LR\n  A[You click or type] --> B[Computer receives the instruction]\n  B --> C[Computer processes it]\n  C --> D[Screen shows the result]"
        },
        items: [
          {
            topic: "Hardware and software",
            type: "concept",
            definition: "Hardware includes the physical parts of a computer system that you can touch and see, while software includes the operating system and applications that give instructions to the hardware.",
            example: "The central processing unit (CPU), monitor, and hard drive are internal hardware components. The operating system and web browser you use to visit websites are examples of software.",
            whyItMatters: "Understanding the difference helps you know whether a computer problem is physical (like a broken wire) or digital (like a frozen app).",
            funFactOrMisconception: "People sometimes think software is 'inside' the hardware permanently, but you can actually erase and replace software anytime!"
          },
          {
            topic: "Operating systems",
            type: "concept",
            definition: "The operating system is the most important software that runs on a computer, acting as the manager for all memory, processes, and interactions between other software and hardware.",
            example: "When you double-click an icon to open a game, the operating system (like Windows, macOS, or ChromeOS) is what actually loads the game from the hard drive and tells the screen to display it.",
            whyItMatters: "Without an operating system, your computer would just be a useless box of electronics that couldn't understand your commands.",
            funFactOrMisconception: "Did you know your smartphone has an operating system too? iOS and Android are just mobile versions of what your computer uses."
          },
          {
            topic: "File and folder management",
            type: "steps",
            intro: "Organize your digital work so you can easily find it later.",
            steps: [
              {
                action: "Open the 'File Explorer' (Windows) or 'Finder' (Mac) from your taskbar or dock.",
                detail: "This icon usually looks like a yellow folder on Windows or a smiling face on a Mac."
              },
              {
                action: "Navigate to your 'Documents' or 'Desktop' folder where you want to create a new space.",
                detail: "Click on these locations in the left-hand sidebar of the window."
              },
              {
                action: "Right-click on an empty space, select 'New', and then click 'Folder'.",
                detail: "A new yellow folder icon will appear with its name highlighted in blue, ready for you to type."
              },
              {
                action: "Type a clear, logical name like 'Grade 4 Science Projects' and press Enter.",
                detail: "Avoid generic names like 'stuff' or 'new folder' so you always know what is inside."
              },
              {
                action: "Drag and drop your files into this new folder to keep them organized.",
                detail: "Click and hold a file, move your mouse over the new folder, and let go of the button."
              }
            ],
            tip: "Use an underscore (_) or dash (-) instead of spaces in file names if you plan to share them online."
          },
          {
            topic: "Typing",
            type: "concept",
            definition: "Accurate touch typing is an essential skill that allows you to communicate your ideas effectively on a computer without having to look down at your hands.",
            example: "By using the correct fingers on the 'home row' keys (ASDF and JKL;), you can write a whole story while keeping your eyes on the monitor.",
            whyItMatters: "Typing quickly and accurately saves you a massive amount of time when writing reports or chatting with friends.",
            funFactOrMisconception: "Many people think they can type fast using just two index fingers (the 'hunt and peck' method), but learning all ten fingers is always much faster in the end."
          },
          {
            topic: "Keyboard shortcuts",
            type: "steps",
            intro: "Learn to navigate your computer faster using just the keyboard.",
            steps: [
              {
                action: "To undo a mistake, hold down the 'Ctrl' key (or 'Cmd' on Mac) and press the 'Z' key.",
                detail: "This works in almost every program if you accidentally delete something or make a wrong change."
              },
              {
                action: "To select everything in a document, hold 'Ctrl' (or 'Cmd') and press 'A'.",
                detail: "You will see all your text or files highlight in blue at once."
              },
              {
                action: "To copy the selected items, hold 'Ctrl' (or 'Cmd') and press 'C'.",
                detail: "The computer invisibly saves a copy to its 'clipboard' memory."
              },
              {
                action: "To paste what you copied, click where you want it to go, hold 'Ctrl' (or 'Cmd') and press 'V'.",
                detail: "Your copied text or file will immediately appear in the new location."
              },
              {
                action: "To quickly switch between open programs, hold 'Alt' (or 'Cmd' on Mac) and press 'Tab'.",
                detail: "A menu will pop up showing all your open apps; keep pressing Tab to choose one."
              }
            ],
            tip: "Always hold the first key (like Ctrl or Alt) down fully before tapping the letter key."
          },
          {
            topic: "Basic troubleshooting",
            type: "steps",
            intro: "Solve common computer problems yourself before asking for help.",
            steps: [
              {
                action: "If a program freezes, wait for a minute before clicking anything else.",
                detail: "Sometimes the computer is just thinking hard and clicking repeatedly will make it worse."
              },
              {
                action: "If it is still frozen, try closing it by clicking the 'X' or using the 'Alt + F4' shortcut.",
                detail: "This forces the program to shut down so you can open it fresh."
              },
              {
                action: "If the mouse or keyboard stops working, check the cable connection on the back of the computer.",
                detail: "Follow the wire from the device to the USB port and make sure it is pushed in all the way."
              },
              {
                action: "If the screen is entirely black, check if the monitor's power button is glowing.",
                detail: "If there is no light, the monitor might be turned off or unplugged from the wall."
              },
              {
                action: "If nothing else works, restart the entire computer by using the Start menu or holding the main power button.",
                detail: "A simple restart fixes more than 80% of everyday computer problems!"
              }
            ],
            tip: "Never unplug the computer directly from the wall while it is running unless it is an absolute emergency."
          }
        ]
      },
      {
        title: "Office Productivity",
        items: [
          {
            topic: "Word/Docs: formatting, images and tables",
            type: "steps",
            intro: "Make your documents look professional and easy to read.",
            steps: [
              {
                action: "Select your main title text and click the 'Styles' menu on the top ribbon.",
                detail: "Choose 'Heading 1' to instantly make it large, bold, and properly spaced."
              },
              {
                action: "Click 'Insert' and then 'Pictures' to add an image to your document.",
                detail: "Choose an image saved on your computer or search for an appropriate one online."
              },
              {
                action: "Click on your inserted image, click the 'Wrap Text' icon that appears, and choose 'Square'.",
                detail: "This allows you to move the image freely and makes your text wrap neatly around it instead of jumping below it."
              },
              {
                action: "Click 'Insert' and 'Table', then drag your mouse to create a 3x3 grid.",
                detail: "A table is perfect for organizing information like a schedule or comparing facts."
              },
              {
                action: "Click inside the table and use the 'Table Design' tab to add a colorful style or borders.",
                detail: "Adding shading to the top row helps readers easily see what the table is about."
              }
            ],
            tip: "Always double-check your spelling using the 'Review' tab before printing your document."
          },
          {
            topic: "PowerPoint/Slides: structure and visual presentation",
            type: "steps",
            intro: "Create engaging presentations that hold your audience's attention.",
            steps: [
              {
                action: "Open a blank presentation and choose a clean 'Theme' from the Design tab.",
                detail: "A good theme uses contrasting colors, like dark blue text on a white background, to be easily read."
              },
              {
                action: "Add a title slide with the topic of your presentation and your name.",
                detail: "This should be simple and clear so people know exactly what they are about to see."
              },
              {
                action: "Add a new slide for each main point, keeping the text to short bullet points.",
                detail: "Do not write paragraphs! You should say the paragraphs out loud while the audience reads the bullet points."
              },
              {
                action: "Insert one large, high-quality image on each slide that supports your text.",
                detail: "Pictures help people remember what you are saying better than words alone."
              },
              {
                action: "Go to the 'Transitions' tab and choose a simple effect like 'Fade' for all slides.",
                detail: "Avoid distracting or wild transitions (like spinning or shattering) which can make people dizzy."
              }
            ],
            tip: "Practice your presentation out loud multiple times before showing it to the class."
          },
          {
            topic: "Excel/Sheets: simple tables, basic formulas and charts",
            type: "steps",
            intro: "Organize data and use the computer to do math for you.",
            steps: [
              {
                action: "Click into cell A1 and type a heading like 'Item', then B1 for 'Cost'.",
                detail: "Spreadsheets use letters for columns and numbers for rows to locate information."
              },
              {
                action: "Enter data into the rows below your headings, like 'Pencils' and '5'.",
                detail: "Keep your text and numbers in separate columns to make calculations easier."
              },
              {
                action: "Click in an empty cell below your numbers and type =SUM(.",
                detail: "This tells the spreadsheet you want it to add up a list of numbers."
              },
              {
                action: "Drag your mouse over the numbers you want to add, type ), and press Enter.",
                detail: "The cell will instantly show the total amount without you needing a calculator!"
              },
              {
                action: "Highlight all your data and headings, click 'Insert', and choose 'Column Chart'.",
                detail: "A colorful graph will appear, making it very easy to see which item costs the most or least."
              }
            ],
            tip: "If you see '#####' in a cell, it just means the column is too narrow to show the number. Drag the column header to make it wider!"
          }
        ]
      },
      {
        title: "Internet & Digital Citizenship",
        diagram: {
          caption: "What happens when you visit a website",
          mermaid: "flowchart LR\n  A[You type address] --> B[Browser asks internet]\n  B --> C[Website sends page back]\n  C --> D[Browser shows it on screen]"
        },
        items: [
          {
            topic: "Browsers; effective searching",
            type: "steps",
            intro: "Find exactly what you are looking for quickly.",
            steps: [
              {
                action: "Type specific keywords instead of full sentences into the search bar.",
                detail: "For example, search for 'fastest land animal speed' instead of 'what is the animal that runs the fastest on land'."
              },
              {
                action: "Use quotation marks around words to find an exact phrase.",
                detail: "Searching for \"Abraham Lincoln\" will only show pages with his full name together, not just 'Lincoln'."
              },
              {
                action: "Hold the 'Ctrl' (or 'Cmd') key while clicking a search result to open it in a new tab.",
                detail: "This keeps your original search results open so you can easily go back and try another link."
              },
              {
                action: "Look closely at the website address before you click to make sure it looks trustworthy.",
                detail: "Addresses ending in .edu or .gov are usually more reliable for school projects than .com sites."
              },
              {
                action: "Press 'Ctrl + H' to open your History if you need to find a site you visited yesterday.",
                detail: "The browser saves a list of everywhere you have been, which is helpful if you forgot to save a bookmark."
              }
            ],
            tip: "If you don't find what you need on the first try, change your keywords and search again."
          },
          {
            topic: "Evaluating basic information",
            type: "concept",
            definition: "Evaluating information means acting like a detective to check if a website is reliable, honest, and written by someone who actually knows the facts.",
            example: "If you are researching dinosaurs and the website says a T-Rex ate pizza, you need to check who wrote the page and compare it to a trusted science book.",
            whyItMatters: "Anyone can put anything on the internet, so you must protect yourself from learning and repeating fake information.",
            funFactOrMisconception: "Many people believe that if a website looks beautiful and professional, it must be true. But even bad information can have great graphic design!"
          },
          {
            topic: "Passwords; privacy",
            type: "steps",
            intro: "Keep your accounts safe from hackers and strangers.",
            steps: [
              {
                action: "Create a 'passphrase' using three or four random words.",
                detail: "A password like 'PurpleElephantGuitar9!' is very strong and much easier to remember than 'Xj7#pR2'."
              },
              {
                action: "Never use your name, birthday, or pet's name in your password.",
                detail: "These are the very first things a hacker will guess if they are trying to break into your account."
              },
              {
                action: "Write your password down in a physical notebook kept safely at home, not on a sticky note on your computer.",
                detail: "Digital files can be stolen, but a notebook in your drawer is safe."
              },
              {
                action: "Check the privacy settings on any game or app you use with a parent.",
                detail: "Make sure your profile is set to 'Private' so only approved friends can see what you post."
              },
              {
                action: "Never share your password with anyone, not even your best friend.",
                detail: "The only people who should ever know your passwords are you and your parents."
              }
            ],
            tip: "Use a different password for your most important accounts, like your school email."
          },
          {
            topic: "Phishing/scams",
            type: "concept",
            definition: "Phishing is a sneaky trick where scammers send fake emails or messages that look like they are from a real company, trying to steal your password or personal information.",
            example: "You might get an email that looks exactly like it is from Roblox saying 'Your account will be deleted! Click here to log in and save it', but the link actually goes to a scammer.",
            whyItMatters: "Falling for a phishing scam can result in losing your game accounts, your files, or even your parents' money.",
            funFactOrMisconception: "It's called 'phishing' because the scammers are 'fishing' for victims by throwing out a fake 'bait' message to see who will bite!"
          },
          {
            topic: "Digital footprint and responsible behavior",
            type: "concept",
            definition: "Your digital footprint is the permanent trail of everything you do online, including photos you post, comments you write, and games you play.",
            example: "If you post an angry comment on a YouTube video, that comment becomes part of your digital footprint and might stay there forever.",
            whyItMatters: "When you apply for a job or college in the future, people might search your name to see what kind of digital footprint you have left behind.",
            funFactOrMisconception: "A common mistake is thinking that deleting a photo removes it completely. Someone could have taken a screenshot before you deleted it, meaning it still exists."
          }
        ]
      },
      {
        title: "Canva & Digital Creativity",
        items: [
          {
            topic: "Design basics; typography; colors; layout",
            type: "concept",
            definition: "Good design uses clear fonts (typography), matching colors, and a balanced layout to share a message so people can understand it quickly and easily.",
            example: "If you are making a poster about a calm day at the beach, you would use soft blue colors and a smooth, rounded font, not bright red colors with sharp, scary letters.",
            whyItMatters: "If your design is too cluttered or the colors clash, people will ignore your poster instead of reading your important message.",
            funFactOrMisconception: "Using 10 different fonts and every color of the rainbow doesn't make a design look better—it usually makes it unreadable! Two fonts are almost always enough."
          },
          {
            topic: "Posters",
            type: "steps",
            intro: "Design a beautiful poster that grabs attention from across the room.",
            steps: [
              {
                action: "Choose a 'Poster' template that matches the mood of your topic.",
                detail: "A science fair poster should look clean and futuristic, while a bake sale poster can look warm and playful."
              },
              {
                action: "Add a large, catchy headline at the very top using a bold, easy-to-read font.",
                detail: "This should be the largest text on the page so it is the first thing people see."
              },
              {
                action: "Include the 'Who, What, Where, and When' in smaller text below the headline.",
                detail: "Make sure this information is highly visible and not hidden by a busy background image."
              },
              {
                action: "Add one large, high-quality central image instead of five tiny ones.",
                detail: "A single strong image is much more powerful and keeps the poster from looking messy."
              },
              {
                action: "Leave plenty of empty space (called 'white space') around your text.",
                detail: "White space acts like a frame and gives the reader's eyes a place to rest."
              }
            ],
            tip: "Zoom out on your screen until the poster is small—if you can still read the headline, you did a great job!"
          },
          {
            topic: "Presentations",
            type: "steps",
            intro: "Make digital slides that support your speech without putting people to sleep.",
            steps: [
              {
                action: "Start with a presentation template to keep your colors and fonts consistent.",
                detail: "Consistency makes your presentation look professional from the first slide to the last."
              },
              {
                action: "Change the background color slightly on title slides to make them stand out.",
                detail: "This acts as a visual signal to the audience that you are moving to a new topic."
              },
              {
                action: "Use the 'Animate' button to make your text appear one bullet point at a time.",
                detail: "This keeps the audience focused on what you are saying right now, rather than reading ahead."
              },
              {
                action: "Replace text with icons or small pictures wherever possible.",
                detail: "If you are talking about three rules, use a picture for each rule instead of writing a paragraph."
              },
              {
                action: "Include a final slide with a summary or a 'Any Questions?' prompt.",
                detail: "This gives your presentation a strong, clear ending instead of just stopping abruptly."
              }
            ],
            tip: "Never put more than six lines of text on a single presentation slide."
          },
          {
            topic: "Infographics",
            type: "concept",
            definition: "An infographic is a visual poster that uses pictures, icons, and short bits of text to explain a complicated topic or show data in a very simple way.",
            example: "Instead of writing a long essay about how much water a plant needs, you could create an infographic showing three water drops next to a picture of a healthy plant.",
            whyItMatters: "Human brains process pictures much faster than words, so infographics are the best way to explain facts quickly.",
            funFactOrMisconception: "You don't have to be good at drawing to make an infographic! Canva has thousands of pre-drawn icons you can just drag and drop."
          },
          {
            topic: "Visual storytelling",
            type: "steps",
            intro: "Tell a complete story using pictures and very few words.",
            steps: [
              {
                action: "Create a series of panels or slides like a digital comic book.",
                detail: "Each slide should represent one main event in your story (Beginning, Middle, End)."
              },
              {
                action: "Find characters in the 'Elements' tab and use the same ones on every slide.",
                detail: "This helps the reader understand that it is the same person going through the story."
              },
              {
                action: "Search for 'Speech Bubbles' and drag them near your characters' mouths.",
                detail: "Type short, punchy dialogue inside the bubbles so the characters can talk to each other."
              },
              {
                action: "Change the background color of a slide to match the mood.",
                detail: "Use dark blue for a scary or sad moment, and bright yellow for a happy resolution."
              },
              {
                action: "Add action lines or stickers (like 'Pow!' or 'Zoom!') to show movement.",
                detail: "These small details bring static pictures to life and make the story exciting."
              }
            ],
            tip: "Make sure the text in your speech bubbles is large enough to read easily."
          }
        ]
      },
      {
        title: "Scratch & Computational Thinking",
        diagram: {
          caption: "A simple loop algorithm in Scratch",
          mermaid: "flowchart TD\n  A[Start Event] --> B[Move 10 Steps]\n  B --> C{Touch edge?}\n  C -- Yes --> D[Bounce]\n  D --> B\n  C -- No --> B"
        },
        items: [
          {
            topic: "Algorithms; sequence; events",
            type: "concept",
            definition: "An algorithm is a step-by-step plan to solve a problem. In Scratch, this plan is made of a sequence of code blocks that only start running when a specific event happens.",
            example: "When you press the spacebar (the event), the sprite moves forward, waits 1 second, and says 'Hello!' (the sequence). This whole plan is an algorithm.",
            whyItMatters: "Computers aren't smart enough to guess what you want; you have to give them the exact algorithm in the correct sequence to get the right result.",
            funFactOrMisconception: "The word 'algorithm' sounds complicated, but a recipe for baking a cake or instructions for building a Lego set are both everyday algorithms!"
          },
          {
            topic: "Loops; conditions",
            type: "concept",
            definition: "Loops are special blocks that tell the computer to repeat a set of instructions, while conditions (if-then statements) let the program make decisions based on what is happening.",
            example: "You can use a 'Forever' loop to make a star spin continuously, and an 'If touching color red' condition to make it stop spinning when it hits a wall.",
            whyItMatters: "Without loops, you would have to drag in 100 'move' blocks just to make a character walk across the screen. Loops save time and make code much cleaner.",
            funFactOrMisconception: "A common mistake is putting code outside a 'forever' loop by accident and wondering why it only happens once. Always check what is hugged inside the loop!"
          },
          {
            topic: "Variables introduction",
            type: "concept",
            definition: "A variable is like a labeled container or a box that stores a piece of information that can change while the program is running.",
            example: "In a racing game, you can create a variable called 'Score' that starts at 0 and goes up by 1 every time your car collects a coin.",
            whyItMatters: "Variables allow games to be interactive. Without them, you couldn't have health bars, timers, player names, or high scores.",
            funFactOrMisconception: "You can name a variable anything you want, like 'FluffyBunnies', but it's much better to name it what it actually holds, like 'Timer', so you don't get confused later."
          },
          {
            topic: "Debugging",
            type: "steps",
            intro: "Find and fix mistakes when your code doesn't do what you expect.",
            steps: [
              {
                action: "Play your game and watch carefully to see exactly when the problem happens.",
                detail: "Does the sprite jump too high? Does it go the wrong way? Identifying the exact error is the first step."
              },
              {
                action: "Read through your code blocks from top to bottom, just like reading a book.",
                detail: "Check if the blocks are in the wrong order or if a number was typed incorrectly."
              },
              {
                action: "Disconnect a large chunk of code and test just one small part at a time.",
                detail: "This helps you narrow down which specific block is causing the trouble."
              },
              {
                action: "Add a 'Say' block temporarily to check if a variable is working.",
                detail: "Make the sprite say the 'Score' variable out loud to see if it is actually going up."
              },
              {
                action: "Ask a classmate to look at your screen and explain what you want the code to do.",
                detail: "Sometimes just explaining the problem out loud helps you realize the mistake immediately (this is called 'Rubber Duck Debugging'!)."
              }
            ],
            tip: "Everyone makes mistakes while coding, even professional programmers. Don't get frustrated; treat it like solving a puzzle."
          },
          {
            topic: "Interactive stories and simple games",
            type: "steps",
            intro: "Combine all your Scratch skills to build a complete project.",
            steps: [
              {
                action: "Plan your project on paper first, sketching out the background and characters.",
                detail: "Decide what the goal of the game is before you start dragging in code blocks."
              },
              {
                action: "Use 'Broadcast' blocks to send invisible messages between sprites.",
                detail: "For example, when the hero touches the door, it broadcasts 'Next Level' to change the backdrop."
              },
              {
                action: "Add 'If-Then' blocks inside a 'Forever' loop to control your character with the keyboard arrows.",
                detail: "This makes the character constantly check if you are pressing a key."
              },
              {
                action: "Click the 'Sounds' tab and add music or sound effects to actions.",
                detail: "A 'pop' sound when collecting an item makes the game feel much more professional and fun."
              },
              {
                action: "Create a 'Game Over' or 'You Win!' screen that hides all other sprites when the game ends.",
                detail: "This gives the player a clear signal that they have finished playing."
              }
            ],
            tip: "Start simple! Get one character moving perfectly before trying to add ten enemies."
          }
        ]
      },
      {
        title: "AI Foundations",
        diagram: {
          caption: "How an AI assistant answers a question",
          mermaid: "flowchart LR\n  A[You type a prompt] --> B[AI reads it]\n  B --> C[AI generates response]\n  C --> D[You check if it is right]"
        },
        items: [
          {
            topic: "What AI is; AI in everyday life",
            type: "concept",
            definition: "Artificial Intelligence (AI) is a branch of computer science where programmers build systems capable of doing things that usually require human intelligence, like understanding language or recognizing pictures.",
            example: "When a map app on your phone automatically finds the fastest route to school around a traffic jam, it is using AI.",
            whyItMatters: "AI is becoming a part of almost every job and tool in the world, so understanding how it works will give you a huge advantage in the future.",
            funFactOrMisconception: "Many movies show AI as robots that want to take over the world, but real AI is just a bunch of math and code running on servers to help us solve problems."
          },
          {
            topic: "Generative AI; AI assistants",
            type: "concept",
            definition: "Generative AI is a specific type of AI that can create brand new content—like writing text, drawing images, or even writing code—based on your instructions. AI assistants use this to help you with tasks.",
            example: "If you ask an AI assistant like ChatGPT to write a poem about a flying turtle, it uses generative AI to instantly invent a poem that has never existed before.",
            whyItMatters: "Instead of just searching for information that someone else already wrote (like a Google search), Generative AI lets you create custom tools and answers for your specific needs.",
            funFactOrMisconception: "AI assistants don't actually 'know' facts like a human does. They just predict which word should come next based on millions of books and websites they were trained on."
          },
          {
            topic: "Basic prompting",
            type: "steps",
            intro: "Get the best possible answers from an AI by giving it clear instructions.",
            steps: [
              {
                action: "Start with a clear, direct instruction verb, like 'Write', 'Explain', or 'List'.",
                detail: "Don't just say 'Space' — say 'Explain how rockets fly to space'."
              },
              {
                action: "Give the AI some context about who you are or what the answer is for.",
                detail: "Add '...for a 4th-grade science project' so the AI doesn't give you a college-level physics paper."
              },
              {
                action: "Specify how long or what format you want the answer in.",
                detail: "Tell it to 'Give me 3 bullet points' instead of letting it write a long essay."
              },
              {
                action: "Read the answer carefully and find what is missing or wrong.",
                detail: "The first answer is almost never perfect, and that is completely normal."
              },
              {
                action: "Reply to the AI asking it to 'try again' with more specific instructions.",
                detail: "Say 'Make it funnier' or 'Include a fact about Mars' to improve the result."
              }
            ],
            tip: "Treat the AI like a very smart robot that has no common sense—you have to explain exactly what you want."
          },
          {
            topic: "Brainstorming and learning with AI",
            type: "steps",
            intro: "Use AI to overcome 'writer's block' and spark your own creativity.",
            steps: [
              {
                action: "Ask the AI to generate a list of ideas when you are stuck on a project.",
                detail: "Type 'Give me 5 unique ideas for a school project about plants'."
              },
              {
                action: "Pick your favorite idea from the list, or combine two ideas together.",
                detail: "Never just copy the first idea. Use the AI's list to inspire your own choice."
              },
              {
                action: "Ask the AI to explain a confusing concept you didn't understand in class.",
                detail: "Type 'Explain photosynthesis using a simple analogy like baking a cake'."
              },
              {
                action: "Ask the AI to test your knowledge by giving you a short quiz.",
                detail: "Say 'Ask me 3 multiple-choice questions about the solar system'."
              },
              {
                action: "Always write your final assignment in your own words, using the AI only as a tutor.",
                detail: "Copying and pasting an AI's writing and pretending it is yours is cheating."
              }
            ],
            tip: "If you don't understand the AI's explanation, tell it 'I still don't get it, try explaining it differently'."
          },
          {
            topic: "AI limitations; privacy and responsible use",
            type: "concept",
            definition: "AI has severe limitations: it can confidently make up fake information (called 'hallucinating'), it doesn't understand right from wrong, and it records what you type into it.",
            example: "An AI might invent a fake historical battle that never happened, and sound completely certain that it did.",
            whyItMatters: "If you trust everything an AI says without checking, you will eventually look foolish or fail an assignment. If you share private info, it could be used by others.",
            funFactOrMisconception: "Many people think AI is private like a diary. Actually, engineers often read transcripts to improve the AI, so never share secrets or personal details!"
          }
        ]
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
            definition: "A computer system is an integrated team of hardware and software working together to process, store, and output information.",
            example: "Think of a computer system like a busy restaurant: the CPU is the chef, the RAM is the counter where plates are prepped, and the hard drive is the pantry in the back.",
            whyItMatters: "Understanding how the parts work together helps you figure out what to fix when something breaks.",
            funFactOrMisconception: "A bigger computer case doesn't mean it's faster! It's the tiny chips inside that determine how fast a computer system really is."
          },
          {
            topic: "File organization",
            type: "steps",
            intro: "Keep your digital workspace clean so you never lose an assignment.",
            steps: [
              {
                action: "Create a main folder on your desktop and name it with the current school year (e.g., '5th Grade 2024').",
                detail: "This keeps everything for the year in one central location."
              },
              {
                action: "Inside that folder, create separate sub-folders for each subject (Math, Science, English).",
                detail: "Treat these like physical binders for your classes."
              },
              {
                action: "When you start a new project, save it immediately into the correct subject folder.",
                detail: "Don't just save everything to the desktop or the Downloads folder!"
              },
              {
                action: "At the end of a semester, create an 'Archive' folder to store old work.",
                detail: "This keeps your main folders clean and focused on what you are doing right now."
              }
            ],
            tip: "Use numbers at the beginning of folder names (e.g., '01_Math', '02_Science') to force the computer to put them in the order you want."
          },
          {
            topic: "Productivity shortcuts",
            type: "steps",
            intro: "Work like a professional by keeping your hands on the keyboard.",
            steps: [
              {
                action: "Press 'Ctrl + F' (or Cmd + F on a Mac) to quickly find a word or phrase in a long document.",
                detail: "A small search box will appear. Type your word, and it will highlight every time it appears on the page."
              },
              {
                action: "Use 'Windows Key + D' (or Cmd + F3) to instantly minimize all windows and see your desktop.",
                detail: "This is great when you need to grab a file hidden behind a messy pile of open apps."
              },
              {
                action: "Press 'Ctrl + P' to quickly open the print menu for any document or webpage.",
                detail: "This saves you from digging through the File menu."
              },
              {
                action: "Press 'Ctrl + Z' to 'Undo' your last action.",
                detail: "If you accidentally delete a whole paragraph, just press Ctrl + Z and it will pop right back!"
              }
            ],
            tip: "Shortcuts are called shortcuts for a reason! They can save you hours of clicking over a school year."
          },
          {
            topic: "Basic troubleshooting",
            type: "steps",
            intro: "Fix common computer problems yourself before asking for help.",
            steps: [
              {
                action: "If a program freezes, do not click the mouse 50 times in a row.",
                detail: "This will only confuse the computer more! Give it a minute to catch up."
              },
              {
                action: "If your internet is suddenly slow or disconnected, check if other devices in the room are working.",
                detail: "If everything is broken, the router might need a restart. If it's just your computer, check your Wi-Fi settings."
              },
              {
                action: "If you can't find a file you saved, click the start menu and use the 'Search' bar.",
                detail: "Type part of the filename and let the computer hunt for it."
              },
              {
                action: "If an error message pops up, read the whole message before clicking OK.",
                detail: "Often, the message tells you exactly how to fix the problem."
              }
            ],
            tip: "The golden rule of IT: When in doubt, turn it completely off and turn it back on again!"
          },
          {
            topic: "Digital organization",
            type: "concept",
            definition: "Digital organization is the disciplined practice of keeping your files, emails, and accounts tidy, properly named, and easy to find.",
            example: "Giving your science report a clear name like 'Volcano_Diagram_Final.png' instead of just 'image123.png' is digital organization in action.",
            whyItMatters: "A messy computer slows you down and causes stress when a deadline is approaching.",
            funFactOrMisconception: "Using the 'Search' bar for everything is not the same as being organized. A well-organized folder system is always faster and more reliable."
          }
        ],
      },
      {
        title: "Office Productivity",
        items: [
          {
            topic: "Practical use of documents, presentations and spreadsheets",
            type: "concept",
            definition: "Mastering office tools means knowing not just how to use them, but knowing exactly which tool is right for the specific job you have to do.",
            example: "Use Word or Docs for writing a long history report, use PowerPoint or Slides for a visual class talk, and use Excel or Sheets to track data for a science experiment.",
            whyItMatters: "Using the wrong tool (like trying to write a 5-page essay in PowerPoint) will make your work look unprofessional and take twice as long.",
            funFactOrMisconception: "Spreadsheets aren't just for accountants doing math! They are fantastic tools for making checklists, tracking habits, and organizing large amounts of information."
          },
          {
            topic: "Tables; formatting",
            type: "steps",
            intro: "Make complex data look neat and easy to read.",
            steps: [
              {
                action: "Insert a table and use 'Cell Merging' to create a main title.",
                detail: "Highlight the top row of cells, right-click, and select 'Merge Cells' to turn them into one giant box for your title."
              },
              {
                action: "Apply 'Conditional Formatting' in a spreadsheet to color-code numbers.",
                detail: "Set a rule that makes the cell turn red if the number is low, and green if it is high."
              },
              {
                action: "Use consistent fonts and colors throughout your tables.",
                detail: "Don't use five different fonts in one table. Keep it clean and professional."
              },
              {
                action: "Adjust the column widths so the text doesn't look squished.",
                detail: "Hover your mouse between the column letters at the top and double-click to automatically fit the text perfectly."
              }
            ],
            tip: "Shading every other row with a light gray color (called 'banding') makes wide tables much easier for the eye to follow."
          },
          {
            topic: "Basic formulas; charts",
            type: "steps",
            intro: "Let the computer do the heavy math lifting for you.",
            steps: [
              {
                action: "Type '=AVERAGE(' and select a list of numbers to find the middle value.",
                detail: "This is perfect for figuring out your average grade on a set of quizzes."
              },
              {
                action: "Use '=MIN()' and '=MAX()' to find the smallest and largest values in your data.",
                detail: "This helps you quickly find the lowest temperature in a weather chart."
              },
              {
                action: "Highlight all your data and labels, click 'Insert', and choose 'Pie Chart'.",
                detail: "A pie chart is the best way to show how different parts make up a whole, like showing how you spend your time every day."
              },
              {
                action: "Add a clear Title and Data Labels to your chart.",
                detail: "A chart is useless if the person looking at it doesn't know what the colors mean."
              }
            ],
            tip: "Always remember that every formula in a spreadsheet must start with an equals sign (=)!"
          },
          {
            topic: "Using the right tool for a task",
            type: "concept",
            definition: "Choosing the best application based on the format of your final project: text-heavy, data-heavy, or visual-heavy.",
            example: "If you want to write a letter to the mayor, Word is the tool. If you want to list the costs of a school trip, Excel is the tool.",
            whyItMatters: "Professionals in the real world expect information to be delivered in the correct format.",
            funFactOrMisconception: "You can actually put a small Excel table inside a Word document, combining the power of both tools!"
          }
        ],
      },
      {
        title: "Internet & Digital Citizenship",
        items: [
          {
            topic: "Effective research",
            type: "steps",
            intro: "Gather information from the internet like a professional researcher.",
            steps: [
              {
                action: "Use a variety of different sources for your project.",
                detail: "Don't just use Wikipedia. Look at digital encyclopedias, news sites, and educational videos to get a complete picture."
              },
              {
                action: "Read a paragraph, look away, and take notes in your own words.",
                detail: "Copying and pasting directly from a website without giving credit is called plagiarism, and it is a serious rule violation."
              },
              {
                action: "Keep a running list of every website you use in a blank document.",
                detail: "You will need this list at the end of your project to create a 'Bibliography' or 'Works Cited' page."
              },
              {
                action: "Use the 'Find' shortcut (Ctrl + F) on long web pages.",
                detail: "This helps you jump straight to the exact keyword you need without reading the whole article."
              }
            ],
            tip: "When searching, try adding 'site:.gov' or 'site:.edu' to your search to only see results from government or university websites."
          },
          {
            topic: "Reliable vs. unreliable information",
            type: "concept",
            definition: "Reliable information is written by experts, checked for accuracy, and backed by facts. Unreliable information may be biased, outdated, or completely made up.",
            example: "A report on climate change from a government science agency is highly reliable. A blog post by a random person selling vitamins is unreliable.",
            whyItMatters: "Basing your school project on unreliable information will result in a bad grade and spread false facts.",
            funFactOrMisconception: "A website is not reliable just because it is the first result on Google! Google ranks sites by popularity and keywords, not always by truth."
          },
          {
            topic: "Privacy; scams",
            type: "steps",
            intro: "Protect your personal information from bad actors on the internet.",
            steps: [
              {
                action: "Be extremely careful with 'Clickbait' headlines.",
                detail: "Headlines that scream 'You won't believe this trick!' or 'Click here for free V-bucks' are usually designed to steal your data or show you ads."
              },
              {
                action: "Turn on 'Two-Factor Authentication' (2FA) for your most important accounts.",
                detail: "This means even if a hacker guesses your password, they can't get in without the secret code sent to a phone."
              },
              {
                action: "Never enter your password on a website that doesn't have the closed 'padlock' icon in the address bar.",
                detail: "The padlock means your connection is scrambled and safe from people trying to spy on it."
              },
              {
                action: "If you receive an urgent email saying your account is blocked, do not click the link.",
                detail: "Go directly to the real website in a new tab and check your account there. This is a common trick called 'phishing'."
              }
            ],
            tip: "If something online sounds too good to be true, it is almost certainly a scam."
          },
          {
            topic: "Digital footprint",
            type: "concept",
            definition: "Your digital footprint is the permanent trail of data left by your online activities, including comments, photos, and game scores.",
            example: "A mean comment you leave on a YouTube video becomes part of your digital footprint, and it can stay there for years.",
            whyItMatters: "Colleges and future employers will search your name online. A positive digital footprint can help you, while a negative one can hurt your chances.",
            funFactOrMisconception: "Even if your account is private, screenshots exist! You should always assume that anything you post could eventually be seen by everyone."
          },
          {
            topic: "Responsible communication",
            type: "concept",
            definition: "Responsible communication means being polite, clear, and thoughtful when sending emails, texts, or participating in online groups.",
            example: "Typing an email to your teacher with a proper greeting ('Dear Mr. Smith') and complete sentences is responsible communication.",
            whyItMatters: "Without tone of voice or facial expressions, it is very easy for online messages to be misunderstood as rude or angry.",
            funFactOrMisconception: "Avoid typing in 'ALL CAPS' because in digital communication, that looks exactly like YOU ARE SCREAMING at the other person."
          }
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

function completeConcept(item, gradeNumber) {
  const topic = item.topic;
  const definition = item.definition || `${topic} is an important digital skill or idea. It helps you understand how technology works and how to use it thoughtfully.`;
  const example = item.example || `For example, you can practise ${topic.toLowerCase()} during a class activity and notice what changes on the screen. You can then explain what you did to a partner.`;
  const whyItMatters = item.whyItMatters || `Learning about ${topic.toLowerCase()} helps you make better choices when you create, communicate, and solve problems with technology.`;
  const funFactOrMisconception = item.funFactOrMisconception || `A common mix-up is thinking that technology always makes the right choice. People still need to check the result and use good judgement.`;
  const text = [topic, definition, example, whyItMatters, funFactOrMisconception].join(' ');
  let enrichedWhy = whyItMatters;
  let wordCount = text.trim().split(/\s+/).length;
  while (wordCount < 80) {
    enrichedWhy += ` In Grade ${gradeNumber}, connect this idea to a small project so you can see it working instead of only memorising a definition.`;
    wordCount += 22;
  }

  return {
    ...item,
    definition,
    example,
    whyItMatters: enrichedWhy,
    funFactOrMisconception,
  };
}

function completeSteps(item) {
  const steps = (item.steps || []).map((step) => {
    if (typeof step === 'string') {
      return {action: step, detail: `Look for the named button, menu, or result on the screen before continuing.`};
    }
    return {
      ...step,
      action: step.action || 'Complete the next instruction.',
      detail: step.detail || 'Check the screen for the change that should happen next.',
    };
  });

  while (steps.length < 5) {
    const number = steps.length + 1;
    steps.push({
      action: number === 4 ? 'Check your work and correct any mistake.' : 'Save or finish the activity.',
      detail: number === 4
        ? 'Compare the result with the task and use Undo or Backspace if something is not right.'
        : 'Use the File menu or the activity button, then wait for confirmation that the work is complete.',
    });
  }

  return {
    ...item,
    intro: item.intro || `Follow these steps to practise ${item.topic.toLowerCase()} from start to finish.`,
    steps,
    tip: item.tip || 'Work slowly, read each instruction, and ask a teacher before changing a setting you do not recognise.',
  };
}

function defaultDiagram(section) {
  const title = section.title.toLowerCase();
  if (title.includes('internet')) {
    return {caption: 'How a webpage reaches your screen', mermaid: 'flowchart LR\n  A[Type an address] --> B[Browser asks]\n  B --> C[Website sends files]\n  C --> D[Browser shows page]'};
  }
  if (title.includes('scratch')) {
    return {caption: 'How a Scratch program runs', mermaid: 'flowchart TD\n  A[Start event] --> B[Run blocks]\n  B --> C[Make a choice]\n  C --> D[Show result]'};
  }
  if (title.includes('ai')) {
    return {caption: 'A careful AI workflow', mermaid: 'flowchart LR\n  A[Write prompt] --> B[AI responds]\n  B --> C[Check answer]\n  C --> D[Use responsibly]'};
  }
  if (title.includes('web')) {
    return {caption: 'How a webpage is built', mermaid: 'flowchart TD\n  A[Page] --> B[HTML structure]\n  B --> C[Text and images]\n  C --> D[CSS style]'};
  }
  if (title.includes('canva')) {
    return {caption: 'How a design comes together', mermaid: 'flowchart LR\n  A[Choose idea] --> B[Add content]\n  B --> C[Arrange design]\n  C --> D[Review and share]'};
  }
  return {caption: 'A simple digital work cycle', mermaid: 'flowchart LR\n  A[Plan] --> B[Create]\n  B --> C[Check]\n  C --> D[Improve]'};
}

for (const grade of grades) {
  for (const section of grade.sections) {
    section.diagram = section.diagram || defaultDiagram(section);
    section.items = section.items.map((item) => {
      if (item.type === 'concept') return completeConcept(item, grade.number);
      if (item.type === 'steps') return completeSteps(item);
      return item;
    });
  }
}
