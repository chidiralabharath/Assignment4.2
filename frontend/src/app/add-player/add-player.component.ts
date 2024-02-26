import { Component } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent {
  player: any = {};

  constructor(private playerService: PlayerService) {}

  addPlayer(): void {
    this.playerService.addPlayer(this.player)
      .subscribe(
        () => {
          console.log('Player added successfully');
          // Optionally, clear the form
          this.player = {};
        },
        error => {
          console.error('Error adding player:', error);
          // Handle error
        }
      );
  }
}
