import React ,{useState} from 'react';
import {Text, View, TouchableOpacity, Image,StyleSheet} from 'react-native';


import DiceOne from './assests/dice1.png'
import DiceTwo from './assests/dice2.png'
import DiceThree from './assests/dice3.png'
import DiceFour from './assests/dice4.png'
import DiceFive from './assests/dice5.png'
import DiceSix from './assests/dice6.png'

const App = () => {

  const [dice, setDice] = useState(DiceOne)
  const [diceTwo, setDiceTwo] = useState(DiceTwo)

  const changeDice = () =>{
    let randomDice = Math.floor(Math.random() * 7);

    switch (randomDice) {
      case 1: 
      setDice(DiceOne)
        break;
        case 2: 
      setDice(DiceTwo)
        break;
        case 3: 
      setDice(DiceThree)
        break;
        case 4: 
        setDice(DiceFour)
          break;
          case 5: 
      setDice(DiceFive)
        break;
        case 6: 
      setDice(DiceSix)
        break;
      default:
        setDice(DiceOne)
        break;
    }
  };

  const changeDiceTwo = () =>{
    let randomDiceTwo = Math.floor(Math.random() * 7);

    switch (randomDiceTwo) {
      case 1: 
      setDiceTwo(DiceOne)
        break;
        case 2: 
      setDiceTwo(DiceTwo)
        break;
        case 3: 
      setDiceTwo(DiceThree)
        break;
        case 4: 
        setDiceTwo(DiceFour)
          break;
          case 5: 
      setDiceTwo(DiceFive)
        break;
        case 6: 
      setDiceTwo(DiceSix)
        break;
      default:
        setDiceTwo(DiceOne)
        break;
    }
  };

  
  return (
    <>
      <View style={styles.container}>
      <TouchableOpacity onPress={changeDice}>
        
        <Image source={dice}/>
          {/* <Text> Click Me </Text> */}
        </TouchableOpacity>
        
        <TouchableOpacity onPress={changeDiceTwo}>
        
        <Image source={diceTwo}/>
          {/* <Text> Click Me </Text> */}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  image:{

  }
})

export default App;
