import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppShellRenderDirective } from './directives/app-shell-render.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    RouterLink,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    RouterOutlet,
    MatProgressSpinnerModule,
    AppShellRenderDirective,
  ],
})
export class AppComponent {}
