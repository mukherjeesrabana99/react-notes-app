import React from 'react';
import './NoteArea.css';
class NoteArea extends React.Component{

	state = { clicked: false, savedtext:"" }


	handleClick=()=>{
		this.setState({clicked:!this.state.clicked, savedtext:this.props.text}, ()=>console.log(this.state.savedtext))
	}
	render(){

		
		return(
			<div className="container">
			<div className="noteArea">
			<div className="toolsdiv">
			<button id="save-btn" onClick={this.handleClick}><i className={this.state.clicked ? 'fa fa-edit' : 'fa fa-save'}></i></button>
			<button id="del-btn" onClick={()=>this.props.deleteNote(this.props.note)}><i className="fa fa-trash"></i></button>
			</div>
			<div className={this.state.clicked?"saved-text-area":"hidden"}>{this.state.savedtext}</div>
			<textarea className={this.state.clicked?"hidden":"textArea"} value={this.props.text} onChange={(e)=>{this.props.handleChange(e.target.value)}}></textarea>
			</div>
			</div>
			)
	}
}
export default NoteArea;