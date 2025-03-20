import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICategory } from '../interfaces/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class AnyToAnyService {

  constructor() { }



  // private dataSource1 = new BehaviorSubject<string>("default data");
  // currentData1 = this.dataSource1.asObservable();


  // changeData1(newData: string) {
  //   this.dataSource1.next(`Changed dataaa ${AnyToAnyService.someNumber}`);
  // }

  /*
  in the components, to add this functionality, when add this service,
  also in ngoninit or in some proper method do this:
  this.anyToAnyService.currentData1.subscribe(data => { this.data = data } );
  */

  // private categoriesSubject = new BehaviorSubject<ICategory[]>([]);
  // currentCategories = this.categoriesSubject.asObservable();
  // setCategories(categoriesToAdd: ICategory[]): void {
  //   this.categoriesSubject.next(categoriesToAdd);
  // }


  ////////////////////////////////////////////////////////////////////////////////////////////

  private categoriesSubject = new BehaviorSubject<ICategory[]>([]);
  public categories = this.categoriesSubject.asObservable();

  public setCategories(newCategories: ICategory[]){
    this.categoriesSubject.next(newCategories ?? []);
  }
}
