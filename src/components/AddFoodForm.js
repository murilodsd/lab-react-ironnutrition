import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ foodsList, setFoods }) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFoods([...foodsList,form]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={form.name}
        name="name"
        type="text"
        onChange={handleChange}
      />

      <label>Image</label>
      <Input
        value={form.image}
        name="image"
        type="text"
        onChange={
          handleChange}
      />

      <label>Calories</label>
      <Input
        value={form.calories}
        name="calories"
        type="number"
        onChange={handleChange}
      />

      <label>Servings</label>
      <Input
        value={form.servings}
        name="servings"
        type="number"
        onChange={
          handleChange}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
