import { Component, Input, OnInit } from '@angular/core';
import { PostTile } from '../post-tile';

@Component({
  selector: 'app-article-tile',
  templateUrl: './article-title.component.html',
  styleUrls: ['./article-title.component.scss']
})
export class ArticleTileComponent{

  @Input() public postTile: PostTile;

  public onButtonClick(): void {
    window.alert('Pokaż cały wpis')
  }

}
