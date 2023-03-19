// Code your solution in this file!


function distanceFromHqInBlocks(start){

    const hq = 42
    
    if (start > hq) {
        return (start - hq);
    }
    if (start < hq) {
        return (hq - start);
    }        
}

distanceFromHqInBlocks(50)

distanceFromHqInBlocks(34)

function distanceFromHqInFeet(start){

    const hq = 42

    if (start > hq) {
        return ((start - hq)*264);
    }
    if (start < hq) {
        return ((hq - start)*264);
    }        
}

distanceFromHqInFeet(43)

distanceFromHqInFeet(50)

distanceFromHqInFeet(34)

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return ((start - destination)*264);
    }
    if (start < destination) {
        return ((destination - start)*264);
    }
}

distanceTravelledInFeet(43, 48)

distanceTravelledInFeet(50, 60)

distanceTravelledInFeet(34, 28)

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); 
    const dist = distance - 400; 
  
    if (distance < 400) {
      return 0;
    }
    else if (distance > 400 && distance < 2000) {
      return dist * 0.02; 
    }
    else if (distance > 2000 && distance < 2500) {
      return 25; 
    }
    else {
      return "cannot travel that far"; 
    }
}
calculatesFarePrice(43, 44)

calculatesFarePrice(34, 32)

calculatesFarePrice(50, 58)

calculatesFarePrice(34, 24)