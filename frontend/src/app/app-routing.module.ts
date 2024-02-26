import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './add-player/add-player.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { PerformQueryComponent } from './perform-query/perform-query.component';

const routes: Routes = [
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'update-player/:id', component: UpdatePlayerComponent },
  { path: 'delete-player', component: DeletePlayerComponent },
  { path: 'perform-query', component: PerformQueryComponent },
  { path: '', redirectTo: '/add-player', pathMatch: 'full' },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
