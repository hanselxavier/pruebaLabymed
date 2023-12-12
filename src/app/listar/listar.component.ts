import { Component, OnInit } from '@angular/core';
import { ConsumoService } from '../consumo.service';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokeTarjetaComponent } from '../poke-tarjeta/poke-tarjeta.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [MatGridListModule,
            PokeTarjetaComponent,          
  ],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
  Pokemones: Pokemon[] = [];

  ngOnInit(): void {
    this.pokemonService.getPokemon()
      .subscribe( (Pokes:any) => {
        this.Pokemones = Pokes.results;
        console.log(this.Pokemones)
      });
  }

  constructor(private pokemonService : ConsumoService){  
  }

}
