
import './App.css'
import axios from 'axios';

function App() {

  async function getAnswer() {
  const res = await axios.post('http://localhost:4000/', {
  answer: 42
  });
  }

  getAnswer();


  return (
    <div className="App">

    </div>
)
}

export default App
