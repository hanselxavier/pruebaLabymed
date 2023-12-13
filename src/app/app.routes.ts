import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ListarComponent } from './listar/listar.component';
import { PokemonIndividualComponent } from './pokemon-individual/pokemon-individual.component';

export const routes: Routes = [
    {
        path: '', component: ListarComponent
    },
    {
        path: 'listar', component: ListarComponent
    },
    {
        path: 'buscar', component: BusquedaComponent
    },
    {
        path: ':id', component: PokemonIndividualComponent
    }
];
