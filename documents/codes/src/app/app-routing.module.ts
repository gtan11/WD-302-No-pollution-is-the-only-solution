import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksListComponent } from './components/books-list/books-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';


import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SideformComponent } from './sharepage/sideform/sideform.component';

import { UserComponent } from './view/user/user.component';
import { AdminComponent } from './view/admin/admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user/home' },
  
  {path: 'user', component: UserComponent,
    children: [
      {path: 'home', component:HomeComponent},
      {path: 'about', component:AboutComponent},
      {path: 'contact', component:ContactComponent},
      {path: 'sideform', component:SideformComponent},
    ],
  },
  {path: 'admin', component:AdminComponent,
    children: [      
           
    ]
  },
  {path: 'add-book', component: AdminComponent}, 
  {path: 'books-list', component: AdminComponent},
  {path: 'edit-book/:id', component: BookDetailComponent},
  {path:'**', component:PagenotfoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
