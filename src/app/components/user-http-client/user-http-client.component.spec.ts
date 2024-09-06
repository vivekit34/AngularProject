import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHttpClientComponent } from './user-http-client.component';

describe('UserHttpClientComponent', () => {
  let component: UserHttpClientComponent;
  let fixture: ComponentFixture<UserHttpClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserHttpClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
