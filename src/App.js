import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    // use arrow function to create a scope so that "this" refers to App object. 
    //Otherwise it points to event,which does not have this.state 
    onSearchChange = (event)=>{
        this.setState({searchfield:event.target.value})
        
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        console.log(filteredRobots);
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        );
    };
};




export default App;