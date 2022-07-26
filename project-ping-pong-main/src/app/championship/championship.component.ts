import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {
  playerForm: FormGroup;

  constructor(private _playerService:PlayerService, fb: FormBuilder) {
    this.playerForm = fb.group({
      namePlayer: ['', [Validators.required, Validators.minLength(2)]],
   })
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    if(!this.playerForm.invalid){
      console.log(this.playerForm.value);
        this._playerService.createPlayer(this.playerForm.value).subscribe();
    }
  }
 // get namePlayer() {
   // return this.playerForm.get('namePlayer') as FormControl;
 // }
}
