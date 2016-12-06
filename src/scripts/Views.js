const react = require('react')
const reactDOM = require('react-dom')
const Backbone = require('backbone')
//const STORE = require('./store.js')
//const singleView = require('./selfclick.js')

class pageViews extends React.Component{

   constructor(){
      super();

   }

   render(){
      switch(this.props.viewType){

         case "home"
            return //< HomeView />
            break;

         case "single"
            return //< SelfView />
            break:

         default:
            return(
               <div>
               <h1>Try Again</h1>
               </div>
            )
      }
   }

}

module.exports= PageViews
