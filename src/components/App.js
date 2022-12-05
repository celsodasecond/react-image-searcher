import React, { Component } from 'react'
import axios from 'axios'
import SearchInput  from './SearchInput'
import ImageList from './ImageList'

export default class App extends Component {

    state = { images: [] }

    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=31844586-cc97d01f0eb3a94b2a8c20df1&q=${entry}&image_type=photo&pretty=true`) // ES 2015 backticks
        this.setState({images: response.data.hits})
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '30px' }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}
