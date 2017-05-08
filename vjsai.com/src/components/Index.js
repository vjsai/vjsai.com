/**
 * Created by vijay on 20/3/17.
 */
import React,{Component} from 'react';
import {COMMANDS} from '../constants/commands';

class Index extends  Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount(){
    this.term.focus();
  }

  componentDidUpdate() {
    const el = this.node;
    const container = document.getElementById("main");
    container.scrollTop = el.scrollHeight;
  }

  render(){
    const {history,prompt,addHistory,commandDispatch} =  this.props;
    const output = history.map((op,i)=>{
      return <p key={i}>{op}</p>
    });
    return (
      <div className='input-area' ref={(node) => { this.node = node; }}>
        {output}
        <p>
          <span className="prompt">{prompt}</span>
          <input type="text" onKeyPress={(evt)=>{
              if(evt.key === "Enter"){
                const input_text = evt.target.value;
                const input_value = input_text.split(" ");
                const input = input_value[0];
                const arg = input_value[1];
                const command=COMMANDS[input];
                addHistory(prompt +" "+ input);
                if(command){
                  commandDispatch(command,arg)
                }else{
                  addHistory("sh: command not found: " + input);
                }
                evt.target.value = "";
              }
          }} ref={(input) => { this.term = input; }} />
        </p>
      </div>
    )
  }
}

export default Index;

