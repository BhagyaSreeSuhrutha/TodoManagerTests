/* eslint-disable no-var */
/* eslint-disable object-curly-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable padded-blocks */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable quotes */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todo Test Suite", () => {
    beforeAll(() => {
        // eslint-disable-next-line indent
        const formattedDate = d => { return d.toISOString().split("T")[0] };
        var dateToday = new Date();
        const today = formattedDate(dateToday);
        const yesterday = formattedDate(new Date(new Date().setDate(dateToday.getDate() - 1)));
        const tomorrow = formattedDate(new Date(new Date().setDate(dateToday.getDate() + 1)));

        add({ title: "Test todo", dueDate: today, completed: false });
        add({ title: 'Submit assignment', dueDate: yesterday, completed: false });
        add({ title: 'Pay rent', dueDate: today, completed: true });
        add({ title: 'Service Vehicle', dueDate: today, completed: false });
        add({ title: 'File taxes', dueDate: tomorrow, completed: false });
        add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false });

    })

    test("Should add a new todo", () => {
        const todoItemsCount = all.length;
        expect(all.length).toBe(6);
        add({
            title: "Test todo add",
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

    test("Retrievel of overdue items", () => {
        expect(overdue().length).toBe(1);
    });

    test("Retrievel of due today items", () => {
        expect(dueToday().length).toBe(4);
    });

    test("Retrievel of due later items", () => {
        expect(dueLater().length).toBe(2);
    });
});