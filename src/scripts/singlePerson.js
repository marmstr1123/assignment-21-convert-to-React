const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')

class SelfView extends React.Component{
   constructor(){
      super();
   }
   render(){
      return(
         <div>
         <h2>wiredUP!</h2>
         </div>
      )
   }

}

module.exports= SelfView
