import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.css']
})
export class DeletePlayerComponent implements OnInit {
  playerId: string;

  constructor(private route: ActivatedRoute, private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerId = this.route.snapshot.paramMap.get('id');
  }

  deletePlayer(): void {
    this.playerService.deletePlayer(this.playerId)
      .subscribe(
        () => {
          console.log('Player deleted successfully');
          // Optionally, navigate to another component or show success message
        },
        error => {
          console.error('Error deleting player:', error);
          // Handle error
        }
      );
  }
}

