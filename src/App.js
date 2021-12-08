import './App.scss';
import MainLayout from "./layouts/mainLayout";
import {LinkProvider} from "./context";

function App() {
  return (
    <LinkProvider>
      <MainLayout/>
    </LinkProvider>
  );
}

export default App;
