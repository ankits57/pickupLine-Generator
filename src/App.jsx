import { useState,useEffect } from 'react'
import './App.css'
import Line from './components/Line'
import Options from './components/Options'
import Footer from './components/Footer';



const url = 'https://rizzapi.vercel.app';


function App() {
    const [cat, setCat] = useState('random');
    const [line, setLine] = useState([]);

    useEffect(()=>{
      generate(cat);
    }, [cat, setCat]);
    
    const generate = async(cat) => {
      const response = await fetch(`${url}/${cat}`);
      const data = await response.json();
      setLine(data);
    }

    const newData=()=>{
      generate(cat);
    }
  return (
    <>
      <div className="min-h-screen justify-center bg-romantic-gradient">
        <h1 className='text-5xl text-center font-bold p-4 lg:p-8 lg:text-6xl'><span className='font-sans font-extrabold italic'>Pickup Line</span> Generator</h1>
        <Line line = {line}/>
        <Options newData = {newData} setCat = {setCat}/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
