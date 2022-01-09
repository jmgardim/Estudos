// create a person object that contains three keys: name, age, and country.
// Use yourself as an example to set the values for name, age and country

// Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Per is 35 years old and lives in Norway "

// call the logData() function to verify that it works


let personal =  {
    name: "João",
    age: 30, 
    country: "Brasil"
}



function logData() {
    console.log(personal.name + " is " +  personal.age  +  " years old and lives in  " +  personal.country)
}

logData()



