import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../services/data.service';

interface Month {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'pb-editbudget',
  templateUrl: './editbudget.component.html',
  styleUrls: ['./editbudget.component.scss']
})
export class EditbudgetComponent implements OnInit {
  selectedValue: string;

  months: Month[] = [
    {value: 'January', viewValue: 'January'},
    {value: 'February', viewValue: 'February'},
    {value: 'March', viewValue: 'March'},
    {value: 'April', viewValue: 'April'},
    {value: 'May', viewValue: 'May'},
    {value: 'June', viewValue: 'June'},
    {value: 'July', viewValue: 'July'},
    {value: 'August', viewValue: 'August'},
    {value: 'September', viewValue: 'September'},
    {value: 'October', viewValue: 'October'},
    {value: 'November', viewValue: 'November'},
    {value: 'December', viewValue: 'December'},
  ];

  constructor(public dialogRef: MatDialogRef<EditbudgetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }

  ngOnInit(): void {
  }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
        '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    // this.dataService.row.title = this.data.title;
    // this.dataService.row.budget = this.data.budget;
    // this.dataService.row.expense = this.data.expense;
    //this.dataService.row.month = this.data.month;
    console.log("This.data");
    console.log(this.data);
    console.log(this.selectedValue);
    this.dataService.updateBudget(this.data.id,{"title":this.data.title,"budget":this.data.budget,"expense":this.data.expense,"month":this.selectedValue});
  }
}
