/*
'weight': '',
'calories':'',
'total fat': '',
'saturated fat': '',
'polyunsaturated fat': '',
'monounsaturated fat': '',
'cholesterol': '',
'sodium': '',
'potassium': '',
'total carbohydrates': '',
'dietary fiber': '',
'sugar': '',
'protein': '',
'vitamin a': '',
'vitamin c': '',
'vitamin d': '',
'vitamin b-6': '',
'vitamin b-12': '',
'calcium': '',
'iron': '',
'magnesium': ''

*/

const init = () => {
  let ingredients = [
    {
      'id': '1',
      'name': 'Chicken',
      'weight': '140g',
      'calories':'335',
      'total fat': '19g',
      'saturated fat': '5g',
      'polyunsaturated fat': '4.2g',
      'monounsaturated fat': '7g',
      'cholesterol': '123mg',
      'sodium': '115mg',
      'potassium': '312mg',
      'total carbohydrates': '0g',
      'dietary fiber': '0g',
      'sugar': '0g',
      'protein': '38g',
      'vitamin a': '4%',
      'vitamin c': '0%',
      'vitamin d': '0%',
      'vitamin b-6': '30%',
      'vitamin b-12': '6%',
      'calcium': '2%',
      'iron': '9%',
      'magnesium': '8%'
    },
    {
      'id': '2',
      'name': 'Carrot',
      'weight': '61g',
      'calories':'25',
      'total fat': '0.1g',
      'saturated fat': '0g',
      'polyunsaturated fat': '0.1g',
      'monounsaturated fat': '0g',
      'cholesterol': '0mg',
      'sodium': '42mg',
      'potassium': '195mg',
      'total carbohydrates': '6g',
      'dietary fiber': '1.7g',
      'sugar': '2.9g',
      'protein': '0.6g',
      'vitamin a': '203%',
      'vitamin c': '6%',
      'vitamin d': '0%',
      'vitamin b-6': '5%',
      'vitamin b-12': '0%',
      'calcium': '2%',
      'iron': '1%',
      'magnesium': '1%'
    }
  ];

  ingredients.byId = {};
  let len = ingredients.length;
  for(let index = 0; index < len; index++){
    let ingredient = ingredients[index];
    ingredients.byId[ingredient.id] = ingredient;
  }
  return ingredients;
}

const Ingredient = (state = 0, action) => {
  if(state === 0){
    return init();
  }
  return state;
}

export default Ingredient;
