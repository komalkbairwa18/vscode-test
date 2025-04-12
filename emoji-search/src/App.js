import React, { PureComponent } from "react";
import Header from "./Header";
import "./App.css";
import SearchInput from "./SearchInput";
import EmojiResult from "./EmojiResult";
import filterEmoji from "./filterEmoji";
export default class App extends PureComponent{
  constructor(props){
    super(props);
    this.state={
      filteredEmoji:filterEmoji("",20)
    };
  }

  handleSearchChange=event=>{
    this.setState({
      filteredEmoji:filterEmoji(event.target.value,20)
    });
  };

  render(){
    return(
      <div className="background-screen">
        
        <Header/>
        <SearchInput  textChange={this.handleSearchChange}/>
        <EmojiResult emojiData={this.state.filteredEmoji}/>
      </div>
    );

  }

}
