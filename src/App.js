import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Img from './Aymen Obba.jpg'
import React, { Component } from 'react'

const T={listStyleType:'none'}
const text = "full stack developer (MERN) :\n -expert in MongoDB, Express, React and Node";
const Text1=text.split('\n').map(str => <li style={T}>{str}</li>)
const imgstyle={width:'4.5cm',height:'6.5cm',marginLeft:'5cm',marginTop:"1cm"}
const textstyle={fontWeight:500,fontSize:25,marginLeft:'5cm',color:'blue'}
const adressstyle={fontWeight:230,fontSize:20,marginLeft:'2cm'}
const border={border:'solid 2px rgb(200,160,221)'}
const button={position:'absolute', top:'12.1cm',left: '6cm',backgroundColor:'rgb(180,160,221)',width:'2cm',borderRadius:'4px',border:' solid 2px purple' }
 

class App extends Component {
  constructor(){
    super()
    this.state={
      fullName:"Aymen Obba",
      bio:'My good reasoning ,focus, attention to details adding to it a bit of perfectionism allowed me to finish my projects in time with good results In addition to that, I am serious, committed and can work under stress With an ability to adapt to new operations in a short period of time and to keep a steady progress in my work quality.',
      profession:Text1,
      image:Img,
      show:true,
      counter:0
    }
  }
  Show(){
    this.setState({
    show:!this.state.show })}
    componentDidMount(){
      setInterval(() => {this.setState({counter:this.state.counter+1})
        
      }, 1000);
    }
  render() {
    return (
    <>
      {this.state.show && <CardGroup>
      <Card >
        
        <img style={imgstyle} src={this.state.image} alt='erreur'/>
        <Card.Body >
        <p style={textstyle}>{this.state.fullName}</p>
        <p style={adressstyle}>{this.state.profession}</p>
        
        </Card.Body>
        <Card.Footer style={border}>
          <small className="text-muted">Last updated {this.state.counter} seconds ago</small>
        </Card.Footer>

      </Card>
      <Card style={border}>

        <Card.Body>
          <br></br><br></br><br></br>
          <h2 style={{color:'purple'}}>Bio</h2>
          <p>{this.state.bio}</p>
        </Card.Body>
      </Card >
      
    </CardGroup>
    }
    <button style={button} onClick={()=>this.Show()}>show</button>
    </>
    )
  }
}
export default App

