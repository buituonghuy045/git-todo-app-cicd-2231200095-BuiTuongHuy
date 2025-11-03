const { TodoService } = require('../../js/model');
const { Controller } = require('../../js/controller');

// Mock the View because we are not testing the UI, only Controller-Model interaction.
const mockView = {
    update: jest.fn(),
    bindAddTodo: jest.fn(),
    bindToggleTodo: jest.fn(),
    bindRemoveTodo: jest.fn(),
};

describe('Controller-Service Integration Tests', () => {
    let service;
    let controller;

    beforeEach(() => {
        service = new TodoService();
        service.todos = []; // Reset singleton for tests
        controller = new Controller(service, mockView);
    });

    test('handleAddTodo should call service.addTodo and update the model', () => {
        // TODO: Call the controller's handleAddTodo method with some test text.
        controller.handleAddTodo('Do the gym');
        // Then, get the list of todos directly from the service.
        toDoList = service.getTodos();
        // Assert that the service's todos array has a length of 1.
        expect(toDoList.length).toBe(1);
        // Assert that the text of the first todo in the service matches the input.
        expect(toDoList[0].text).toBe('Do the gym');
    });

    test('handleRemoveTodo should call service.removeTodo and update the model', () => {
        // TODO: First, directly add a todo to the service.
        service.addTodo('Go swimming');
        // Get the ID of the new todo.
        idTask = service.getTodos()[0].id;
        // Call the controller's handleRemoveTodo method with that ID.
        controller.handleRemoveTodo(idTask);
        // Assert that the service's todos array is now empty.
        expect(service.getTodos().length).toBe(0);
    });
});
