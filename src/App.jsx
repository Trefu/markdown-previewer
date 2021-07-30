import { useState } from "react";
import Previewer from "./components/Previewer";
import TextEditor from "./components/TextEditor";
//MARKED CFG

function App() {
  const [text, setText] = useState('')

  return (
    <div className="app flex flex-col min-h-screen justify-center items-center bg-purple-400">
      <TextEditor changeText={setText} />
      <Previewer text={text} />
    </div>
  );
}

export default App;
