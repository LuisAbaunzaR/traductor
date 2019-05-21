import React, { Component } from 'react'
import Header from './header'
import Info from './info'

import Esp from './Esp.json'
import Eng from './Eng.json'

const dataEsp = Esp
const dataEng = Eng

export default  class Home extends Component {

    state={
        idioma:"Esp",
        data:dataEsp
    }
    handelChangeIdioma = (e) => {
        const idioma = e.target.value
        this.setState({
            idioma: idioma,
            data: idioma === 'Esp'? dataEsp : dataEng 
        })
        console.log(this.state.idioma)
        console.log(this.state.data)


    }
    
    render(){
        const data = dataEsp
        const data2 = dataEng
        
        
        
        return(
            <div>
                <Header handelChangeIdioma={this.handelChangeIdioma} idioma={this.state.idioma}/> 
                Prueba de Home
               {/* <p>{data}</p>  */}
               {/* {this.state.idioma === 'Esp'?  <Info data = {this.state.data}/>  :  <Info data = {this.state.data}/>} */}
              <Info data = {this.state.data}/>
              <Info data = {this.state.data}/>
              <Info data = {this.state.data}/>



               
            </div>
        )
    }
}

