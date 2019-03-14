import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from './field.interface';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) form: any;

  regConfigTable: FieldConfig[] = [
    {
      type: 'datatable',
      tableData: {
        displayedColumns: ['position', 'name', 'weight'],
        expendedColumns: ['position', 'name', 'weight', 'symbol'],
        data: [
          { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
          { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
          { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
          { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
          { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
          { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
          { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
          { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
          { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
          { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        ],
        paginatorSupported: true,
        pageSizeOptions: [5, 10, 20, 30],
        filterSupported: true,
        sortSupported: true
      }
    }
  ];
  regConfig: FieldConfig[] = [
    {
      type: 'input',
      label: 'Username',
      inputType: 'text',
      name: 'name',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Name Required'
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Accept only text'
        }
      ]
    },
    {
      type: 'input',
      label: 'Email Address',
      inputType: 'email',
      name: 'email',
      hideExpression: 'this.group.get("country").value === "US"',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Email Required'
        },
        {
          name: 'pattern',
          validator: Validators.pattern(
            '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
          ),
          message: 'Invalid email'
        }
      ]
    },
    {
      type: 'input',
      label: 'Password',
      inputType: 'password',
      name: 'password',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Password Required'
        }
      ]
    },
    {
      type: 'radiobutton',
      label: 'Gender',
      name: 'gender',
      options: ['Male', 'Female'],
      dataUri: 'assets/json/Gender.json',
      value: 'Male'
    },
    {
      type: 'date',
      label: 'DOB',
      name: 'dob',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Date of Birth Required'
        }
      ]
    },
    {
      type: 'select',
      label: 'Country',
      name: 'country',
      value: 'UK',
      hideExpression: 'this.group.get("gender").value === "Female"',
      options: ['India', 'UAE', 'UK', 'US'],
      dataUri: 'assets/json/countyDropDown.json'
    },
    {
      type: 'checkbox',
      label: 'Accept Terms',
      name: 'term',
      value: true
    },
    {
      type: 'button',
      label: 'Save'
    },
  ];
}
