export interface Category {
  categoryName: string,
  categoryId: string,
  color: string,
}

export interface ToDoItem {
  todoName: string,
  todoId: string,
  done: boolean
}

export interface Content {
  category: Category,
  todoList: ToDoItem[]
}