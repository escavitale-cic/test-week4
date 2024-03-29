import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostComponent } from './ListaPost/ListaPost.component';
import { PostDetailComponent } from './PostDetail/PostDetail.component';

const routes: Routes = [
{path: '/', component:ListaPostComponent},
{path: 'PostDetails', component:PostDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
