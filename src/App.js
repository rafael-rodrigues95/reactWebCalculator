import Input from './components/Input'
import Button from './components/Button'

import { Container, Content, Row, Column } from './styles';
import { useState } from 'react';
const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [newOperation, setNewOperation] = useState('');
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    console.log(newOperation)
    if(newOperation === '0'){
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
    }else{
      handleOnClear();
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
      setNewOperation('0');
    }
  };

  const handleSumNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleMinusNumber();
          break;
        case 'x':
          handleTimesNumber();
          break;
        case '/':
          handleDividedNumber();
          break
        default:
        break;
      }
      setNewOperation('1');
    }
  }

  const handleTimesNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('x')
    }else {
      const times = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(times))
      setOperation('')
    }
  }

  const handleDividedNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    }else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div))
      setOperation('')
    }
  }

  return (
    <Container>
      <Content>
      <Input value={currentNumber}/>
      <Row>
        <Button label="x" onClick={handleTimesNumber}/>
        <Button label="/" onClick={handleDividedNumber}/>
        <Button label="C" onClick={handleOnClear}/>
        <Button label="X" onClick={() => handleAddNumber('')}/>
      </Row>
      <Row>
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button label="+" onClick={handleSumNumber}/>
      </Row>
      <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label="-" onClick={handleMinusNumber}/>
      </Row>
      <Row>
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label="=" onClick={handleEquals}/>
      </Row>

      </Content>
    </Container>
  );
}

export default App;
