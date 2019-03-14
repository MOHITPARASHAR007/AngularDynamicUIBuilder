import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../field.interface';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;
  constructor(private userService: UserService) { }
  ngOnInit() {
    console.log('dataUri === ' + this.field.dataUri);
    this.userService.getStringArrayData(this.field.dataUri).subscribe(
      options => this.field.options = options
    );
  }
  isVisible(value) {
    if (value === undefined) {
      return true;
    } else {
      return !(eval(value));
    }
  }
}
