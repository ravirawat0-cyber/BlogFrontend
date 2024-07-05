import { Component } from '@angular/core';
import {BlogListComponent} from "../blog-list/blog-list.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {marked} from "marked";

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [
    BlogListComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent {

}
