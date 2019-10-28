// Code your solution in this file.
function lowerCaseDrivers(driversArray) {
    return driversArray.map(x => x.toLowerCase())
    // return of a map of driversArray, 
    // where each element is set to lowercase.
}

function nameToAttributes (driversArray) {
    return driversArray.map(function(driver) {
        // call an anonymous function on each of the elements of drivers, block variable named 'driver'
        let driverFirstName = driver.split(' ')[0];
        let driverLastName = driver.split(' ')[1];
        // each driver is split, twice, once to assign the first name (zero index) to first name
        // and again to set the second (array at index 1) to the last name
        return { firstName: driverFirstName, lastName: driverLastName };
        //return the names as an object
    });
}

function attributesToPhrase(driversArray) {
    return driversArray.map(function(driver) {
        // iterate through driversArray and for each
        // driver, return their name and hometown
        return `${driver.name} is from ${driver.hometown}`;
    })
}