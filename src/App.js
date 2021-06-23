import './App.css';
import {First} from './components/First.js';
import {LetterAnimation} from './components/LetterAnimation.js';
import {Fetch} from './components/Fetch'
function App() {
  return (
    <div className="App">
      <First />
      <LetterAnimation />
      <Fetch />
    </div>
  );
}

export default App;
