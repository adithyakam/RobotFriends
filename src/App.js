import React,{Component} from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';


class  App extends Component{

constructor(){
    super()
    this.state={
        robots:[],
        searchfield:''
    }
}

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots:users}));
}

onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value})
    console.log(event.target.value);

}

    render(){
        const filterRobots=this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    
        })
        if(this.state.robots.length ===0){
            return <h1 className='tc'>Loding</h1>
        }
        else{
        return(
         <div className='tc'>
            <h1 className='f2'>RobotFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <CardList robots={filterRobots}/>
        </div>
         );
        }
    }
}
export default App;