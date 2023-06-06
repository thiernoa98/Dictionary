import { useEffect, useState } from 'react';
import './App.css';
import useAxios from './hooks/UseAxios';
import Definition from './components/Definition';

function App() {
  const [searchWord, setSearchWord] = useState('');
  const [word, setWord] = useState('');
  const [color, setColor] = useState('');

  const [setUrl, data, loading, setLoading, error] = useAxios();

  function handleSubmit(e) {
    e.preventDefault();
    setWord(searchWord)
    setUrl(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);

    setLoading(true);

  }

  //randomize bgcolor
  function randBgColor() {
    const randColor1 = Math.floor(Math.random()*16777215).toString(16)
    const randColor2 = Math.floor(Math.random()*16777215).toString(16)
    const randColor3 = Math.floor(Math.random()*16777215).toString(16)
    const randColor4 = Math.floor(Math.random()*16777215).toString(16)
    setColor(document.body.style.background = `linear-gradient(0.25turn, #${randColor1},#${randColor2},#${randColor3},#${randColor4})`);
  }

  //just shows just a the beging of the page, onload
  useEffect(()=>{
    setColor(document.body.style.background = "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)")
  }, [])
    
  return (
    <div className={`App ${color}`}>

      <button onClick={randBgColor} >Change Bg Color</button>

      <form onSubmit={(e)=> handleSubmit(e)}>
        <label><h1>Look up any word </h1></label>
         <input
          type='text'
          value={searchWord}
          onChange={(e)=> setSearchWord(e.target.value)}
        />
      </form>{!loading && data ? <h1>search complete</h1>:'' }

      <Definition word={word} data={data} loading={loading} error={error}/>
    </div>
  );
}

export default App;
