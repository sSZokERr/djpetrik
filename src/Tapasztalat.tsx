import { Component } from 'react'
  import './App.css';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap/dist/js/bootstrap.bundle.js'
  import Petrik from './images/petrik.jpg'

export default class Tapasztalat extends Component{
  componentDidMount(){
    document.title = "Tapasztalat"
  }
render() {
  return <div className='body'>
            <div className='homePage'>
              <div className='text'>
                <img className='petrikIMG' src={ Petrik } alt="Petrik" />
                <h1>Pro-bono bulik</h1>
                <ul>
                    <li>Csibeavató, 2021. 08. 31.</li>
                    <li>Karácsonyi bál, 2021. 12. 22.</li>
                    <li>Farsangi mulatság, 2022. 02. 20.</li>
                </ul>
             </div>
             <div className='text'>
             <h1>Professzionális bulik</h1>
                <ul>
                    <li>Tanárkarácsony, 2021. 12. 20.</li>
                    <li>Ballagás, 2022. 04. 30.</li>
                </ul>
             </div>
            </div>
            </div>
}
}