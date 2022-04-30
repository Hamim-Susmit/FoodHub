import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Kacchi',
    description: 'Kacchi Mutton Biryani is a delicious rice dish where tender goat or lamb meat pieces are marinated with lots of fried onions, whole spices, fresh herbs and yoghurt.',
    price: 235.00,
  },
  {
    id: 'm2',
    name: 'Murgh Musallam Half',
    description: 'It consists of whole chicken marinated in a ginger-garlic paste, stuffed with boiled eggs and seasoned with spices like saffron, cinnamon, cloves, poppy seeds, cardamom and chilli.',
    price: 170.00,
  },
  {
    id: 'm3',
    name: 'Borhani',
    description: 'Borhani, is a traditional yogurt-like drink from Bangladesh. Borhani is made from sour doi, green chilli, mustard seeds, black salt, coriander and mint.',
    price: 30.00,
  },
  {
    id: 'm4',
    name: 'Falooda',
    description: 'A falooda is a Mughlai Indian version of a cold dessert made with noodles. It has origins in the Persian dish faloodeh, variants of which are found across West, Central, and South Asia.',
    price: 100.00,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
