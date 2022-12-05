import React, { Component } from 'react'

export default class SearchInput extends Component {

    state = { entry: '' }

    onFormSubmit = (event) => { // Automatic binding for keyword 'this'
        event.preventDefault() // Search terms that were typed will still be visible in succeeding searches.
        this.props.onSearchSubmit(this.state.entry)
    }

    render() {
        return (
        <div className='ui segment'>
            <form onSubmit={this.onFormSubmit} className='ui form'>
                <div className='field'>
                    <div className='ui massive icon input'>
                        <input  type="text" 
                                placeholder='Search something...' 
                                onChange={(event) => {this.setState({entry: event.target.value})}}
                                value = {this.state.entry}
                        />
                        <i className='search icon'></i>
                    </div>
                </div> 
            </form>
        </div>
        )
    }
}
