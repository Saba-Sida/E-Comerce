import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../interfaces/api-interfaces';
import { AnyToAnyService } from '../../services/any-to-any.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  public categories: ICategory[] = [];

  constructor(public anyToAny: AnyToAnyService){}

  ngOnInit(): void {

    this.anyToAny.categories.subscribe(data => {
      this.categories = data;
      console.log("From categories");
      console.log(data);
    });
  }


  expandCategory(event: Event): void{
    let div = event.target as HTMLElement;
    
    let newElement = document.createElement("div");

    newElement.innerHTML = "Jaba";

    div.appendChild(newElement);
    // last, continue later
  }
}
