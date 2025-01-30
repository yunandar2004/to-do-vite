import initialRender from "./initialRender.js";
import listeners from "./listener.js";
import observer from "./obsever.js";

class Todo {
  init() {
    console.log("to do list start");
    observer()
    initialRender();
    listeners();
  }
}
export default Todo;
