import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { SidebarComponent } from '../sidebar/sidebar';
import { MainContentComponent } from '../main-content/main-content';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    MainContentComponent
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class LayoutComponent {}
