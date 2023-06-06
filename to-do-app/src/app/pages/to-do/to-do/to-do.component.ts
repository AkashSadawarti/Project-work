import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../../model/to-do.model';
import { ToDoService } from '../../service/to-do.service';
import { finalize} from 'rxjs';




@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  allTasks: ToDo[] = []
  _todo: ToDo = {};

  requestPayload: ToDo = {};
  status = ["Todo", "Pending", "In Progress", "Done"]
  loginBtnSpinner: boolean = false;
  router: any;
  registerSucess:boolean = false;

  ngOnInit(): void {
    this.getList();
  }

  constructor(
    private todoService: ToDoService) {
    console.log("todo service Invoked")
  }

  openModal() {
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
    }
    this._todo.title = ""
    this._todo.date = ""
    this._todo.day = ""
    this._todo.status = ""
  }

  closeModal() {
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }

  saveChanges() {
    this.requestPayload = this.todoModel;
    console.log(JSON.stringify(this.todoModel));
    this.createTask(this.requestPayload)
    console.log("task Created succesfully.");
    this.closeModal();
  }

  createTask(todos: ToDo) {
    console.log(JSON.stringify(todos));
    this.todoService
      .createTask(todos).pipe(finalize(() => (this.loginBtnSpinner = false))).subscribe((data: any) => {
        this.ngOnInit();
        this.registerSucess=true;
      });
  }

  openModal2() {
    const modalDiv = document.getElementById('myModal2');
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
    }
  }

  closeModal2() {
    const modalDiv = document.getElementById('myModal2');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }
 

  // getTaskById(taskId : ToDo){
  //   this.todoService.getTaskById(taskId).subscribe((res: any) => {
  //     console.log("Task Id processed succesfully.");
  //   });
  // }

  updateChanges() {
    this.todoModel = this.todoModel;
    console.log(JSON.stringify(this.todoModel));
    this.editTask(this.todoModel)
    console.log("task updated succesfully.");
    this.closeModal();
  }

  // Edit Task
  editTask(task : ToDo) {
    this.todoService
      .updateTask(task).subscribe((res: any) => {
        this.getList();
      })
  }

  // Delete Task
  delete(task: ToDo) {
    console.log(this._todo.id);
    console.log(JSON.stringify(task));
    this.todoService
      .deleteTask(task).subscribe((res: any) => {
        console.log("Task deleted succesfully.");
        this.getList();
      })
  }

  //getter
  public get todoModel(): ToDo {
    return this._todo;
  }
  // setter
  public set todoModel(value: ToDo) {
    this._todo = value;
  }

  getList() {
    this.todoService.getList().subscribe((response: any) => {
      console.log(response);
      this.allTasks = response
    }, err => {
      alert('api not working')
    });
  }
}

