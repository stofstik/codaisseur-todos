var todos = function(document, window) {

    console.log("Suddenly, a simple todo app appeared!");

    var countTodo = document.getElementById('todo-count');
    var countCompleted = document.getElementById('completed-count');
    var countTotal = document.getElementById('total-count');

    function calc() {
        var completed = document.getElementsByClassName('completed').length;
        countCompleted.innerHTML = completed;

        var total = document.getElementsByClassName('todo').length;
        countTotal.innerHTML = total;

        var todo = total - completed;
        countTodo.innerHTML = todo;
    }

    function createTodo(title) {
        // create a list item
        var listItem = document.createElement("li");
        listItem.className = "todo";

        // create a checkbox and add it to the list item
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "todo-" + nextTodoId();
        checkbox.value = "1";
        checkbox.checked = false;
        // assign the toggleDone function on the checkbox's onchange event
        checkbox.onchange = document.toggle.bind(checkbox);
        listItem.appendChild(checkbox);

        // create some whitespace to put between the checkbox and the label
        var space = document.createTextNode(" ");
        listItem.appendChild(space);

        // create a label that holds the title and add it to the list item
        var label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.innerHTML = title;
        listItem.appendChild(label);

        // add the list item with the checkbox, the whitespace and the label to
        // the list
        var list = document.getElementById("todolist");
        list.appendChild(listItem);
    }

    // Every todo has it's own id so we can add that to the corresponding label's
    // "for" attribute to make sure that when we click the label, the checkbox
    // toggles
    function nextTodoId() {
        return document.getElementsByClassName("todo").length + 1;
    }

    document.toggle = function() {
        var checkbox = this;

        checkbox.checked ? checkbox.parentElement.className = "todo completed" : checkbox.parentElement.className = "todo";

        calc();
    };

    document.submitTodo = function() {
        var input = document.getElementById("new-todo");
        var title = input.value;
        createTodo(title);
        input = null;
    };

    document.cleanUpDoneTodos = function() {
        var list = document.getElementById("todolist");
        var doneItems = document.getElementsByClassName("completed");

        // Reverse loop through the done todo items so we can remove them without
        // changing the index of the remaining items when we remove them
        for (var i = doneItems.length; i > 0; i--) {
            list.removeChild(doneItems[i - 1]);
        }

        calc();
    };

    calc();
}(document, window);
