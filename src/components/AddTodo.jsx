import React, {Component} from 'react';

class AddTodo extends Component {

    state = {
        title: ''
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }

    render() {
        return (
            <form style={{display: 'flex', justifyContent:'center', alignItems: 'center'}} onSubmit={this.handleSubmit}>
                <input type="text" name="title" placeholder="Add Todo..." value={this.state.title} onChange={this.handleInput} style={{width:'50%', padding:'5px', margin:'20px 5px'}} />
                <input className="btn" type="submit" value="Submit" style={{width:'5%'}}/>
            </form>
        )
    }
}

export default AddTodo;