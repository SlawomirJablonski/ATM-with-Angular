import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleTileComponent } from './article-title/article-title.component';
import { AddTransactionModule } from './modules/add-transaction/add-transaction.module';
import { TransactionFormComponent } from './modules/add-transaction/transaction-form/transaction-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleTileComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AddTransactionModule
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
