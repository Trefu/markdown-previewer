import Previewer from "./components/Previewer";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-purple-400">
      <TextEditor />
      <Previewer />
    </div>
  );
}

export default App;
