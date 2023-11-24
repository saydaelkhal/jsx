import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image.jsx';
import téléchargement from './téléchargement.png'






function App() {
  //declaring name
  const firstName="Saida";
  return (
    <div className="App">

    <Card className="text-center">
      <Card.Header style={{backgroundColor:'#faab3e',color:'#FFFFFF'}}><Name/></Card.Header>
      <Card.Body>
        <Card.Title><Image/></Card.Title>
        <Card.Text style={{color:'#006400'}}>
          <Description/>
        </Card.Text>
        <Button variant="warning" >Buy Now</Button>
      </Card.Body>
      <Card.Footer className style={{color:'#B21807'}}><Price/></Card.Footer>
    </Card>
    {firstName ?(
      <div className='condition'>

        <p style={{backgroundColor:'#FFFFFF', borderRadius:'7px'}}> Hello {firstName} !</p>
        <img src={téléchargement} alt="chef" style={{borderRadius:'100px',width:'100px', marginBottom:'100px'}}/>
        </div>
    ):(
    <p>Hello , there!</p>
    )}
    
    </div>
  );
}

export default App;
