import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConsumoService } from './consumo.service';
import { Pokemon } from './interfaces/pokemon.interface';
import { PokeTarjetaComponent } from './poke-tarjeta/poke-tarjeta.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            RouterOutlet,
            PokeTarjetaComponent, 
            MatGridListModule, 
            HttpClientModule, 
  ],
  providers: [ConsumoService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  Pokemones: Pokemon[] = [];

  ngOnInit(): void {
    this.pokemonService.getPokemon()
      .subscribe( Pokes => {
        this.Pokemones = Pokes;
        console.log({...this.Pokemones})
      });
  }

  constructor(private pokemonService : ConsumoService){  
  }

  title = 'PruebaHansel';
}