import React, {Component} from 'react';
import Pagination from './Pagination';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        const exampleItems = [...Array(150).keys()].map(i => ({id: (i + 1), name: 'Item ' + (i + 1)}));
        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };
    }

    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({pageOfItems: pageOfItems});
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="text-center">
                        <h1>React - Pagination Example with logic like Google</h1>
                        {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{item.name}</div>
                        )}
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} numPerPage={50}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
