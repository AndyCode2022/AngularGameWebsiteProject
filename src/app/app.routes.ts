import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { CollaborateComponent } from './collaborate/collaborate.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'chat', component: ChatComponent },
  { path: 'collaborate', component: CollaborateComponent },
];
