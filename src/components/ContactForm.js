import React from 'react';

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: '', email: '' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //   debugger
    const {name, value} = event.target
    this.setState({...this.state, [name]: value})
  }

  handleSubmit (event) {
      event.preventDefault()
	const templateId = 'template_RlJimfoS';

    this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
    
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
        alert('Email successfully sent!')
        this.setState({feedback: ""})
        this.setState({name: ""})
        this.setState({email: ""})
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  render() {
	return (
  	<form style={{width: "70%"}} >
    	
    	<div className="contact-form">
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required placeholder="Enter Your Name" style={{width: "90%", height: "25px"}}/>
            <label>Email</label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} required placeholder="Enter your Email" style={{width: "90%", height: "25px"}}/>
            <label>Message</label>
            <textarea
                
                name="feedback"
                onChange={this.handleChange}
                placeholder="Enter Your Message Here"
                required
                value={this.state.feedback}
                style={{width: '90%', height: '150px'}}
            />
        </div>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
  	</form>
	)
    }
}
