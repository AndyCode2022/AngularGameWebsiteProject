import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { CollaborateComponent } from './collaborate/collaborate.component';

export const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
  { path: 'chat', component: ChatComponent },
  { path: 'collaborate', component: CollaborateComponent },
];

// Import components due to being standalone
@NgModule({
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes),
    AppComponent,
    ChatComponent,
    CollaborateComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}