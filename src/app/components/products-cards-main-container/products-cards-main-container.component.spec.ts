import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCardsMainContainerComponent } from './products-cards-main-container.component';

describe('ProductsCardsMainContainerComponent', () => {
  let component: ProductsCardsMainContainerComponent;
  let fixture: ComponentFixture<ProductsCardsMainContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsCardsMainContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsCardsMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
