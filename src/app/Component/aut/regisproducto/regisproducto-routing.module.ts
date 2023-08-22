import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisproductoComponent } from './regisproducto.component';

const routes: Routes = [{ path: '', component: RegisproductoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisproductoRoutingModule { }
