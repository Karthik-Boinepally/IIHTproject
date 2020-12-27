import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin/admin.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { UserComponent } from './user/user/user.component';
import { CompareDetailsComponent } from './user/compare-details/compare-details.component';
import { CompareChartsComponent } from './user/compare-charts/compare-charts.component';
import { DetailsComponent } from './user/details/details.component';
import { ManageIpoComponent } from './user/manage-ipo/manage-ipo.component';
import { ListCompanyComponent } from './admin/list-company/list-company.component';
import { UpdateDetailsComponent } from './user/update-details/update-details.component';
import { AppService } from './app.service';
import { ChartsOverPeriodComponent } from './user/charts-over-period/charts-over-period.component';

import { FusionChartsModule } from "angular-fusioncharts";
// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as Charts from "fusioncharts/fusioncharts.charts";

import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { SingleCompanyOverDifferentPeriodChartsComponent } from './user/single-company-over-different-period-charts/single-company-over-different-period-charts.component';
import { TwoCompaniesOverSamePeriodChartsComponent } from './user/two-companies-over-same-period-charts/two-companies-over-same-period-charts.component';
import { SingleSectorOverDifferentPeriodChartsComponent } from './user/single-sector-over-different-period-charts/single-sector-over-different-period-charts.component';
import { ImportdataComponent } from './admin/importdata/importdata.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { IpoDisplayComponent } from './common/ipo-display/ipo-display.component';
import { HttpClientModule } from '@angular/common/http';
import { EditIpoComponent } from './admin/edit-ipo/edit-ipo.component';
import { ComparisonChartComponent } from './user/comparison-chart/comparison-chart.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';
import { SignupComponent } from './common/signup/signup.component';
import { LoginComponent } from './common/login/login.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { ManageExchangeComponent } from './admin/manage-exchange/manage-exchange.component';
import { AddExchangeComponent } from './admin/add-exchange/add-exchange.component';
import { ViewCompaniesComponent } from './user/view-companies/view-companies.component';
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    CompareDetailsComponent,
    CompareChartsComponent,
    DetailsComponent,
    ManageIpoComponent,
    ListCompanyComponent,
    UpdateDetailsComponent,
    ChartsOverPeriodComponent,
    SingleCompanyOverDifferentPeriodChartsComponent,
    TwoCompaniesOverSamePeriodChartsComponent,
    SingleSectorOverDifferentPeriodChartsComponent,
    ImportdataComponent,
    ChangePasswordComponent,
    IpoDisplayComponent,
    EditIpoComponent,
    ComparisonChartComponent,
    ManageCompanyComponent,
    SignupComponent,
    LoginComponent,
    UserUpdateComponent,
    ManageExchangeComponent,
    AddExchangeComponent,
    ViewCompaniesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FusionChartsModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
