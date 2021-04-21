import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  @Input() buttonTextPrimary: string = 'Primary Action';
  @Input() buttonTextSecondary: string = 'Secondary Action';
  @Input() redirectTo: string = '';
  @Output() userDataEvent = new EventEmitter<FormGroup>();

  userData = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit(): void {
  }

  onSubmit() {
    this.userDataEvent.emit(this.userData);
  }

}
