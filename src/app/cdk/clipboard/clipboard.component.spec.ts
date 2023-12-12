import { Clipboard } from '@angular/cdk/clipboard';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ClipboardComponent } from './clipboard.component';

describe('ClipboardComponent', () => {
  let component: ClipboardComponent;
  let fixture: ComponentFixture<ClipboardComponent>;
  let clipboardSpy: jasmine.SpyObj<Clipboard>;

  beforeEach(async () => {
    clipboardSpy = jasmine.createSpyObj('Clipboard', ['copy']);

    await TestBed.configureTestingModule({
      imports: [FormsModule, ClipboardComponent],
      providers: [{ provide: Clipboard, useValue: clipboardSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should copy to clipboard', () => {
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(clipboardSpy.copy).toHaveBeenCalledWith(component.value);
  });
});
