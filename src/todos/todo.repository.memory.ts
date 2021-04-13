import ITodoRepository from "./todo.repository.type";
import Todo from "./todo.entity";

const todos: Todo[] = [];
export default class TodoRepositoryMemory implements ITodoRepository {
  async createTodo({ title, items }: Omit<Todo, "id">): Promise<Todo> {
    const todo = new Todo(todos.length + 1, title, items);
    todos.push(todo);
    return Promise.resolve<Todo>(todo);
  }
}
