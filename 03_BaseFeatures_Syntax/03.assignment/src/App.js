import React, { Component } from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import './App.css';

class App extends Component {
  state = {
    memo: [
      {name: "메모 1", memo: "내용", num:0},
      {name: "메모 2", memo: "내용", num:1},
      {name: "메모 3", memo: "내용", num:2},
    ],
    selectedMemo : 0,
  }

  memoSelected(num){
    // console.log(num);
    this.setState({
      selectedMemo : num ,
    })


  }

  memoChanged(event){
    switch (this.state.selectedMemo) {
      case (0):
        console.log(this.state.selectedMemo);
        console.log(event);
        this.setState({
          memo: [
            {name: "메모 1", memo: event.target.value, num:0},
            {name: "메모 2", memo: "내용", num:1},
            {name: "메모 3", memo: "내용", num:2},
          ],
        })
        break;
      case (1):
        console.log(this.state.selectedMemo);
        this.setState ({
          memo: [
            {name: "메모 1", memo: "내용", num:0},
            {name: "메모 2", memo: event.target.value, num:1},
            {name: "메모 3", memo: "내용", num:2},
          ],
        })
        break;
      case (2):
        console.log(this.state.selectedMemo);
        this.setState ({
          memo: [
            {name: "메모 1", memo: "내용", num:0},
            {name: "메모 2", memo: "내용", num:1},
            {name: "메모 3", memo: event.target.value, num:2},
          ],
        })
        break;
    }
  }

  render(){
    const styleMemoWrapper = {
      display: "flex",
      flexDirection: "column",
      alignItems:"center",

    }

    return (
      <div className="App">
        <UserInput
          change={this.memoChanged.bind(this)}/>
        <div className="memoWrapper" style={styleMemoWrapper}>
          <UserOutput 
            name={this.state.memo[0].name}
            memo={this.state.memo[0].memo}
            click={this.memoSelected.bind(this, this.state.memo[0].num)}/>
          <UserOutput 
            name={this.state.memo[1].name}
            memo={this.state.memo[1].memo}
            click={this.memoSelected.bind(this, this.state.memo[1].num)}/>
          <UserOutput 
            name={this.state.memo[2].name}
            memo={this.state.memo[2].memo}
            click={this.memoSelected.bind(this, this.state.memo[2].num)}/>
        </div>
      </div>
    );
  }
}

export default App;
