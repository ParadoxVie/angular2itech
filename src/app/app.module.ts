import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {MatCardModule} from '@angular/material/card'; 
import { MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component'
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailsComponent } from './components/details/details.component';
import { PanierComponent } from './components/panier/panier.component';

const routes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactComponent},
  {path: 'product/:id',
  component: DetailsComponent},
  {path: 'panier', component: PanierComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    ListComponent,
    ContactComponent,
    ProductDetailComponent,
    HeaderComponent,
    DetailsComponent,
    PanierComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
    
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
