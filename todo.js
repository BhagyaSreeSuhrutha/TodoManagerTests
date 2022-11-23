/* eslint-disable eol-last */
/* eslint-disable spaced-comment */
/* eslint-disable padded-blocks */
/* eslint-disable arrow-spacing */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */
/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable space-infix-ops */
const todoList = () => {
    all = [];
    const add = (todoItem) => {
        all.push(todoItem);
    };
    const markAsComplete = (index) => {
        all[index].completed = true;
    };

    const overdue = () => {
        // Write the date check condition here and return the array of overdue items accordingly.
        // FILL YOUR CODE HERE
        
        let today= new Date().toLocaleDateString("en-CA");
        return all.filter((todo)=>todo.dueDate<today);

    }

    const dueToday = () => {
        // Write the date check condition here and return the array of todo items that are due today accordingly.
        // FILL YOUR CODE HERE

        let today = new Date().toLocaleDateString("en-CA");
        return all.filter((todo)=>todo.dueDate===today);

    }

    const dueLater = () => {
        // Write the date check condition here and return the array of todo items that are due later accordingly.
        // FILL YOUR CODE HERE

        let today =new Date().toLocaleDateString("en-CA");

        return all.filter((todo)=>todo.dueDate>today);

        
    }

    const toDisplayableList = (list) => {
        // Format the To-Do list here, and return the output string as per the format given above.
        // FILL YOUR CODE HERE
        // ..
        // ..
        // ..
        // return OUTPUT_STRING

        let today= new Date().toLocaleDateString("en-CA");

        return list.map((todo)=>`${todo.completed ? "[x]":"[ ]"} ${todo.title} ${todo.dueDate === today? "": todo.dueDate}`).join("\n");   
        //if todo task completed => displays [x], else displays [ ]
        //if todo duedate is present date displays nothing otherwise displays duedate
        
    }

    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}

module.exports = todoList;
// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

/*const todos = todoList();

const formattedDate = d => {
    return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")*/