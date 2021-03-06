import React from 'react';
import ReactDOM from 'react-dom';
//import Request                  from 'superagent';
//import _                        from 'lodash';


var $ = require ('jquery')
var App = React.createClass({
	
    //setting up initial state
    getInitialState:function(){
        return{
            data:[]
        };
    },
	
	
  
  
  
    componentWillMount(){
        this.getDataFromServer('http://localhost:3000/retrieve')
    },
    //showResult Method
        showResult: function(response) {

            this.setState({
                data: response
            });
    },
    //making ajax call to get data from server
    getDataFromServer:function(URL){
        $.ajax({
            type:"GET",
            dataType:"json",
            url:URL,
            success: function(response) {
                this.showResult(response);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render:function(){
        return(
            <div>
                <Result result={this.state.data}/>
            </div>
        );
    }
});
var Result = React.createClass({
    render:function(){
        var result = this.props.result.map(function(result,index){
            return <ResultItem key={index} user={ result } />
            });
        return(
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="col-md-4" >TimeStamp</th>
                                <th >Tank No.</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});
var ResultItem = React.createClass({
    render:function(){
        var tData = this.props.user;
        return(
            <tr>
                <td>{tData.timestamp}</td>
                <td>{tData.name}</td>
                <td>{tData.status}</td>
            </tr>
        );
    }
});
export default App;
