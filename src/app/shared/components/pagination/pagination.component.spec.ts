import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent],
    });
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.pagedResult = {
      data: [],
      entryCount: 3,
      mayHaveNextPage: false,
      range: {
        from: 1, to: 3,
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when pagedResult values change', () => {
    it('should not show page-buttons if no more next pages', () => {
      const pageButtons = fixture.nativeElement.querySelector('#page-buttons');
      console.info(pageButtons);
      expect(pageButtons).toBeFalsy();
    });

    // https://material.angular.io/cdk/test-harnesses/overview
    it('should show page-buttons accordingly if mayHaveNextPage is set to `true` from `false`', () => {
      let pageButtons = fixture.nativeElement.querySelector('#page-buttons');
      expect(pageButtons).toBeFalsy();

      component = fixture.componentInstance;
      component.pagedResult = {
        ...component.pagedResult,
        mayHaveNextPage: true,
      };
      fixture.detectChanges();

      pageButtons = fixture.nativeElement.querySelector('#page-buttons'); // refetch static dom
      expect(pageButtons).toBeTruthy();
    });
  });
});
