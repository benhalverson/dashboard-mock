import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { AccountSummaryComponent } from './components/account-summary/account-summary.component';
import { AccountChartComponent } from './components/account-chart/account-chart.component';
import { AccountTransactionsComponent } from './components/account-transactions/account-transactions.component';
import { AccountPaymentsComponent } from './components/account-payments/account-payments.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    AccountSummaryComponent,
    AccountChartComponent,
    AccountTransactionsComponent,
    AccountPaymentsComponent,
    SidebarComponent,
    AccountInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
