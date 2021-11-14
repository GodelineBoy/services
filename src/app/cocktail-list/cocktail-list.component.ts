import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktails } from '../common/cocktails.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})

export class CocktailListComponent implements OnInit {

  public cocktails: Observable<Cocktails[]>

  constructor(public cocktailService: CocktailService){
    this.cocktails = this.cocktailService.getCocktails();
  }

  ngOnInit(): void{}
}