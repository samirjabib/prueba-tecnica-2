import { AppRouter } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
        <ToastContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
