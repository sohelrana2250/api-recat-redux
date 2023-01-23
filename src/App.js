
import { Provider } from 'react-redux';
import './App.css';
import Todos from './Components/TodosApp/Todos';
import state from './Components/TodosStore/TodosStore'
function App() {
  return (
    <div className="App">
      <Provider store={state}>
        <Todos></Todos>
      </Provider>

    </div>
  );
}

export default App;
