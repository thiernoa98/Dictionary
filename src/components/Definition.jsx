import React from 'react'
import {CircularProgressbar} from 'react-circular-progressbar';

function Definition({word,loading, data,error}) {
    // console.log(data);

    if (!word) {
        return <CircularProgressbar></CircularProgressbar>
    }  
    
    if (loading && !data) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Sorry! No Data was found for {word}</h1>
    }

  return (
    <div>
        <h1>{data[0].word}</h1>
        <div>
            {data[0].phonetics.map((text, index)=>(
                <span key={index}>{text.text}</span>
            ))}
        </div>

        <div>
            {data[0].meanings.map((meaning, index)=>(
                // console.log(meaning);
                <div key={index}>
                    <h2> {meaning.partOfSpeech}</h2>

                    <br/>
                    {meaning.definitions.map((def, index)=>(
                        <ul key={index}>
                           definition: <li>{def.definition}</li>
                        </ul>
                    ))}
                </div>
            ))}
        </div>

        <div>
            {data[0].sourceUrls.map((source, index)=>(
                <span key={index}>
                    source: <a href={source}>{source}</a>
                </span>
            ))}
        </div>
    </div>
  )
}

export default Definition;
