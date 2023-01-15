import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatTestComponent } from './chat-test/chat-test.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'chat-test', component: ChatTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
