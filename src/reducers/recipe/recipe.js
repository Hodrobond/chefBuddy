const init = () => {
  let recipes = [
    {
      'id': '1',
      'name': 'Chicken Parmesan',
      'preparationTime':{
        'minutes': 10,
        'hours': 0
      },
      'cookingTime': {
        'minutes': 15,
        'hours': 0
      },
      'ingredients': [{
          'name': 'chicken',
          'quantity': '1',
          'measurement': 'lb'
        },
        {
          'name': 'parmesan',
          'quantity': '1',
          'measurement': 'cup'
        }],
      'instructions': {
        'preparation':[
          'tenderize chicken',
          'get parmesan cheese'
        ],
        'cooking':[
          'put chicken in pan for 10 minutes',
          'add parmesan and cook for 5 more minutes'
        ]
      }
    },
    {
      'id': '2',
      'name': 'Carrot Soup',
      'preparationTime':{
        'minutes': 10,
        'hours': 0
      },
      'cookingTime': {
        'minutes': 15,
        'hours': 0
      },
      'ingredients': [{
          'name': 'carrot',
          'quantity': '1',
          'measurement': 'lb'
        },
        {
          'name': 'water',
          'quantity': '1',
          'measurement': 'cup'
        }],
        'instructions': {
          'preparation':[
            'tenderize carrot',
            'get water from well'
          ],
          'cooking':[
            'put carrot in water and simmer for 14 minutes',
            'add one more carrot, simmer for 1 minute'
          ]
        }
    }
  ];
  recipes.byId = {};
  let len = recipes.length;
  for(let index = 0; index < len; index++){
    let recipe = recipes[index];
    recipes.byId[recipe.id] = recipe;
  }
  return recipes;
}

const Recipe = (state = 0, action) => {
  if(state === 0){
    return init();
  }
  return state;
}

export default Recipe;
