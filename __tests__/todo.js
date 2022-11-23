/* eslint-disable comma-dangle */
/* eslint-disable padded-blocks */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable quotes */
const todoList = require("../todo");

const { all, markAsComplete, add } = todoList();

describe("Todo Test Suite", () => {
    beforeAll(() => {
        // eslint-disable-next-line indent
        add({
            title: "Test todo",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA"),
        });

    })
    
    test("Should add a new todo", () => {
        const todoItemsCount = all.length;
        expect(all.length).toBe(1);
        add({
            title: "Test todo",
            completed: false,
            // eslint-disable-next-line comma-dangle
            dueDate: new Date().toLocaleDateString("en-CA"),
        });
        expect(all.length).toBe(todoItemsCount + 1);
    });

    test("Should mark a todo as complete", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    });

})