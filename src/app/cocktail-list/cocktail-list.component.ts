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

  public cocktails: Cocktails[] = [];

  constructor(public cocktailService: CocktailService){
    this.cocktails = []
  }

  ngOnInit() {
    this.cocktailService.getCocktails().subscribe((datas) => {
      datas.forEach((data) => 
      this.cocktails.push(new Cocktails(data.name, data.price, data.img))
      );
    });
  }
}