import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    background-color: black;
    font-family: 'Anton', sans-serif;
    display:flex;
    align-items: center;
    justify-content:space-around;
    height:100vh;
  }
`;

const Container = styled.div`
  background-color: #080705;
  width: 30vw;
  height: 50vh;
  border-radius: 20px;
  border: solid 3px #40434e;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const Name = styled.h1`
  color: #702632;
  text-shadow: 2px 2px 14px #912f40;
`;

const DisplayBox = styled.div`
  height: 15vh;
  width: 15vw;
  background-color: #080705;
  border-radius: 20px;
  border: solid 3px #40434e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Display = styled.h2`
  font-size: 6vw;
  color: #912f40;
  text-shadow: 2px 2px 14px #912f40;
`;

const ButtonsContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Button = styled.button`
  font-family: "Anton", sans-serif;
  background-color: #080705;
  width: 4vw;
  border: none;
  border-radius: 20px;
  color: #702632;
  text-shadow: 2px 2px 14px #912f40;
  border: solid 1px #40434e;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: 0.4s all;
  }
`;

export default class stopWatch extends React.Component {
  state = {
    number: 0
  };

  Start = () => {
    const intervalId = setInterval(() => {
      this.setState({
        number: this.state.number + 1
      });
    }, 1000);

    this.stop = () => {
      clearInterval(intervalId);
    };
  };

  Reset = () => {
    this.setState({
      number: (this.state.number = 0)
    });
  };

  componentDidMount() {
    document.title = this.state.number;
  }

  componentDidUpdate() {
    document.title = this.state.number;
  }

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Name>StopWatch</Name>
        <DisplayBox>
          <Display> {this.state.number} </Display>
        </DisplayBox>
        <ButtonsContainer>
          <Button onClick={this.Start}> Start </Button>
          <Button onClick={this.Reset}> Reset </Button>
          <Button onClick={this.stop}> Stop </Button>
        </ButtonsContainer>
      </Container>
    );
  }
}

// usamos função anônima quando queremos acessar uma lógica e construir uma função dentro de outra função
// color: #EF709D;
// box-shadow: inset 1em 1em #3772FF;`
// background-color: rgb(212, 234, 245);`
// font-family: 'Anton', sans-serif;`
// background-color: #70E4EF;
