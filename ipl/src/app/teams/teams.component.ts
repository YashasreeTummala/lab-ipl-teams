import { Component, OnInit } from '@angular/core';
import { Player } from './../player';
import { Players } from '../players';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  Players: Player[];
  newPlayer: Player;

  constructor() {
  }

  ngOnInit(): void {
    this.Players = Players;
  }

  addPlayer(newPlayer): void{
    this.Players.unshift(newPlayer);
    alert('New Player Added');
  }

}
