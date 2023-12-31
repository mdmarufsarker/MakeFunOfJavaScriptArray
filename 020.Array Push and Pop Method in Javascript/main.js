const Stack = require("./Stack.js");
const stack = new Stack();

const text = "Hello World";

for (let i = 0; i < text.length; i++) {
  stack.push(text[i]);
}

let reverseText = "";
while (!stack.isEmpty()) {
//   console.log(stack);
//   console.log(`[Poped Value] ${stack.peek()}`);
  reverseText += stack.pop();
}

console.log(reverseText);


// JS Built-in Array Stack Methods
const msg = "Hello World";
const st = [];
for(let i = 0; i < msg.length; i++){
    st.push(msg[i]);
}

let revMsg = "";
while(st.length > 0){
    revMsg += st.pop();
}

console.log(revMsg);