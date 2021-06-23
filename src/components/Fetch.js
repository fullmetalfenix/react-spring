import React from 'react';
//import { useSpring, animated } from 'react-spring'
const {useState, useEffect} = React;



export function Fetch() {
    const [data, setData] = useState({title: 'placeholder'})
    useEffect(() => {
        //let result;
        async function fetchData() {
          let result = await fetch('https://jsonplaceholder.typicode.com/todos/5').then(res => res.json()).then(function(hello){return hello})
          setData(result)
        }
        fetchData();
        //setData(result)
      }, []); 



    return <div>{data.title}</div>
}  