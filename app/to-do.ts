class Task {
  done: boolean = false;

  constructor(public name: string, public description: string, public priority: number) {}

  markDone(){
    this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Fuck Around', 'Seriously, just fuck around for a few days. It\'ll be ok.', 2));
tasks.push(new Task('Drink Tequila', 'Get really wasted.', 5));
tasks.push(new Task('Peeing Your Pants', 'It\'s cool! It\'s the bomb! Billy peed his pants too! If peeing your pants is cool, then I\'m Miles Davis!', 8));
tasks[0].markDone();
for(var task of tasks) {
  if (!task.done) {
    alert(`Name: ${task.name}
Description: ${task.description}
Priority: ${task.priority}`);
  } else {
    alert(`You finished doing ${task.name}`)
  }
}
