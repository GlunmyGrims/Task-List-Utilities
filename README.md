# Task List Utilities

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
[![roadmap.sh](https://img.shields.io/badge/roadmap.sh-Project%20Idea-blue?style=for-the-badge&logo=roadmapdotsh)](https://roadmap.sh/projects/js-grade-report-generator)

An easy and lightweight task list utility. A simple and efficient solution for programmers who have a lot on their minds, need to write everything down, and want to break down complex problems into smaller, manageable tasks.

---

## Features

- **Easy to Use:** Simple and modular design that allows you to personalize it as you wish, while maintaining an accessible approach for every user.
- **Modular Architecture:** Built with independent utilities that you can easily adapt for a larger project or extend with custom functions.
- **Organized State Management:** Utilizes identifiers for tracking, organizing, removing, and editing tasks without mutating the original array.
- **Clean Code:** Designed with readability, immutability, and maintainability in mind.

---

## Technologies Used

- **Vanilla JavaScript (ES6+):** Chosen for its simplicity, flexibility, zero-overhead performance, and universal compatibility.

---

## Challenges Overcome

- **Understanding ID Operations:** Managing array comparisons and removals reliably based on unique symbols or numbers.
- **Complex Conditional Logic:** Implementing robust filtering and display logic to ensure the program accurately returns the required state information.

---

## How to Use

1. Clone or download the source code into your project directory.
2. Import the main functions or individual utilities into your module.

### Example Usage

```javascript
const tasks = [
  { id: 1, title: 'Review variables', completed: true },
  { id: 2, title: 'Practice functions', completed: false },
];

const withNewTask = addTask(tasks, 'Build task utilities');
console.log(withNewTask.map((task) => task.title));

const completed = completeTask(withNewTask, 2);
console.log(countIncompleteTasks(completed));

console.log(removeTask(completed, 1).map((task) => task.id));
console.log(tasks.length);
console.log(countIncompleteTasks(tasks));

/*
Output:

[ 'Review variables', 'Practice functions', 'Build task utilities' ]
1
[ 2, 3 ]
2
1
*/
```

---

## License

This project is licensed under the MIT License.

## Links & Resources

- **Roadmap Project Specification:** [JavaScript Task List Utilities](https://roadmap.sh/projects/js-task-list-utilities)                                       