import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssignPatientProfileTemplateComponent } from './assign-patient-profile-template.component';

describe('AssignPatientProfileTemplateComponent', () => {
  let component: AssignPatientProfileTemplateComponent;
  let fixture: ComponentFixture<AssignPatientProfileTemplateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignPatientProfileTemplateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssignPatientProfileTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
