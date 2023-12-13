import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { ConsumoService } from '../consumo.service';
import { CommonModule } from '@angular/common';
import { PokeTarjetaComponent } from '../poke-tarjeta/poke-tarjeta.component';
import { Pokemon } from '../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-individual',
  standalone: true,
  imports: [CommonModule,
            PokeTarjetaComponent,
  ],
  templateUrl: './pokemon-individual.component.html',
  styleUrl: './pokemon-individual.component.css'
})

export class PokemonIndividualComponent implements OnInit{

  name: string = '';
  img: string = '';
  abilities: any;
  constructor( private activatedRoute: ActivatedRoute,
                private pokemonService: ConsumoService){

  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.pokemonService.getPokemonName(id))
      )
      .subscribe( (pokemon:any) => {
        console.log(pokemon);
        this.name = pokemon.name;
        this.img = pokemon.sprites.front_default;
        this.abilities = pokemon.abilities;
      } )
  }
}