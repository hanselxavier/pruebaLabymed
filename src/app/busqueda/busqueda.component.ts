import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ConsumoService } from '../consumo.service';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule,
            MatCardModule,
            MatFormFieldModule, 
            MatInputModule,
            MatButtonModule,
            ReactiveFormsModule
  ],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  nombre:string = '';
  imagen:string = '';
  habilidad:any[] = [];
  miFormulario: FormGroup = this.fb.group({
    name: ['', Validators.required]
  })

  consultarPokemon(){
    console.log(this.miFormulario.get('name')?.value)
    this.pokemonService.getPokemonName(this.miFormulario.get('name')?.value)
      .subscribe( (Pokes:any) => {
        this.imagen=Pokes.sprites.front_default;
        this.habilidad=Pokes.abilities
        console.log(this.habilidad)
      });
  }

  constructor(private fb:FormBuilder,
              private pokemonService: ConsumoService){
  }
}
