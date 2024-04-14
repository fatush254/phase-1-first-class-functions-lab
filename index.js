// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Define returnLastTwoDrivers function
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // Define selectingDrivers array
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Define createFareMultiplier function
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Define fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // Define fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // Define selectDifferentDrivers function
  function selectDifferentDrivers(drivers, func) {
    return func(drivers);
  }
  
  // Export the functions
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };
