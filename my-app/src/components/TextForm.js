import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
         let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLowClick=()=>{
         let newText=text.toLowerCase();
        setText(newText)
    }

    const handleClearClick=()=>{
        alert('Are you sure')
         let newText=" ";
        setText(newText)
    }
    const handleSentenceClick=()=>{
      let newText= text.split(" ");
      let len=newText.length;
     for(let i=0;i<len;i++){
       console.log(newText[i][0].toUpperCase());
     }
    }
    const handleCopyText=()=>{
        let text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange=(event)=>{
         setText(event.target.value);
    }


    const [text, setText] = useState('Enter text here');
     //   setText("new text");
  return (
    <>
    <div>
    <h1>
        {props.heading}
    </h1>
    <div className="mb-3">
    <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="8" value={text}></textarea>
    </div>
    <button className='btn btn-primary mx-1' onClick={handleUpClick}> Uppercase</button>  
    <button className='btn btn-primary mx-1' onClick={handleLowClick}> Lowercase</button>
    <button className='btn btn-primary mx-1' onClick={handleSentenceClick}> Sentence Case</button>   
    <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
    <button className='btn btn-primary mx-1' onClick={handleCopyText}>Copy Text</button>
    </div>
    <div  className='container my-3'>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes to read</p>
        <div>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </div>
    </>
    
  )
}
