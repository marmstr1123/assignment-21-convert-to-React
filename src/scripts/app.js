const React = require('react')
const ReactDOM = require('react-dom')
const $ = require('jquery')
//import ColsMod from "apiCollMod.js";
const {congressMod, congressCollection} = require('./apiCollMod.js')

console.log(React)


console.log(congressCollection)

let HomeView = React.createClass({
  render: function(){

     let legislatorStuff = this.props.congressData.map(function(userObj, i){
        console.log(userObj.first_name)
        return < PersonsOfCongress congressData={userObj} key={i} />
     })



     return (
        <div className="row">
        <div className="head">
        <h2> our elected robots of congress </h2>
        </div>

        {legislatorStuff}
        </div>
     )

  }
})

class PersonsOfCongress extends React.Component{
   constructor () {
      super();

   }

   render(){
      let repData = this.props.congressData
      console.log(repData)
      return(
         <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
               <img src={`https://robohash.org/${repData.first_name}`}/>
               <div className="caption">
               <h4>{repData.title}. {repData.first_name} {repData.last_name} - {repData.chamber}: {repData.party}</h4>
               <p><a href="#" className="btn btn-default" role="button">Details</a></p>
               </div>
            </div>
         </div>
      )
   }
}



$.getJSON('https:congress.api.sunlightfoundation.com/legislators?apikey=ea71fbe43def436ab78408444b414952').then(function(serverRes){
   // rendering + passing the serverResponse as props (userDataList)
   console.log(serverRes.results)
   ReactDOM.render(<HomeView congressData={serverRes.results} />, document.querySelector('#app-container') )
})
