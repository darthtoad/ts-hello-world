var Task = /** @class */ (function () {
    function Task(name, description, priority) {
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var tasks = [];
tasks.push(new Task('Fuck Around', 'Seriously, just fuck around for a few days. It\'ll be ok.', 2));
tasks.push(new Task('Drink Tequila', 'Get really wasted.', 5));
tasks.push(new Task('Peeing Your Pants', 'It\'s cool! It\'s the bomb! Billy peed his pants too! If peeing your pants is cool, then I\'m Miles Davis!', 8));
tasks[0].markDone();
for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
    var task = tasks_1[_i];
    if (!task.done) {
        alert("Name: " + task.name + "\nDescription: " + task.description + "\nPriority: " + task.priority);
    }
    else {
        alert("You finished doing " + task.name);
    }
}
