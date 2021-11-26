import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from './form-error/form-error.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';



@NgModule({
  declarations: [TransactionFormComponent, FormErrorComponent],
  exports: [TransactionFormComponent],  
  imports: [ReactiveFormsModule, CommonModule],
})
export class AddTransactionModule { }
