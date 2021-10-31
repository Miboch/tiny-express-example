/**
 * This service function is shared between api routes.
 * @returns {Promise<any>}
 */
function returnAnObject() {
    return new Promise((resolve, reject) => {
        resolve({
            prop1: "Prop1 is a string",
            prop2: 22,
            prop3: false
        });
    })
}


// public interface for our service module. Here we put all the functions we want to be able to call in other files.
// notice we can alias the name of the functions, by changing the property-name
const exampleService = {
    getObject: returnAnObject
}

module.exports = exampleService;
