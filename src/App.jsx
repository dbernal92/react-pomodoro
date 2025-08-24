import './App.css'
import Button from './components/ui/Button';
import Card from './components/ui/Card';

function App() {
  return (
  <>
    Pomodoro Timer
    <Card/>
    <Button onClick={() => alert("started")} label="Start Timer" />
    <Button onClick={() => alert("paused")} label="Pause" />
  </>
  );
}

export default App
