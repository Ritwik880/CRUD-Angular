import { Component, OnInit } from '@angular/core';
import { Todo } from "../Todo"
@Component({
  selector: 'app-ritwik',
  templateUrl: './ritwik.component.html',
  styleUrls: ['./ritwik.component.css']
})
export class RitwikComponent implements OnInit {
  localItem:string | null;
  todos: Todo[];
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
    this.todos = []
  }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    // const index = this.todos.indexOf(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo: Todo) {
    // console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = ! this.todos[index].active;
    // this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
