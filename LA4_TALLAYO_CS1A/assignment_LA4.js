// customer input names n get number
let customerQueue = [];

// add 5 customer using propmt
for (let i = 0; i < 5; i++) {
    let name = prompt(`Enter name of customer ${i + 1}:`);
    customerQueue.push(name); // push adds the customer name to the queue
    alert(`Hello ${name}, your number is ${i + 1}`);
    console.log(`Queue: [${customerQueue.join(", ")}]`); // print queue with customers separated by comma inside brackets
}

// servicing csutomers
for (let i = 0; i < 5; i++) {
    let numberToServe = prompt("Enter the number to be serviced (1 to current queue size):");
    let index = parseInt(numberToServe) - 1; // convert input to index for array

    if (index >= 0 && index < customerQueue.length) {
        let servedCustomer = customerQueue.splice(index, 1)[0]; // splice removes served customer from queue
        alert(`Now servicing: ${servedCustomer}`); // dis line shows which customer is being served
        console.log(`Updated Queue: [${customerQueue.join(", ")}]`); // print updated queue
    } else {
        alert("Invalid number entered."); // alert if invalid input
        i--; // it'll repeat dis if invalid til it gets valid
    }
}

// Output using the given sample - Elaine, Althea, Angelo, Lito, Engelbert
// Enter name of customer 1:Elaine
// Hello Elaine, your number is 1
// Queue: [Elaine]
// Enter name of customer 2:Althea
// Hello Althea, your number is 2
// Queue: [Elaine, Althea].........
// Enter the number to be serviced (1 to current queue size):1
// Now servicing: Elaine
// Updated Queue: [Althea, Angelo, Lito, Engelbert]
// Enter the number to be serviced (1 to current queue size):8
// Invalid number entered.
// .....
