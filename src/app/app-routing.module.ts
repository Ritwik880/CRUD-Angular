import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RitwikComponent } from './ritwik/ritwik.component';
import { ServiceComponent } from './service/service.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

const routes: Routes = [
  { path: '', component: RitwikComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
