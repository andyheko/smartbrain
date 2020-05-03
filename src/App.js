import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

const particleOptions = {
  "particles": {
    "number": {
      "value": 200
    },
    "size": {
      "value": 3
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event);
  }
  render(){
    return (
      <div className="App">
        <Particles className='particles'
          params={particleOptions}
            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange}/>
        {/*
        <FaceRecognition />*/}

      </div>
    );
  }
}

export default App;
