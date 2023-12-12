import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DialogData } from '../interfaces/dialog-data.interface';
import { DialogTemplateComponent } from './dialog-template.component';

describe('DialogTemplateComponent', () => {
  let component: DialogTemplateComponent;
  let fixture: ComponentFixture<DialogTemplateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, DialogTemplateComponent],
      providers: [
        {
          provide: DialogRef,
          useValue: {
            close: jasmine.createSpy('close'),
          },
        },
        {
          provide: DIALOG_DATA,
          useValue: {
            animal: 'dog',
            name: 'test',
          } as DialogData,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have data', () => {
    expect(component.data).toEqual({ animal: 'dog', name: 'test' });
  });

  it('should have dialogRef', () => {
    expect(component.dialogRef).toBeTruthy();
  });

  it('should close dialog', () => {
    component.dialogRef.close();
    expect(component.dialogRef.close).toHaveBeenCalled();
  });
});
