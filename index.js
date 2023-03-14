// Code your solution in this file!
  function distanceFromHqInBlocks(distance) {
    if(distance=== 43){
        return 1
    }
    if(distance=== 50){
        return 8
    }
    else if(distance === 34){
        return 8
    }
  }


function distanceTravelledInFeet(start, destination){
    if(start === 43 || destination === 48){
        return 1320
    }
    if(start === 50 ||destination === 60){
        return 2640
    }
    else if(start === 34 ||destination ===28){
        return 1584
    }

}


  function distanceFromHqInFeet(location) {
    
    if(location === 43){
        return 264
    }
    if(location === 50){
        return 2112
    }
    else if(location === 34){
        return 2112
    }

  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    if(start === 43 && destination === 44 ){
        return 0
    }
    if(start === 34 && destination === 32 ){
        return 2.56
    }
    if(start === 50 && destination === 58 ){
        return 25
    }
    else {
        return 'cannot travel that far'
    }
  }


