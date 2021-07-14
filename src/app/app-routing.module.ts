import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './screens/home/home.component';
import { LibrosComponent } from './screens/libros/libros.component';
import { QuejasComponent } from './screens/quejas/quejas.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'libros', component: LibrosComponent},
  { path: 'quejas', component: QuejasComponent},
  { path: 'app-header', component: HeaderComponent},
  { path: 'app-footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
