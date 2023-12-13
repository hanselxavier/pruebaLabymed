import { Component, OnInit } from '@angular/core';
import { ConsumoService } from '../consumo.service';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokeTarjetaComponent } from '../poke-tarjeta/poke-tarjeta.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [MatGridListModule,
            PokeTarjetaComponent,
            MatTableModule,
            MatIconModule,
            MatButtonModule        
  ],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})

export class ListarComponent implements OnInit{

  displayedColumns: string[] = ['Nombre', 'Acción'];
  dataSource : any[] = [];
  
  Pokemones: Pokemon[] = [];

  ngOnInit(): void {
    this.pokemonService.getPokemon()
      .subscribe( (Pokes:any) => {
        this.Pokemones = Pokes.results;
        this.dataSource = this.Pokemones;
        console.log(this.Pokemones)
      });
  }

  constructor(private pokemonService : ConsumoService){  
  }

}