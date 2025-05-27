// LA5 - queue using hash table
// customer input names n get number

function simpleHash(index) {
    return index + 1; // hash is index + 1 so it starts from 1
}

let customerTable = {}; // i use object for storing names with numbers

// add 5 customers using prompt
for (let i = 0; i < 5; i++) {
    let name = prompt(`Enter name of customer ${i + 1}:`);
    let key = simpleHash(i); // key is the number for the customer
    customerTable[key] = name; // i store the name using the key
    alert(`${name}, your number is ${key}`); // show number to customer
    console.log(customerTable); // show full table after each input
}

// servicing customers
for (let i = 0; i < 5; i++) {
    let num = prompt("Enter number to be serviced:"); // csr will input the number

    if (customerTable[num]) {
        alert(`Now serving: ${customerTable[num]}`); // show who is being served
        delete customerTable[num]; // remove that customer from the table
        console.log(customerTable); // show updated table
    } else {
        alert("Invalid or already served"); // if not found or already served
        i--; // repeat this round if invalid
    }
}

// Output using the given names 
// Enter name of customer 1:Elaine
// Elaine, your number is 1
// { '1': 'Elaine' }
// Enter name of customer 2:ALthea
// ALthea, your number is 2
// { '1': 'Elaine', '2': 'ALthea' }
// ......
// {
//  '1': 'Elaine',
//  '2': 'ALthea',
//  '3': 'Angelo',
//  '4': 'Lito',
//  '5': 'Engelbert'
// }
// Enter number to be serviced:2
// Now serving: Althea
// { '1': 'Elaine', '3': 'Angelo', '4': 'Lito', '5': 'Engelbert' }
// .......
