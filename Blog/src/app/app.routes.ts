import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {MainContainerComponent} from "./Components/main-container/main-container.component";
import {BlogComponent} from "./Components/blog/blog.component";
import {BlogListComponent} from "./Components/blog-list/blog-list.component";

export const routes: Routes = [
  {path : 'home', component: AppComponent},
  {path : 'list', component: BlogListComponent},
  {path: 'blog/:id', component: BlogComponent},
];
