import './App.css'
import {Camera, Heart} from 'lucide-react'
import { Icon } from 'lucide-react'
import { arrowsUpDownSquare } from '@lucide/lab';

function App() {
  return (
    <>
    <Camera color='aqua' size={200} strokeWidth={2}/>
    <Heart color='red' size={400} strokeWidth={2}/>
    <Icon iconNode={arrowsUpDownSquare} color='greenyellow' size={100} />
    </>
  )
}

export default App
