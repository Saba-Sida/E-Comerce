import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { APIService } from './services/api.service';
import { AnyToAnyService } from './services/any-to-any.service';
import { CategoriesComponent } from './components/categories/categories.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsCardsMainContainerComponent } from './components/products-cards-main-container/products-cards-main-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CategoriesComponent,
    HeaderComponent,
    ProductsCardsMainContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'EComerce';

  constructor(public api: APIService, public anyToAny: AnyToAnyService){}

  ngOnInit(): void {
    this.api.httpGetCategories().subscribe(result => {
      this.anyToAny.setCategories(result ?? []);
    });
  }
}
