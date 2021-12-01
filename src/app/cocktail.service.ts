import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { Cocktails } from "./common/cocktails.model";

@Injectable({
    providedIn: 'root'
})


export class CocktailService {
  

    constructor(private http: HttpClient){}


    public getCocktails(): Observable<Cocktails[]>{
        return this.http.get<Cocktails[]>('assets/cocktails.json')
    }
}