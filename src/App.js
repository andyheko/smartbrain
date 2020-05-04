import React, {Component} from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';

const app = new Clarifai.App(
  {apiKey: 'd150b398f3bd4e6ca4c25cffa039e9f5'}
);

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
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict(
        Clarifai.COLOR_MODEL,
        "https://samples.clarifai.com/face-det.jpg")
      .then(
      function(response) {
        // do something with response
        console.log(response)
      },
      function(err) {
        // there was an error
      }
    );
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
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition />

      </div>
    );
  }
}

export default App;
