import { Card, Col, Button } from 'antd';


function FoodBox({food,foodsList,setFoods}) {

    function handleDelete(){
        setFoods(foodsList.filter(function(eachFood){
            if (eachFood.name === food.name) return false
            else return true;
        }))
    }

  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories*food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={handleDelete}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;