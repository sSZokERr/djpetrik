import { Component } from 'react'
  import './App.css';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap/dist/js/bootstrap.bundle.js'

interface State{
    name: string;
    date: string;
    desc: string;
}
export default class Idopont extends Component<{}, State>{
  componentDidMount(){
    document.title = "Időpontfoglalás"
  }
  constructor(props: {}){
    super(props);

    this.state = {
      name: '',
      date: '',
      desc: ''
    }
}

render() {
  return <div className='body'>
            <div className='homePage'>
            <h1>Időpontfoglalás</h1>
              <div className='idopont'>
                <form>
                    <label htmlFor="name">Név:</label><input type="text" name='name' required id='nameInput' onChange={e => this.setState({ name: e.currentTarget.value })}/><br />
                    <label htmlFor="date">Rendezvény dátuma:</label><input type="date" name='date' required id='date' onChange={e => this.setState({ date: e.currentTarget.value })}/><br />
                    <label htmlFor="description">Leírás:</label><textarea name="description" id="description" required onChange={e => this.setState({ desc: e.currentTarget.value })}></textarea><br />
                    <button type='submit' onClick={()=>{
                        if(this.state.name != '' && this.state.date != '' && this.state.desc != ''){
                            window.alert("Köszönjük a megkeresését")
                        }
                        
                        }}>Elküld</button>
                    </form>
            </div>
            
            </div>
            </div>
}
}

