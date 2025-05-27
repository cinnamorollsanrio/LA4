function simpleHash(index) {
    return index + 1;
}

let customerTable = {};

for (let i = 0; i < 5; i++) {
    let name = prompt(`Enter name of customer ${i + 1}:`);
    let key = simpleHash(i); // key = index+1
    customerTable[key] = name; // store in table
    alert(`${name}, your number is ${key}`);
    console.log(customerTable);
}

// Serve customer by number
for (let i = 0; i < 5; i++) {
    let num = prompt("Enter number to be serviced:");

    if (customerTable[num]) {
        alert(`Now serving: ${customerTable[num]}`);
        delete customerTable[num]; // remove from table
        console.log(customerTable);
    } else {
        alert("Invalid or already served");
        i--; // repeat if not found
    }
}
