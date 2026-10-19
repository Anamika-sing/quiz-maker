/* Built-in quizzes: 20 questions for each category. */
const defaultQuizzes = [
  {
    "id": "default-html",
    "title": "HTML Quiz",
    "category": "HTML",
    "timer": 15,
    "questions": [
      {
        "question": "HTML stands for?",
        "options": [
          "Hyper Text Markup Language",
          "Hyperlinks and Text Markup Language",
          "Home Tool Markup Language",
          "High Text Machine Language"
        ],
        "correct": "0"
      },
      {
        "question": "Which tag creates the largest heading?",
        "options": [
          "<head>",
          "<h6>",
          "<h1>",
          "<heading>"
        ],
        "correct": "2"
      },
      {
        "question": "Which tag inserts a line break?",
        "options": [
          "<br>",
          "<newline>",
          "<lb>",
          "<break>"
        ],
        "correct": "0"
      },
      {
        "question": "Which attribute specifies the URL of a link?",
        "options": [
          "link",
          "url",
          "src",
          "href"
        ],
        "correct": "3"
      },
      {
        "question": "Which tag is used to display an image?",
        "options": [
          "<img>",
          "<src>",
          "<image>",
          "<pic>"
        ],
        "correct": "0"
      },
      {
        "question": "Which tag creates an unordered (bulleted) list?",
        "options": [
          "<list>",
          "<li>",
          "<ul>",
          "<ol>"
        ],
        "correct": "2"
      },
      {
        "question": "Which tag creates a hyperlink?",
        "options": [
          "<link>",
          "<a>",
          "<href>",
          "<hyper>"
        ],
        "correct": "1"
      },
      {
        "question": "Where is the text inside the <title> tag shown?",
        "options": [
          "In the browser tab",
          "In a pop-up",
          "In the footer",
          "On the page body"
        ],
        "correct": "0"
      },
      {
        "question": "Which declaration marks a document as HTML5?",
        "options": [
          "<!DOCTYPE HTML5>",
          "<html5>",
          "<!HTML version=5>",
          "<!DOCTYPE html>"
        ],
        "correct": "3"
      },
      {
        "question": "Which tag defines a table row?",
        "options": [
          "<row>",
          "<td>",
          "<tr>",
          "<th>"
        ],
        "correct": "2"
      },
      {
        "question": "Which attribute makes a form field mandatory?",
        "options": [
          "important",
          "validate",
          "required",
          "needed"
        ],
        "correct": "2"
      },
      {
        "question": "Which input type creates a checkbox?",
        "options": [
          "type=\"box\"",
          "type=\"check\"",
          "type=\"tick\"",
          "type=\"checkbox\""
        ],
        "correct": "3"
      },
      {
        "question": "Which tag is used to add JavaScript to a page?",
        "options": [
          "<code>",
          "<js>",
          "<javascript>",
          "<script>"
        ],
        "correct": "3"
      },
      {
        "question": "Which of these is a semantic element?",
        "options": [
          "<b>",
          "<article>",
          "<span>",
          "<div>"
        ],
        "correct": "1"
      },
      {
        "question": "Which attribute opens a link in a new tab?",
        "options": [
          "target=\"_new\"",
          "target=\"_blank\"",
          "href=\"_blank\"",
          "open=\"new\""
        ],
        "correct": "1"
      },
      {
        "question": "Which tag defines the main navigation links of a page?",
        "options": [
          "<links>",
          "<nav>",
          "<menu-bar>",
          "<navigate>"
        ],
        "correct": "1"
      },
      {
        "question": "Which tag defines a paragraph?",
        "options": [
          "<p>",
          "<text>",
          "<para>",
          "<pg>"
        ],
        "correct": "0"
      },
      {
        "question": "What does the alt attribute of an image do?",
        "options": [
          "Sets the image border",
          "Links the image to a page",
          "Gives alternative text if the image cannot load",
          "Sets the image size"
        ],
        "correct": "2"
      },
      {
        "question": "Which tag creates a dropdown list?",
        "options": [
          "<option-list>",
          "<select>",
          "<dropdown>",
          "<list>"
        ],
        "correct": "1"
      },
      {
        "question": "Which tag holds metadata such as the character set?",
        "options": [
          "<footer>",
          "<section>",
          "<head>",
          "<body>"
        ],
        "correct": "2"
      }
    ]
  },
  {
    "id": "default-css",
    "title": "CSS Quiz",
    "category": "CSS",
    "timer": 15,
    "questions": [
      {
        "question": "CSS stands for?",
        "options": [
          "Colorful Style Sheets",
          "Computer Style Sheets",
          "Creative Style Sheets",
          "Cascading Style Sheets"
        ],
        "correct": "3"
      },
      {
        "question": "Which property changes the text color?",
        "options": [
          "font-color",
          "color",
          "text-color",
          "fg-color"
        ],
        "correct": "1"
      },
      {
        "question": "Which property sets the background color?",
        "options": [
          "background-color",
          "color-background",
          "bgcolor",
          "back-color"
        ],
        "correct": "0"
      },
      {
        "question": "Which symbol selects a class?",
        "options": [
          "&",
          ".",
          "#",
          "*"
        ],
        "correct": "1"
      },
      {
        "question": "Which symbol selects an id?",
        "options": [
          "$",
          ".",
          "#",
          "@"
        ],
        "correct": "2"
      },
      {
        "question": "Which property changes the font size?",
        "options": [
          "text-size",
          "font-size",
          "font-style",
          "size"
        ],
        "correct": "1"
      },
      {
        "question": "Which property adds space inside an element, between content and border?",
        "options": [
          "gap",
          "margin",
          "spacing",
          "padding"
        ],
        "correct": "3"
      },
      {
        "question": "Which property adds space outside an element's border?",
        "options": [
          "border-spacing",
          "margin",
          "outline",
          "padding"
        ],
        "correct": "1"
      },
      {
        "question": "Which declaration makes an element a flex container?",
        "options": [
          "flex: container",
          "position: flex",
          "display: flex",
          "align: flex"
        ],
        "correct": "2"
      },
      {
        "question": "Which property rounds the corners of an element?",
        "options": [
          "round",
          "corner-radius",
          "border-radius",
          "border-round"
        ],
        "correct": "2"
      },
      {
        "question": "How do you select all <p> elements in CSS?",
        "options": [
          "p",
          ".p",
          "<p>",
          "#p"
        ],
        "correct": "0"
      },
      {
        "question": "Which property controls the stacking order of elements?",
        "options": [
          "layer",
          "stack",
          "z-index",
          "order"
        ],
        "correct": "2"
      },
      {
        "question": "Which property makes text bold?",
        "options": [
          "bold",
          "font-style",
          "font-weight",
          "text-bold"
        ],
        "correct": "2"
      },
      {
        "question": "What is the default value of the position property?",
        "options": [
          "absolute",
          "fixed",
          "relative",
          "static"
        ],
        "correct": "3"
      },
      {
        "question": "Which property changes the font of the text?",
        "options": [
          "text-font",
          "font-family",
          "typeface",
          "font-type"
        ],
        "correct": "1"
      },
      {
        "question": "Which unit is relative to the font size of the element?",
        "options": [
          "em",
          "cm",
          "pt",
          "px"
        ],
        "correct": "0"
      },
      {
        "question": "Which at-rule is used for responsive design?",
        "options": [
          "@screen-size",
          "@media",
          "@responsive",
          "@query"
        ],
        "correct": "1"
      },
      {
        "question": "Which property hides an element but keeps its space?",
        "options": [
          "display: none",
          "hidden: true",
          "visibility: hidden",
          "opacity: 1"
        ],
        "correct": "2"
      },
      {
        "question": "Which declaration centers text horizontally?",
        "options": [
          "align-text: center",
          "font-align: middle",
          "center-text: true",
          "text-align: center"
        ],
        "correct": "3"
      },
      {
        "question": "Which pseudo-class styles an element when the mouse is over it?",
        "options": [
          ":visited",
          ":active",
          ":hover",
          ":focus"
        ],
        "correct": "2"
      }
    ]
  },
  {
    "id": "default-javascript",
    "title": "JavaScript Quiz",
    "category": "JavaScript",
    "timer": 15,
    "questions": [
      {
        "question": "Which keyword declares a block-scoped variable that can be reassigned?",
        "options": [
          "define",
          "let",
          "const",
          "var"
        ],
        "correct": "1"
      },
      {
        "question": "Which symbol starts a single-line comment in JavaScript?",
        "options": [
          "<!-- -->",
          "//",
          "**",
          "#"
        ],
        "correct": "1"
      },
      {
        "question": "What does typeof \"hello\" return?",
        "options": [
          "number",
          "text",
          "char",
          "string"
        ],
        "correct": "3"
      },
      {
        "question": "Which method adds an element to the end of an array?",
        "options": [
          "push()",
          "pop()",
          "slice()",
          "shift()"
        ],
        "correct": "0"
      },
      {
        "question": "Which method removes the last element of an array?",
        "options": [
          "shift()",
          "push()",
          "splice()",
          "pop()"
        ],
        "correct": "3"
      },
      {
        "question": "What is the output of 2 + \"2\" in JavaScript?",
        "options": [
          "Error",
          "4",
          "NaN",
          "22"
        ],
        "correct": "3"
      },
      {
        "question": "Which operator checks both value and type?",
        "options": [
          "!=",
          "==",
          "===",
          "="
        ],
        "correct": "2"
      },
      {
        "question": "Which method converts a JSON string into an object?",
        "options": [
          "JSON.convert()",
          "JSON.stringify()",
          "JSON.parse()",
          "JSON.object()"
        ],
        "correct": "2"
      },
      {
        "question": "Which is the correct way to write a function?",
        "options": [
          "func myFunc() {}",
          "fn myFunc() {}",
          "def myFunc():",
          "function myFunc() {}"
        ],
        "correct": "3"
      },
      {
        "question": "Which method selects an element by its id?",
        "options": [
          "document.getElementById()",
          "queryId()",
          "selectById()",
          "getId()"
        ],
        "correct": "0"
      },
      {
        "question": "Which event fires when a user clicks an element?",
        "options": [
          "onhover",
          "onselect",
          "onpress",
          "onclick"
        ],
        "correct": "3"
      },
      {
        "question": "What does NaN stand for?",
        "options": [
          "No assigned Name",
          "New array Node",
          "Null and None",
          "Not a Number"
        ],
        "correct": "3"
      },
      {
        "question": "Which method runs a function once for every array element?",
        "options": [
          "filter()",
          "map()",
          "reduce()",
          "forEach()"
        ],
        "correct": "3"
      },
      {
        "question": "What does typeof null return?",
        "options": [
          "undefined",
          "object",
          "number",
          "null"
        ],
        "correct": "1"
      },
      {
        "question": "Which keyword declares a constant?",
        "options": [
          "const",
          "let",
          "var",
          "static"
        ],
        "correct": "0"
      },
      {
        "question": "Which storage keeps data even after the browser tab is closed (until cleared)?",
        "options": [
          "localStorage",
          "history.state",
          "sessionStorage",
          "console"
        ],
        "correct": "0"
      },
      {
        "question": "What does Array.isArray([]) return?",
        "options": [
          "false",
          "true",
          "Error",
          "undefined"
        ],
        "correct": "1"
      },
      {
        "question": "Which statement is used to handle errors?",
        "options": [
          "throw...end",
          "if...else",
          "try...catch",
          "error...handle"
        ],
        "correct": "2"
      },
      {
        "question": "Which function runs code after a delay?",
        "options": [
          "wait()",
          "setTimeout()",
          "pause()",
          "delay()"
        ],
        "correct": "1"
      },
      {
        "question": "What is the result of 5 > 3 && 2 > 4?",
        "options": [
          "Error",
          "true",
          "false",
          "undefined"
        ],
        "correct": "2"
      }
    ]
  },
  {
    "id": "default-python",
    "title": "Python Quiz",
    "category": "Python",
    "timer": 15,
    "questions": [
      {
        "question": "Which keyword defines a function in Python?",
        "options": [
          "define",
          "def",
          "fun",
          "function"
        ],
        "correct": "1"
      },
      {
        "question": "What does print(type(5)) show?",
        "options": [
          "int",
          "<class 'int'>",
          "<class 'number'>",
          "<type 'int'>"
        ],
        "correct": "1"
      },
      {
        "question": "Which symbol starts a single-line comment in Python?",
        "options": [
          "/*",
          "//",
          "--",
          "#"
        ],
        "correct": "3"
      },
      {
        "question": "Which data type is immutable?",
        "options": [
          "list",
          "dict",
          "set",
          "tuple"
        ],
        "correct": "3"
      },
      {
        "question": "How do you get the number of items in a list x?",
        "options": [
          "x.size()",
          "len(x)",
          "count(x)",
          "length(x)"
        ],
        "correct": "1"
      },
      {
        "question": "What does 10 // 3 give?",
        "options": [
          "1",
          "4",
          "3.33",
          "3"
        ],
        "correct": "3"
      },
      {
        "question": "Which keyword is used to loop over a sequence?",
        "options": [
          "foreach",
          "iterate",
          "for",
          "loop"
        ],
        "correct": "2"
      },
      {
        "question": "Which function takes input from the user?",
        "options": [
          "get()",
          "input()",
          "read()",
          "scan()"
        ],
        "correct": "1"
      },
      {
        "question": "What does 2 ** 3 give?",
        "options": [
          "9",
          "8",
          "5",
          "6"
        ],
        "correct": "1"
      },
      {
        "question": "Which method adds an item to the end of a list?",
        "options": [
          "push()",
          "add()",
          "append()",
          "insert_end()"
        ],
        "correct": "2"
      },
      {
        "question": "Which brackets are used to create a dictionary with key-value pairs?",
        "options": [
          "{}",
          "()",
          "[]",
          "<>"
        ],
        "correct": "0"
      },
      {
        "question": "Python is a(n):",
        "options": [
          "Assembly language",
          "Interpreted, high-level language",
          "Markup language",
          "Compiled-only language"
        ],
        "correct": "1"
      },
      {
        "question": "Which keyword handles exceptions in Python?",
        "options": [
          "error",
          "catch",
          "rescue",
          "except"
        ],
        "correct": "3"
      },
      {
        "question": "What does \"abc\".upper() return?",
        "options": [
          "abc",
          "Abc",
          "aBC",
          "ABC"
        ],
        "correct": "3"
      },
      {
        "question": "Which keyword imports a module?",
        "options": [
          "require",
          "import",
          "using",
          "include"
        ],
        "correct": "1"
      },
      {
        "question": "What does bool(0) return?",
        "options": [
          "True",
          "None",
          "0",
          "False"
        ],
        "correct": "3"
      },
      {
        "question": "Which is the correct way to create a list?",
        "options": [
          "[1, 2, 3]",
          "(1, 2, 3)",
          "{1, 2, 3}",
          "<1, 2, 3>"
        ],
        "correct": "0"
      },
      {
        "question": "Which function returns the largest item?",
        "options": [
          "max()",
          "high()",
          "top()",
          "largest()"
        ],
        "correct": "0"
      },
      {
        "question": "What is the file extension of a Python file?",
        "options": [
          ".python",
          ".py",
          ".pt",
          ".pyt"
        ],
        "correct": "1"
      },
      {
        "question": "Which keyword defines a class?",
        "options": [
          "def",
          "struct",
          "object",
          "class"
        ],
        "correct": "3"
      }
    ]
  },
  {
    "id": "default-java",
    "title": "Java Quiz",
    "category": "Java",
    "timer": 15,
    "questions": [
      {
        "question": "Java was originally developed by?",
        "options": [
          "Sun Microsystems",
          "Apple",
          "Microsoft",
          "Google"
        ],
        "correct": "0"
      },
      {
        "question": "Which is the entry point of a Java program?",
        "options": [
          "public static void main(String[] args)",
          "init()",
          "start()",
          "run()"
        ],
        "correct": "0"
      },
      {
        "question": "Which keyword creates an object?",
        "options": [
          "create",
          "make",
          "new",
          "object"
        ],
        "correct": "2"
      },
      {
        "question": "Which data type stores whole numbers?",
        "options": [
          "int",
          "String",
          "float",
          "boolean"
        ],
        "correct": "0"
      },
      {
        "question": "What is the file extension of compiled Java bytecode?",
        "options": [
          ".java",
          ".class",
          ".jar",
          ".exe"
        ],
        "correct": "1"
      },
      {
        "question": "Which keyword is used for inheritance?",
        "options": [
          "inherits",
          "super",
          "implements",
          "extends"
        ],
        "correct": "3"
      },
      {
        "question": "Which of these is NOT a primitive data type?",
        "options": [
          "String",
          "char",
          "int",
          "boolean"
        ],
        "correct": "0"
      },
      {
        "question": "JVM stands for?",
        "options": [
          "Java Variable Machine",
          "Joint Virtual Machine",
          "Java Virtual Machine",
          "Java Visual Mode"
        ],
        "correct": "2"
      },
      {
        "question": "Which keyword makes a variable constant?",
        "options": [
          "fixed",
          "final",
          "const",
          "static"
        ],
        "correct": "1"
      },
      {
        "question": "Which statement prints output to the console?",
        "options": [
          "console.log()",
          "System.out.println()",
          "print()",
          "echo()"
        ],
        "correct": "1"
      },
      {
        "question": "Which loop always runs at least once?",
        "options": [
          "do-while",
          "for-each",
          "while",
          "for"
        ],
        "correct": "0"
      },
      {
        "question": "Which collection does NOT allow duplicate elements?",
        "options": [
          "HashSet",
          "Vector",
          "LinkedList",
          "ArrayList"
        ],
        "correct": "0"
      },
      {
        "question": "What is the size of an int in Java?",
        "options": [
          "8 bits",
          "64 bits",
          "16 bits",
          "32 bits"
        ],
        "correct": "3"
      },
      {
        "question": "Which keyword refers to the current object?",
        "options": [
          "self",
          "this",
          "current",
          "me"
        ],
        "correct": "1"
      },
      {
        "question": "Which access modifier is the most restrictive?",
        "options": [
          "public",
          "protected",
          "default",
          "private"
        ],
        "correct": "3"
      },
      {
        "question": "Using the same method name with different parameters is called?",
        "options": [
          "Encapsulation",
          "Overloading",
          "Overriding",
          "Abstraction"
        ],
        "correct": "1"
      },
      {
        "question": "Which keyword is used to implement an interface?",
        "options": [
          "extends",
          "implements",
          "inherits",
          "interface"
        ],
        "correct": "1"
      },
      {
        "question": "Which class is the parent of all classes in Java?",
        "options": [
          "Main",
          "Class",
          "System",
          "Object"
        ],
        "correct": "3"
      },
      {
        "question": "Which block is used to handle exceptions?",
        "options": [
          "if-else",
          "try-catch",
          "for",
          "switch"
        ],
        "correct": "1"
      },
      {
        "question": "Which method compares the content of two strings?",
        "options": [
          "==",
          "same()",
          "equals()",
          "compare()"
        ],
        "correct": "2"
      }
    ]
  }
];

/* Quizzes created by the user are stored in localStorage as an array. */

function getCustomQuizzes() {
  try {
    const data = JSON.parse(localStorage.getItem("customQuizzes"));
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function getAllQuizzes() {
  return defaultQuizzes.concat(getCustomQuizzes());
}

function getQuizById(id) {
  return getAllQuizzes().find((quiz) => quiz.id === id) || null;
}