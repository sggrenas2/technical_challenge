import "./App.css";
import { Header } from "./Header";
import { MainView } from "./Views/MainView";
function App() {
  return (
    <div className="grid h-full w-full grid-rows-[auto_1fr]">
      <Header />
      <MainView />
    </div>
  );
}

export default App;
