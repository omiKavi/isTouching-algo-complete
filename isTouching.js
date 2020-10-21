//function definition
function isTouching(object1, object2){ // catching argument/parameters from function call
    if(object1.x - object2.x < object1.width/2+object2.width/2 &&
      object2.x - object1.x < object1.width/2+object2.width/2 &&
      object1.y - object2.y < object1.height/2+object2.height/2 &&
      object2.y - object1.y < object1.height/2+object2.height/2
      ){
        //functions can return a value
        // true or false boolean datatype
        return true; 
      
    }else{
       return false;
    }
  }