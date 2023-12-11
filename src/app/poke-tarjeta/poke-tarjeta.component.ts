import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { Pokemon } from '../interfaces/pokemon.interface';
import { ConsumoService } from '../consumo.service';

@Component({
  selector: 'app-poke-tarjeta',
  standalone: true,
  imports: [MatCardModule,
            MatGridListModule,
            
          ],
  providers: [ConsumoService],
  templateUrl: './poke-tarjeta.component.html',
  styleUrl: './poke-tarjeta.component.css'
})

export class PokeTarjetaComponent {
  @Input() pokemon!: Pokemon;
}