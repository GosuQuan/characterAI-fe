import React, { useEffect, useState,useRef} from 'react';
import './index.css'

const Home = () => {
    const [data, setData] = useState([])  
    const inputRef = useRef(null);
    const myFetch = async () => {
        const response = await fetch('http://127.0.0.1:8000/')
        const data = await response.json()
        setData(data)
        console.log(data)
    }
    const submitData = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/data',{
            method:'POST',
            headers: {
              'Content-Type': 'application/json', // 确保设置正确的内容类型
          },
            body:JSON.stringify({
                input:inputRef.current.value
            })  
        }).catch(err => console.log(err))
    }
    const handleClick = () => {
        console.log(inputRef.current.value) 
        submitData();
    }

    useEffect(()=>{
         myFetch().catch(err => console.log(err))
    },[])

    return (
        <div className="App">
          <header className="App-header">
            <h1 className="logo">Google</h1>
            <div className="search-container">
              <input
                ref={inputRef} // 通过 ref 访问 DOM 元素
                type="text"
                className="search-input"
                placeholder="搜索"
                
              />
              <button className="search-button"onClick={handleClick}>小米 我爱你</button>
              <button className="search-button">手气不错</button>
            </div>
          </header>
          <footer className="App-footer">
            <span>关于 Google | 广告 | 商务</span>
            <span>Google 提供：<a>English</a></span>
          </footer>
        </div>
      );
};




export default Home;
