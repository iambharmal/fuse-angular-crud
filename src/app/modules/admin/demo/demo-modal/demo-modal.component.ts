import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoModalComponent } from '../../todo/todo-modal/todo-modal.component';

@Component({
  selector: 'app-demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.scss']
})
export class DemoModalComponent implements OnInit {

  public payload: DemoData = {};
  constructor(
    public dialogRef: MatDialogRef<TodoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DemoData,
  ) { }

  ngOnInit(): void {
    this.payload = {...this.data}
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DemoData {
  name?: string;
  description?: string;
  field1?: string;
  field2?: string;
  _id?: string;
}