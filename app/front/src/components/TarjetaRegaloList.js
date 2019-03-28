import React, {Component} from 'react'
import TarjetaRegalo  from './TarjetaRegalo'
import axios from 'axios'
class TarjetaRegaloList extends Component{
  constructor(props){
    super(props);
    this.state={
      pagina: 0,
      tarjetas:[]
    };
  }

  componentDidMount() {
        axios.get('http://localhost:3001/tarjetaRegalo')
            .then((response) => {
                var state = this.state;
                var tarjetas = response.data;
                state.tarjetas=tarjetas;
                state.pagina = 0;
                // pueden cambiar el tamaño de partion aca
                this.setState(state);
            });
    }
  render(){
    return(
      <div className="container-fuid d-flex justify-content-center">
        <div className='row'>
          {this.state.tarjetas.map( (tarj)=> <TarjetaRegalo key={tarj.id} data={tarj}/>)}
        </div>
      </div>
    )
  }
}
export default TarjetaRegaloList;
