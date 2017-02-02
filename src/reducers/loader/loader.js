const defaultState = {
  loading: false
}

const init = () => {
  return defaultState;
}

const Loader = (state = 0, action) => {
  let newState;
  if(state === 0){
    return init();
  }
  switch(action.type){
    case 'START_LOADING':
      newState = {
        ...state,
        loading: true
      }
      break;
    case 'FINISH_LOADING':
      newState = {
        ...state,
        loading: false
      }
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}

export default Loader;
