import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiCallerServiceService } from 'app/services/api-caller-service.service';
import { DemoModalComponent } from './demo-modal/demo-modal.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(
    private apicallerService: ApiCallerServiceService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getDemos();
  }

  displayedColumns: string[] = ['name','description','field1','field2','action'];
  private dataArray: any;
  public dataSource = new MatTableDataSource<Demo>;
  payload: Demo = {};
  isEditing: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  getDemos() {
    this.apicallerService.getDemos().subscribe((res:ApiResponse) => {
      if(res.data.length) {
        this.dataArray = res.data;
        console.log(this.dataArray)
        this.dataSource = new MatTableDataSource<Demo>(this.dataArray);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }

  addDemo(data) {
    this.apicallerService.addDemo(data).subscribe((res:ApiResponse) => {
      if(res.data) {
        this._snackBar.open('Demo added successfully!','Close', { duration: 3000 });
        this.getDemos();
      }
    });
  }

  editDemo(id,data) {
    this.apicallerService.updateDemo(id,data).subscribe((res:ApiResponse) => {
      if(res.data) {
        this._snackBar.open('Demo updated successfully!','Close', { duration: 3000 });
        this.getDemos();
      }
    });
  }

  deleteDemo(id) {
    this.apicallerService.deleteDemo(id).subscribe((res:ApiResponse) => {
      if(res.success) {
        this._snackBar.open('Demo deleted successfully!','Close', { duration: 3000 });
        this.getDemos();
      }
    });
  }

  openDialog(data?): void {
    if(data)
      this.isEditing = true;
    const dialogRef = this.dialog.open(DemoModalComponent, {
      width: '450px',
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.payload = result;
      if(this.isEditing) {
        this.editDemo(this.payload._id, this.payload)
      } else {
        console.log(this.payload)
        this.addDemo(this.payload)
      }
    });
  }

}

export interface ApiResponse {
  data: Demo[];
  message: string;
  success: boolean;
}

export interface Demo {
  name?: string;
  description?: string;
  field1?: string;
  field2?: string;
  _id?: string;
}