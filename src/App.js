import NewsPage from './pages/NewsPage';
import { Route } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <Route path="/:category?" component={NewsPage} />
  );
}

export default App;
