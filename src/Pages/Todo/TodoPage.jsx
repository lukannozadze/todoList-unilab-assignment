import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
const TodoPage = () => {
  return (
    <div className="w-screen h-screen font-poppins flex flex-col items-center">
      <Header />
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default TodoPage;
