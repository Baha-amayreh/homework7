import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { AddComponent } from './add.component';
import { UpdateComponent } from './update.component';
import { DeleteComponent } from './delete.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   RouterModule.forChild([
    {path:'list',component:ListComponent},
    {path:'add',component:AddComponent},
    {path:'update',component:UpdateComponent},
    {path:'delete',component:DeleteComponent},
   ])
  ]
})
export class UserModule { }
