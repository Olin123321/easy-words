import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { WORDS } from '../data/data-base';
import { Type, WordType } from '../data/models';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private words = new BehaviorSubject<WordType[]>([]);
  private nouns = new Subject<WordType>();
  private verbs = new Subject<WordType>();

  constructor() { 
    setTimeout(() => {
    this.words.next(WORDS);
    }, 2000);
  }

  getWords(): BehaviorSubject<WordType[]> {
    return this.words;
  }

  getNouns(): Observable<WordType> {
    return this.nouns.asObservable().pipe(
      map( word => {
        word.correct = word.type === Type.NOUN;
        return word;
        })
    );
  }

  getVerbs(): Observable<WordType> {
    return this.verbs.asObservable().pipe(
      map( word => {
        word.correct = word.type === Type.VERB;
        return word;
        })
    );
  }

  addNoun(value: WordType): void {
    this.nouns.next(value);
  }

  addVerb(value: WordType): void {
    this.verbs.next(value);
  }
}
