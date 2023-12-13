import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ConsumoService } from '../consumo.service';
import { MatCardModule } from '@angular/material/card';
import { PokeTarjetaComponent } from '../poke-tarjeta/poke-tarjeta.component';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule,
            MatCardModule,
            MatFormFieldModule, 
            MatInputModule,
            MatButtonModule,
            ReactiveFormsModule,
            PokeTarjetaComponent
  ],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  nombre:string = '';
  imagen:string = '';
  habilidad:any[] = [];
  minuscula: string = '';

  miFormulario: FormGroup = this.fb.group({
    name: ['', Validators.required]
  })

  
  consultarPokemon(){
    this.minuscula = this.miFormulario.get('name')?.value;

    this.pokemonService.getPokemonName( this.minuscula.toLowerCase() )
      .subscribe( (Pokes:any) => {
        this.nombre = this.minuscula.toLocaleLowerCase();
        this.imagen=Pokes.sprites.front_default;
      });
  }

  constructor(private fb:FormBuilder,
              private pokemonService: ConsumoService){
  }
}