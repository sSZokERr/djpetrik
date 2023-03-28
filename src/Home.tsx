import { Component } from 'react'
  import './App.css';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap/dist/js/bootstrap.bundle.js'
  import DJ from './images/dj.jpg'

export default class App extends Component{
  componentDidMount(){
    document.title = "Fooldal"
  }
render() {
  return <div className='body'>
            <div className='homePage'>
              <div className='text'>
                <h1>Üdvözöllek DJ Petrik weboldalán!</h1>
              </div>
                <h2>Válassz a fenti lehetőségek közül!</h2>
              </div>
              <div ><img className="img" src={ DJ } alt="DJ" /></div>
            </div>
}
}

