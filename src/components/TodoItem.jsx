import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none' // if true, cross out the item
        }
    }

    // since all the info we need is in App.jsx, we need to climb the ladder, which is why we don't define markComplete() here. Instead, we raise the event.

    render() {

        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} style={{marginRight: '10px'}} />
                    {title}
                    <button style={{background:'#ff0000', color:'#fff', border:'none', borderRadius:'30%', padding:'5px 10px', cursor:'pointer', float:'right'}} onClick={this.props.deleteTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }


    // TodoItem.propTypes = {
    //   todo: PropTypes.object.isRequired
    // }


}

export default TodoItem;
