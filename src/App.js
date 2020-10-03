import React, {useEffect} from 'react';
import './App.css';
import Nav from "./Nav";
import { blogsState } from "./Atoms"
import { useSetRecoilState} from "recoil"
import MainPage from './containers/MainPage';

function App () {
  
  const setBlogs = useSetRecoilState(blogsState)
  

  useEffect(()=>{
   
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alexduterte")
    .then(resp => resp.json())
    .then(data => setBlogs(data.items))
    
  }, [setBlogs])

  
  return (
    
    <div className="App">
      <Nav />
      <div>
        
            <MainPage />
         
      </div>
    </div>
    
  );
  
}

export default App
