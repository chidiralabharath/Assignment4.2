import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {
  playerId: string;
  player: any = {};

  constructor(private route: ActivatedRoute, private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerId = this.route.snapshot.paramMap.get('id');
    this.getPlayer();
  }

  getPlayer(): void {
    this.playerService.getPlayerById(this.playerId)
      .subscribe(
        data => {
          this.player = data;
        },
        error => {
          console.error('Error fetching player:', error);
          // Handle error
        }
      );
  }

  updatePlayer(): void {
    this.playerService.updatePlayer(this.playerId, this.player)
      .subscribe(
        () => {
          console.log('Player updated successfully');
          // Optionally, navigate to another component or show success message
        },
        error => {
          console.error('Error updating player:', error);
          // Handle error
        }
      );
  }
}

