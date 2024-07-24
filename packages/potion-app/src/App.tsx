import { BasicButton } from 'potion-ui'
import './App.css'
import 'potion-ui/dist/style.css';

function App() {
  return (
    <>
      <BasicButton label='Hello World' onClick={() => alert('Hello World')} />
    </>
  )
}

export default App
