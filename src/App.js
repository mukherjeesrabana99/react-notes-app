import React from 'react';
import NoteArea from './NoteArea';
import './App.css';

class App extends React.Component{
  state={notes:[], value:""}
  handleChange=(text)=>{
    this.setState({value:text})
  }
  addNote=()=>{
    console.log("clicked")
    this.setState({notes:[...this.state.notes, this.state.value], value:""},()=>console.log(this.state.notes))
    console.log("notes created")
  }
  deleteNote=(noteToDelete)=>{
    let filteredNotes=this.state.notes.filter(note=>(note!==noteToDelete))
    this.setState({notes:filteredNotes}, ()=>console.log(this.state.notes))
  }
  render(){
    return(
       <div className="App">
       <button id="add-btn" clasName="btn" onClick={this.addNote}><i className="fa fa-plus"></i></button>
       <div className="container">
       {this.state.notes.map(note=>(
        <div>
        <NoteArea note={note}  text={this.state.value} handleChange={this.handleChange} deleteNote={this.deleteNote}/>
        </div>
        ))}

       </div>

      
      </div>
      )
  }
}

export default App;
