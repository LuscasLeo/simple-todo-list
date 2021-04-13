import TodoItem from "./todo.item.entity";

export default class Todo {
  constructor(
    public id: number,
    public title: string,
    readonly items?: TodoItem[]
  ) {
    this.items = items || [];
  }
}
