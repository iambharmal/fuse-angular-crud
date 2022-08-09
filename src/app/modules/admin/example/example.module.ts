import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { DemoComponent } from '../demo/demo.component';
import { TodoModalComponent } from '../todo/todo-modal/todo-modal.component';
import { TodoComponent } from '../todo/todo.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DemoModalComponent } from '../demo/demo-modal/demo-modal.component';
import { CommonModule } from '@angular/common';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent,
        TodoComponent,
        DemoComponent,
        TodoModalComponent,
        DemoModalComponent
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
export class ExampleModule
{
}
