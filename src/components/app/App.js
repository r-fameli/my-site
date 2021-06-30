import { Helmet } from 'react-helmet';
import '../../css/App.css';
import HomePage from '../pages/HomePage.js';

function App() {
  return (
    <div className="app">
      <Helmet>
        <title>Riki Fameli</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <HomePage />
    </div>
  );
}

export default App;
