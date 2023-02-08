// integration operation segregation principle
// don't mix logic with function calls to the same code basis to stay on the same abstraction level

// operation
const logging = () => {
    console.log("lksjdf");  
}

// operation
const enumerate = () => {
    // operation
    [1,2,3].forEach(x => console.log(x)); 
}

// integration
const main = () => {
    // integration
    logging();
    enumerate();
}

main();