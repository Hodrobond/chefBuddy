const defaultState = {

}

const init = () => {
  return defaultState;
}

const RecipeList = (state = 0, action) => {
  let newState;
  if(state === 0){
    return init();
  }
  switch(action.type){
    default:
      newState = state;
      break;
  }
  return newState;
}
