import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ConsumoService } from './consumo.service';
import { Pokemon } from './interfaces/pokemon.interface';
import { PokeTarjetaComponent } from './poke-tarjeta/poke-tarjeta.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BusquedaComponent } from './busqueda/busqueda.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            RouterOutlet,
            PokeTarjetaComponent, 
            MatGridListModule, 
            HttpClientModule, 
            MatToolbarModule,
            AppRoutingModule,
            BusquedaComponent,
            RouterLink,
            RouterLinkActive
  ],
  providers: [ConsumoService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'PruebaHansel';
}