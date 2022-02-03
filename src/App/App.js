import { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import { createApi } from 'unsplash-js';
import apiKeys from '../helpers/apiKeys.json';

import './App.scss';

const unsplash = createApi({
  accessKey: apiKeys.apiKeys.accessKey
});

export class App extends Component {
  state = {
    photos : {},
  }

  getAllPhotos = () => {
    unsplash.photos.getRandom(
    ).then(res => {
      this.setState({
        photos: res
      })
    }).catch(err => console.error('uh-oh, all photos', err));
  }

  componentDidMount() {
    this.getAllPhotos();
  }

  render() {
    const {photos} = this.state;
    return <div className="App">
    <header>
      <Navbar/>
    </header>
    <main>
      <h1>Hello, World</h1>
      <Button variant="outline-primary">Primary</Button>
      {console.log(photos.response.urls.raw)}
    </main>
  </div>;
  }
}

export default App;
