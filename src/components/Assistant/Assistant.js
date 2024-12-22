import React, { useState,useEffect } from "react";
import axios from "axios";
import "./Assistant.css";
// import NewsItem from "../NewsItem/NewsItem";
import ReactMarkdown from 'react-markdown';
import CloseIcon from '@mui/icons-material/Close';



export default function Assistant({query,updateAssistant}) {

  const [response, setResponse] = useState("");
  useEffect(() => {
    if (query) {
      handleQuery(query);
    }
  }, [query]);

 

  async function handleQuery(query){
   
    const  apiResponse = await axios({
        url:"  https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCXwni8tNS_YKgmFvcrflnbEKv7-Vg1BLs",
  
      method:"post",
      data:{
        contents: [
          {
            parts: [
              {
                text: query
              }
            ]
          }
        ]
      } 
    });
    setResponse(apiResponse['data']['candidates'][0]['content']['parts'][0]['text'])
  }

  return (
    <div className="assistant-sidebar">
      <div className="top-bar d-flex justify-content-between">
      <h3 className="title">Summary</h3>
      <button className="close-assistant-btn "onClick={()=>updateAssistant(false)}><CloseIcon sx= {{fontSize:25}} /></button>
      </div>
     

      {/* <textarea
        // placeholder="Ask a question..."
        // value={query}
        // onChange={(e) => setQuery(e.target.value)}
        updateQuery={updateQuery}
      ></textarea> */}
    
      <div className="assistant-response"> <ReactMarkdown>{response}</ReactMarkdown></div>

      
    
    </div>
  );
}
