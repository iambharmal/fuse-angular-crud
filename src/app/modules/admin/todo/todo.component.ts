import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiCallerServiceService } from 'app/services/api-caller-service.service';
import { TodoModalComponent } from './todo-modal/todo-modal.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, AfterViewInit {

  constructor(
    private apicallerService: ApiCallerServiceService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  displayedColumns: string[] = ['username','email','fullname','role','action'];
  private dataArray: any;
  public dataSource = new MatTableDataSource<ToDo>;
  payload: ToDo = {};
  isEditing: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  getTodos() {
    this.apicallerService.getTodos().subscribe((res:ApiResponse) => {
      if(res.data.length) {
        this.dataArray = res.data;
        this.dataSource = new MatTableDataSource<ToDo>(this.dataArray);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }

  addTodo(data) {
    this.apicallerService.addTodo(data).subscribe((res:ApiResponse) => {
      if(res.data) {
        this._snackBar.open('ToDo added successfully!','Close', { duration: 3000 });
        this.getTodos();
      }
    });
  }

  editTodo(id,data) {
    this.apicallerService.updateTodo(id,data).subscribe((res:ApiResponse) => {
      if(res.data) {
        this._snackBar.open('ToDo updated successfully!','Close', { duration: 3000 });
        this.getTodos();
      }
    });
  }

  deleteTodo(id) {
    this.apicallerService.deleteTodo(id).subscribe((res:ApiResponse) => {
      if(res.success) {
        this._snackBar.open('ToDo deleted successfully!','Close', { duration: 3000 });
        this.getTodos();
      }
    });
  }

  openDialog(data?): void {
    if(data)
      this.isEditing = true;
    const dialogRef = this.dialog.open(TodoModalComponent, {
      width: '450px',
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.payload = result;
      if(this.isEditing) {
        this.editTodo(this.payload._id, this.payload)
      } else {
        console.log(this.payload)
        this.addTodo(this.payload)
      }
    });
  }
}

export interface ApiResponse {
  data: ToDo[];
  message: string;
  success: boolean;
}

export interface ToDo {
  email?: string;
  firstname?: number;
  lastname?: number;
  role?: string;
  username?: string;
  _id?: string;
}