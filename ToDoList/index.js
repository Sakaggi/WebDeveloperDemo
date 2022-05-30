let list = ['a', 'b'];
let val = prompt("What do you want");


while (val !== "quit" && val !== 'q') {
    if (val == "list") {
        console.log("******************")
        list.forEach((val, i) =>
            console.log(`${i}: ${val}`));
        console.log("******************");
    } else if (val == "new") {
        const newItem = prompt("Enter a Todo");
        list.push(newItem);
        console.log(`${newItem} added to the list`);
    } else if (val == "delete") {
        const indexToDelete = parseInt(prompt("Enter the index to be deleted"));
        if (!Number.isNaN(indexToDelete) && indexToDelete < list.length) {
            const deleted = list.splice(indexToDelete, 1);
            console.log(`${deleted[0]} removed`);
        } else {
            console.log('Unknown index')
        }
    }
    val = prompt("What do you want");
}

console.log("QUIT the app")
