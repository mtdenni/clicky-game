import React, { Component } from 'react';
import cats from './cards.json';
import Card from './components/Card'

class App extends Component {
  state = {
    cats,
    score: 0,
    clickedImages: [],
    lose: ""
  }

  resetCards = (id) => {
    let clickedImages = this.state.clickedImages;
    if(this.state.clickedImages.includes(id)){ this.setState({ clickedImages: [], score: 0, lose: "You lose. Try Again"}); }
    else{ 
      clickedImages.push(id)
      this.setState({ cats, clickedImages, score: clickedImages.length, lose: ""});
      for (let i = cats.length - 1; i > 0; i--) {
        let j, x;
        j = Math.floor(Math.random() * (i + 1));
        x = cats[i];
        cats[i] = cats[j];
        cats[j] = x;
      }
    }
  }

  render() {
    return (
    <span className="App">
      <header className="App-header">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand mr-auto" href="index.html">Clicky Game!</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="mx-auto collapse navbar-collapse" id="navbarText">
            <span className="mx-auto navbar-text">
              {this.state.lose}
            </span>
          </div>
          <span className="ml-auto collapse navbar-collapse" id="navbarText">
            <span className="text-light ml-auto navbar-text text-right">
              Score: {this.state.score}
            </span>
          </span>
        </nav>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Clicky Game!</h1>
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
          </div>
        </div>
      </header>
      <div className="container">
      {
        this.state.cats.map(cat =>  (
          <Card
            resetCards = { this.resetCards }
            id={ cat.id }
            key={ cat.id }
            image={ cat.image }
          />
        ))
      }
      </div>
    </span>
  );
  }
}
export default App;
