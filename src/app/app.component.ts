import { Component } from '@angular/core';
import { PostTile } from "./post-tile";
import { t1 } from "./tjeden";
import { t2 } from "./tdwa";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public title = 'app-front';
  public constructor(){};    

  public readonly articleTilesInfo = [t1, t2];
}
