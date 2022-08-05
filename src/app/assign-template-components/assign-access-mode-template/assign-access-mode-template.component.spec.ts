import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssignAccessModeTemplateComponent } from './assign-access-mode-template.component';

describe('AssignAccessModeTemplateComponent', () => {
  let component: AssignAccessModeTemplateComponent;
  let fixture: ComponentFixture<AssignAccessModeTemplateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignAccessModeTemplateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssignAccessModeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
