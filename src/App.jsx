import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


const welcome = {
  greeting: 'Hey',
  title: 'React'
};

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectId: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectId: 1
  }
];

const App = () =>
(
  <div>
    <h1>{welcome.greeting} {welcome.title}</h1>
    <Search />
    <hr />

    <List />

  </div>
);



const List = () =>
(
  <ul>
    {list.map((item) => {
      return (<li key={item.objectId}>
        <a href={item.url}><h2>{item.title}</h2></a>
        <p>Author: {item.author}</p>
        <p>Comments: {item.num_comments}</p>
        <p>Points: {item.num_comments}</p>
      </li>)
    })}
  </ul>
);



const Search = () => {

  const handleChange = (event) => {
    // synthetic event
    console.log(event);
    // value of target
    console.log(event.target.value);
  }

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" name="search" id="search" onChange={handleChange} />

    </div>
  )
}



export default App
