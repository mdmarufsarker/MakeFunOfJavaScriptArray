const { argv } = require("yargs");
const path = require("path");
const Todo = require("./src/js/todo.js");
const { saveFile, readFile } = require("./src/js/utils.js");
const {
  ADD,
  UPDATE,
  DONE,
  NEXT,
  CLEAR,
  FIND,
  LIST,
} = require("./src/js/commands.js");

const fileName = "./src/db/data.json";
const filePath = path.resolve(__dirname, fileName);

(function init() {
  const data = readFile(filePath) || [];
  const todo = new Todo(data);

  const { _: baseCommand } = argv;

  switch (baseCommand[0]) {
    case ADD:
      todo.add(argv.text);
      console.log("Todo Added");
      saveFile(todo.list(), filePath);
      break;
    case UPDATE:
      todo.update(argv.id, argv.text);
      console.log("Todo Updated");
      saveFile(todo.list(), filePath);
      break;
    case DONE:
      todo.done();
      console.log("One item Completed");
      saveFile(todo.list(), filePath);
      break;
    case NEXT:
      const item = todo.next();
      console.log(`${item.id} - ${item.text} - ${item.created}`);
      break;
    case CLEAR:
      todo.clear();
      console.log("Todo Cleared");
      saveFile(todo.list(), filePath);
      break;
    case FIND:
      const items = todo.find(argv.id);
      if (items.length === 0) {
        console.log("No item found");
      }

      for (let i = 0; i < items.length; i++) {
        console.log(`${items[i].id} - ${items[i].text} - ${items[i].created}`);
      }
      break;
    case LIST:
      const todoList = todo.list();
      if (todoList.length === 0) {
        console.log("Empty List");
      }
      for (let i = 0; i < todoList.length; i++) {
        console.log(
          `${todoList[i].id} - ${todoList[i].text} - ${todoList[i].created}`
        );
      }
      break;
    default:
      console.log("Command not found");
  }
})();
