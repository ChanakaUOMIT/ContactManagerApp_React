import React, { Component } from 'react'

class Test extends Component {
    state ={
        //test: 'test',
        title:'',
        body:''
    }

    componentDidMount(){
        console.log('ComonentDidMount...');
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            //.then(json => console.log(json))
            .then(data =>
                this.setState({
                    title:data.title,
                    body: data.body
                }));
    }

    // componentWillMount(){
    //     console.log('ComonentWillMount...');
    // }

    // componentDidUpdate(){
    //     console.log('componentDidUpdate...');
    // }

    // componentWillUpdate(){
    //     console.log('componentWillUpdate...');
    // }

    // componentWillReceiveProps(nextProps, nextState){
    //     console.log('componentWillReceiveProps');
    // }
    // static getDerivedStateFromProps(nextProps,
    //     prevState){
    //         return{
    //             test:'something'
    //         };
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     console.log('getSnapshotBeforeUpdate');
    // }

  render() {
      const { title, body }=this.state;

    return (
      <div>
          <h1>Test Component</h1>
          <h1>{title}</h1>
          <p>{body}</p>
      </div>
    )
  }
}

export default Test;
