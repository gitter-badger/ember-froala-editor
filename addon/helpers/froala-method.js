import Ember from 'ember';


export function froalaMethod( helperParams, helperHash ) {

  // Froala Editor method name should be the first param
  const methodName = helperParams.shift();


  // Create a closure to pass back as the "action" to be triggered
  return function froalaMethodClosure( event, component ){


    // The helper hash can be used to "replace" the param
    // values with params received from the event...
    for (let propName in helperHash) {


      // Determine the positions within each params arrays
      // which should be used for replacing. parseInt() in
      // case the value is a string integer, ex: "2".
      let helperPos = helperParams.indexOf( propName );
      let eventPos  = parseInt( helperHash[ propName ] );


      // If the parameter "name" was found in the helperParams,
      // and the relative arguments contains something at that position,
      // then go ahead and replace the param value...
      if ( helperPos !== -1 && arguments.length >= eventPos ) {
        helperParams[ helperPos ] = arguments[ eventPos - 1 ];
      }


    } // for ()


    // Trigger the Froala Editor method via the Ember Component action
    component.send( 'method', methodName, ...helperParams );


  }; // froalaMethodClosure()
} // froalaMethod()


export default Ember.Helper.helper( froalaMethod );
