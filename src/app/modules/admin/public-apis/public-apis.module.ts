import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicApisComponent } from './public-apis.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { LiveEntriesComponent } from './live-entries/live-entries.component';
import { LocalEntriesComponent } from './local-entries/local-entries.component';
import { LocalModalComponent } from './local-entries/local-modal/local-modal.component';

const exampleRoutes: Route[] = [
  {
      path     : '',
      component: PublicApisComponent
  }
];

@NgModule({
  declarations: [
    PublicApisComponent,
    LiveEntriesComponent,
    LocalEntriesComponent,
    LocalModalComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports     : [
      CommonModule,
      RouterModule.forChild(exampleRoutes),
      FormsModule,
      MatTabsModule,
      MatPaginatorModule,
      MatTableModule,
      MatButtonModule,
      MatDialogModule,
      MatCommonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSnackBarModule
  ]
})
export class PublicApisModule { }
