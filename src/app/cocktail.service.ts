import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Cocktails } from "./common/cocktails.model";

@Injectable({
    providedIn: 'root'
})


export class CocktailService {
  

    constructor(private http: HttpClient){}


    getCocktails(){
        return this.http.get<Cocktails[]>('assets/cocktails.json')
    }
}