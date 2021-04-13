import ITodoRepository from "./todo.repository.type";
import Todo from "./todo.entity";

export default class TodoService {
  constructor(private repository: ITodoRepository) {}

  async create(data: Omit<Todo, "id">) {
    return this.repository.createTodo(data);
  }
}
