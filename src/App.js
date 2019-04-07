import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Index from './Pages/IndexPage';
import { createStore } from 'redux';
import './App.css';
import rootReducer from './Components/Redux/Reducer'

const store = createStore(rootReducer);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

export default App;