import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule} from '@angular/router';

const rutas: Routes = [
  {path: 'alumnos', loadChildren: () => import('./alumnos/alumnos.module').then(r => r.AlumnosModule) },
  {path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(r => r.CursosModule) },
  {path: 'clases', loadChildren: () => import('./clases/clases.module').then(r => r.ClasesModule) }
]

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
