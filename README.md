# Todo List Application by Farhod Latifov

A modern, stylish, and simple React-based Todo List application. This project allows users to add, check/uncheck, and delete tasks, with persistent storage in the browser's localStorage. The UI is built with Tailwind CSS utility classes for a clean and responsive look.

## Features

- Add new tasks with a single click
- Mark tasks as completed (with line-through effect)
- Delete tasks instantly
- Active tasks counter
- Persistent storage (tasks are saved in localStorage)
- Responsive and modern UI with smooth transitions

## Technologies Used

- React (functional components, hooks)
- Tailwind CSS (utility-first styling)
- Vite (for fast development and build)

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  components/
    TodoHeader.jsx   # Main todo logic and UI
    TodoItem.jsx     # Single todo item component
    TodoWrapper.jsx  # (Optional) Wrapper for todos
  App.jsx           # App entry point
  main.jsx          # React root
```

## Customization

- You can easily change the color scheme or layout by editing Tailwind classes in the components.
- To reset your todo list, clear your browser's localStorage.

## License

This project is open source and available under the MIT License.

---

Made with ❤️ by Farhod Latifov using React and Tailwind CSS.
