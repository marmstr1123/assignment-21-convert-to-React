let Backbone = require('Backbone')

const congressMod = Backbone.Model.extend({
   url: "",

   initialize:function(){

   }
})

const congressCollection = Backbone.Model.extend({
   model: congressMod,
   url: "",

   initialize:function(){
      this.url="https:congress.api.sunlightfoundation.com/legislators?apikey=ea71fbe43def436ab78408444b414952"
   }
})

module.exports={congressMod, congressCollection}
