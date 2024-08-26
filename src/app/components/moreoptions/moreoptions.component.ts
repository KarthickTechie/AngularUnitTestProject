import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MenuOptions } from '../../AppTypes/types';
import { MenuConfiguration } from '../../Configurations/MenuConfigurations';

@Component({
  selector: 'app-moreoptions',
  standalone: true,
  imports: [NgFor],
  templateUrl: './moreoptions.component.html',
  styleUrl: './moreoptions.component.scss'
})
export class MoreoptionsComponent {

  optionsmenu!:MenuOptions[]

  constructor(){

  }

  ngOnInit(){
    this.optionsmenu = MenuConfiguration
    console.log(MenuConfiguration)
  }


}
