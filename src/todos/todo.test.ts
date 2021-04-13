import TodoService from "./todo.service";
import TodoRepositoryMemory from "./todo.repository.memory";

describe("Todo Tests", () => {
  it("Should create a new todo", async () => {
    const todoRepository = new TodoRepositoryMemory();

    const todoService = new TodoService(todoRepository);

    const todoItem = await todoService.create({
      title: "todoItem",
      items: [
        {
          title: "open door",
          checked: false,
        },
        {
          title: "clear room",
          checked: true,
        },
      ],
    });

    expect(todoItem).toHaveProperty("title");
    expect(todoItem.title).toBe("todoItem");

    expect(todoItem.items).not.toBeNull();

    expect(todoItem.items).toHaveLength(2);

    expect(todoItem.items![0]).toHaveProperty("title");
    expect(todoItem.items![0].title).toBe("open door");
    expect(todoItem.items![0].checked).toBe(false);
  });
});
