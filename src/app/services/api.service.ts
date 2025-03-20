import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { catchError, map, Observable, of } from 'rxjs';
import { ICategory, IProduct } from '../interfaces/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private readonly ApiPaths = {
    products: "https://671bc0a62c842d92c3812f30.mockapi.io/products",
    categories: "https://671bc0a62c842d92c3812f30.mockapi.io/categories",
  };

  constructor(private http: HttpClient) { }

  // Private methods for assistence
  private httpGetWhole<T>(apiPath: string): Observable<T | null> {
    return this.http.get<T>(apiPath).pipe(
      catchError(error => {
        console.error('Error fetching data:', error);
        return of(null as T | null);
      })
    );
  }
  private httpGetById<T>(apiPath: string, id: number): Observable<T | null> {
    return this.http.get<T>(`${apiPath}/${id}`).pipe(
      catchError(error => {
        console.error('Error fetching data:', error);
        return of(null as T | null);
      })
    );
  }
  private httpPost<T>(apiPath: string, objectToPost: T): Observable<boolean> {
    return this.http.post<T>(apiPath, objectToPost).pipe(
      map(() => true),
      catchError(error => {
        console.error('Error posting data:', error);
        return of(false);
      })
    );
  }

  // Public methods
  public httpGetProducts(): Observable<IProduct[] | null> {
    return this.httpGetWhole(this.ApiPaths.products);
  }
  public httpGetProductById(id: number): Observable<IProduct | null> {
    return this.httpGetById(this.ApiPaths.products, id);
  }
  public httpPostNewProduct(newProduct: IProduct): Observable<boolean>{
    return this.httpPost(this.ApiPaths.products, newProduct);
  }
  
  public httpGetCategories(): Observable<ICategory[] | null> {
    return this.httpGetWhole(this.ApiPaths.categories);
  }
  public httpGetCategoryById(id: number): Observable<ICategory | null> {
    return this.httpGetById(this.ApiPaths.categories, id);
  }
  public httpPostNewCategory(newProduct: ICategory): Observable<boolean>{
    return this.httpPost(this.ApiPaths.categories, newProduct);
  }
}

