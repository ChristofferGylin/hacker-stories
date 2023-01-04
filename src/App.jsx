import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


const welcome = {
  greeting: 'Hey',
  title: 'React'
};



const App = () => {

  const stories = [
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

  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>
      <Search />
      <hr />

      <List list={stories} />

    </div>
  );
}



const List = (props) =>
(
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectId} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <a href={props.item.url}><h2>{props.item.title}</h2></a>
    <p>Author: {props.item.author}</p>
    <p>Comments: {props.item.num_comments}</p>
    <p>Points: {props.item.num_comments}</p>
  </li>
);



const Search = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    // synthetic event
    console.log(event);
    // value of target
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }

  const handleBlur = (event) => {

    console.log(event);

  }

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" name="search" id="search" onChange={handleChange} onBlur={handleBlur} />
      <p>{searchTerm}</p>
    </div>
  )
}



export default App
