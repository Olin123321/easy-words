import { Component } from '@angular/core';
import { WordsService } from './services/words.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nouns = this.wordsService.getNouns();
  verbs = this.wordsService.getVerbs();

  constructor(private wordsService: WordsService) { }

}
