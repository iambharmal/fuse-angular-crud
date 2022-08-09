import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiCallerServiceService } from 'app/services/api-caller-service.service';

@Component({
  selector: 'app-live-entries',
  templateUrl: './live-entries.component.html',
  styleUrls: ['./live-entries.component.scss']
})
export class LiveEntriesComponent implements OnInit {

  constructor(
    private apicallerService: ApiCallerServiceService,
    private _snackBar: MatSnackBar
  ) { 
    this.getEntries();
  }

  ngOnInit(): void {
    
  }

  displayedColumns: string[] = [
    'API',
    'Description',
    'Auth',
    'HTTPS',
    'Cors',
    'Link',
    'Category',
    'action'
  ];
  private dataArray: any;
  public dataSource = new MatTableDataSource<Entry>;
  payload: Entry = {};
  isEditing: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  getEntries() {
    this.apicallerService.getEntries().subscribe((res:ApiResponse) => {
      if(res.data.count > 0) {
        this.dataArray = res.data.entries;
        this.dataSource = new MatTableDataSource<Entry>(this.dataArray);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }

  addToLocal(data) {
    this.apicallerService.addDemo(data).subscribe((res:ApiResponse) => {
      // if(res.data) {
      //   this._snackBar.open('Demo added successfully!','Close', { duration: 3000 });
      //   this.getDemos();
      // }
    });
  }

}

export interface ApiResponse {
  data: {
    count: number;
    entries: Entry[];
  };
  message: string;
  success: boolean;
}

export interface Entry {
  API?: string;
  Description?: string;
  Auth?: string;
  HTTPS?: string;
  Cors?: string;
  Link?: string;
  Category?: string;
}
