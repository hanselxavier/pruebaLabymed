import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})

export class ConsumoService {

  constructor(private http:HttpClient) { }

  getPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
  }

  getPokemonName( name: string ): Observable<Pokemon>{
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}