import { useState } from "react";
import example from "./example";
import Previewer from "./components/Previewer";
import TextEditor from "./components/TextEditor";
//MARKED CFG

function App() {
  const [text, setText] = useState(example)

  return (
    <div className="app flex flex-col min-h-screen justify-center items-center bg-purple-400">
      <TextEditor text={text} changeText={setText} />
      <Previewer text={text} />
    </div>
  );
}

export default App;
