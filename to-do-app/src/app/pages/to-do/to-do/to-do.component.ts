import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../../model/to-do.model';
import { NgForm } from '@angular/forms'
import { ToDoService } from '../../service/to-do.service';
import { finalize } from 'rxjs';
import { materialize } from 'rxjs';
// import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit{

  allTasks : ToDo[] = []
  _todo : ToDo = {};

  requestPayload : ToDo = {};

  loginBtnSpinner: boolean =false;

  ngOnInit(): void {
    this.getList(); 
  }

  constructor(
    private todoService : ToDoService ){
    console.log("todo service Invoked")
  }

  
  saveChanges(){
    this.requestPayload = this.todoModel;
    console.log(JSON.stringify(this.todoModel));
    if(this._todo.id == 0){
      this.createTask(this.requestPayload)
      console.log("task Created succesfully.");
    }else{
      this.editTask(this.todoModel)
      console.log("task Updated succesfully.");
    }
    
  }
  
  createTask( todos : ToDo){
    console.log(JSON.stringify(todos));
    this.todoService
    .createTask(todos).pipe(finalize(()=>(this.loginBtnSpinner = false))).subscribe((data : any) =>{
      this.ngOnInit()   
    });
  }
 
  // Edit Task
  editTask(id : ToDo){
    console.log(JSON.stringify(id));
    this.todoService
    .updateTask(id).subscribe((res : any) => {
      this.todoModel = res;
    })
  }

  // Delete Task
delete(task : ToDo){
  console.log(this._todo.id);
  console.log(JSON.stringify(task));
    this.todoService
    .deleteTask(task).subscribe((res : any) => {
      alert("Task deleted succesfully.")
    })
}

  //getter
public get todoModel() : ToDo {
   return this._todo;
}
 // setter
 public set todoModel(value :  ToDo){
  this._todo = value;
 } 

  getList(){
     this.todoService.getList().subscribe((response :  any) => {
      console.log(response);
      this.allTasks = response
     },err => {
      alert('api not working')
     });
  }
}

