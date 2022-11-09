import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFoodForm from './components/AddFoodForm';
import { Row, Divider, Button } from 'antd';
import {useState} from 'react';
import Search from './components/Search';

function App() {
  const [foodsList,setFoods] = useState(foods);
  const [searchBar,setSearchBar] = useState("");
  return (
    <div className="App">
      <AddFoodForm foodsList={foodsList} setFoods={setFoods}/>

      <Button> Hide Form / Add New Food </Button>

      <Search searchBar={searchBar} setSearchBar={setSearchBar}/>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foodsList.filter(function(food){
        if(searchBar === '') {return true;}
        
        if(food.name.indexOf(searchBar)>=0) 
        {return true;}
        else return false;
    }).map(function (food) {
          return (
            <FoodBox foodsList={foodsList} setFoods={setFoods}
              food={{
                name: food.name,
                calories: food.calories,
                image: `${food.image}`,
                servings: food.servings,
              }}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
