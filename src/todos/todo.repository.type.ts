import Todo from "./todo.entity";

export default interface ITodoRepository {
  createTodo(data: Omit<Todo, "id">): Promise<Todo>;
}
