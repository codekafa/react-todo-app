import React, { Component } from 'react'
import './todolist.css'
class TodoList extends Component {

    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form>
                        <input
                            placeholder="Task"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button type="button" onClick={this.props.addItem}> Add Task </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default TodoList