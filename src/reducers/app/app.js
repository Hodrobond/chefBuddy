const init = () => {
  return 0;
}

const App = (state = 0, action) => {
  if(state === 0){
    return init();
  }
  return state;
}

export default App;
