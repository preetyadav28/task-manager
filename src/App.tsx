import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskManager from './components/TaskManager';

const App = () => {
    return (
      <Provider store={store}>
        <div className="App">
          <TaskManager />
        </div>
      </Provider>
    );
};

export default App;
