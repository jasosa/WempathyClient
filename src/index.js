import React from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import './index.css';
 
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {date:new Date(), counter:0};
    }

    render(){
        return(
          <div>
          <h1>Hello, world!</h1>
          <h1>Counter: {this.state.counter}</h1>
          <FormattedDate date={this.state.date}/>
        </div>
        )
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState((prevState) => ({
          date: new Date(),
          counter: prevState.counter+1
        }));
      }
}

class FormattedDate extends React.Component {
    render() {
      return <h2>It is {this.props.date.toLocaleTimeString()}.</h2>;
    }
  }


const columns = [{
    dataField: 'id',
    text: 'Product ID'
  }, {
    dataField: 'name',
    text: 'Product Name'
  }, {
    dataField: 'price',
    text: 'Product Price'
  }];

  var products = [{
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
    name: "Product2",
    price: 80
}];

  class Table extends React.Component {
    render() {
      return (
        <BootstrapTable data={products} striped hover>
          <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }

  function App() {
    return (
      <div>
        <Clock />
        <Table />        
      </div>
    );
  }
  
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    );
  

  