import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss']
})

export class TodoModalComponent implements OnInit {

  public payload: ToDoData = {};
  constructor(
    public dialogRef: MatDialogRef<TodoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToDoData,
  ) { }

  ngOnInit(): void {
    this.payload = {...this.data}
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface ToDoData {
  email?: string;
  firstname?: number;
  lastname?: number;
  role?: string;
  username?: string;
  _id?: string;
}