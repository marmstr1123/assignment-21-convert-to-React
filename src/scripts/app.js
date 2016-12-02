const React = require('react')
const ReactDOM = require('react-dom')
const $ = require('jquery')
//import ColsMod from "apiCollMod.js";

console.log(React)



let HomeView = React.createClass({
  render: function(){

     var legislatorStuff = this.props.congressData.map(function(userObj, i){
        return <div className="col-sm-4">
              <div className="thumbnail">
              <div className="caption">
              <h4 >{userObj.first_name} {userObj.last_name}</h4>
              </div>
              </div>
              </div>
     })

     return (
        <div className="row">{legislatorStuff}</div>
     )

  }
})



$.getJSON('https:congress.api.sunlightfoundation.com/legislators?apikey=ea71fbe43def436ab78408444b414952').then(function(serverRes){
   // rendering + passing the serverResponse as props (userDataList)
   console.log(serverRes.results)
   ReactDOM.render(<HomeView congressData={serverRes.results} />, document.querySelector('#app-container') )
})
