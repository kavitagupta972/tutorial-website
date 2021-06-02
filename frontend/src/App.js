import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouteHandler from './RouteHandler';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <div className="assignment-app">
       <RouteHandler/>
      </div>
    </BrowserRouter>
  );
}

export default App;
