import React from 'react';
import './App.css';

const initial_fruits = ["apple", "orange"];

const App = () => {

  const [fruits, setFruits] = React.useState(initial_fruits);

  const add_fruit = () => {
    var fruit = document.getElementById("fruit_name").value;
    
    setFruits([...fruits, fruit]);
    console.log({fruits});
  };

  const remove_fruit = (e) => {
    
    var li_fruit = e.target.innerText;
    var new_array = fruits.filter(fruit => fruit !== li_fruit);

    setFruits(new_array);
    console.log(new_array);
  };

  const listItems = fruits.map((fruit) =>
    <li onClick={remove_fruit} key={fruit}>{fruit}</li>
  );
  
  return (
      <>
        <div className="App">
        <input type="text" name='fruit_name' id='fruit_name'></input>
        <input onClick={add_fruit} type="button" name='send_fruit' value="Agregar"></input>
        <div>
          <ul>
            {listItems}
          </ul>
        </div>
      </div>
      </>
      
  );
}

export default App;
