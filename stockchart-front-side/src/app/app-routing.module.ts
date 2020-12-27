import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
// import { UploadComponent } from './admin/upload/upload.component';

import { ImportdataComponent } from './admin/importdata/importdata.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';


// import { AddCompanyComponent } from './admin/add-company/add-company.component';
// import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
// import { AddStockExchangeComponent } from './admin/add-stock-exchange/add-stock-exchange.component';
// import { ListCompanyComponent } from './admin/list-company/list-company.component';
// import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { UserComponent } from './user/user/user.component';
// import { DetailsComponent } from './user/details/details.component';
// import { UpdateDetailsComponent } from './user/update-details/update-details.component';
// import { ManageIpoComponent } from './user/manage-ipo/manage-ipo.component';
// import { CompareDetailsComponent } from './user/compare-details/compare-details.component';
import { ChartsOverPeriodComponent } from './user/charts-over-period/charts-over-period.component';
import { SingleCompanyOverDifferentPeriodChartsComponent } from './user/single-company-over-different-period-charts/single-company-over-different-period-charts.component';
import { TwoCompaniesOverSamePeriodChartsComponent } from './user/two-companies-over-same-period-charts/two-companies-over-same-period-charts.component';
import { SingleSectorOverDifferentPeriodChartsComponent } from './user/single-sector-over-different-period-charts/single-sector-over-different-period-charts.component';
import { IpoDisplayComponent } from './common/ipo-display/ipo-display.component';
import { EditIpoComponent } from './admin/edit-ipo/edit-ipo.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';
import { ListCompanyComponent } from './admin/list-company/list-company.component';
import { SignupComponent } from './common/signup/signup.component';
import { LoginComponent } from './common/login/login.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { ManageExchangeComponent } from './admin/manage-exchange/manage-exchange.component';
import { AddExchangeComponent } from './admin/add-exchange/add-exchange.component';
import { ViewCompaniesComponent } from './user/view-companies/view-companies.component';
import { CompareChartsComponent } from './user/compare-charts/compare-charts.component';
import { ComparisonChartComponent } from './user/comparison-chart/comparison-chart.component';
import { AuthGuardService } from './service/auth-guard.service';
import { UserAuthGuardService } from './service/user-auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin', component: AdminComponent, canActivateChild:[AuthGuardService],
    children: [
      // { path: '', component: UploadComponent },
      { path: 'importdata', component: ImportdataComponent },
      { path: 'ipo-display', component: IpoDisplayComponent },
      { path: 'edit-ipo', component: EditIpoComponent },
      { path: 'manage-company/:companyID', component: ManageCompanyComponent},
      { path: 'list-company', component: ListCompanyComponent},
      { path: 'manage-exchange', component: ManageExchangeComponent},
      { path: 'add-exchange', component: AddExchangeComponent},
      { path: 'add-ipo', component: EditIpoComponent},
      // { path: 'add-company', component: AddCompanyComponent },
      // { path: 'update-company', component: UpdateCompanyComponent },
      // { path: 'add-stock-exchange', component: AddStockExchangeComponent },
      // { path: 'list-company', component: ListCompanyComponent },
      // { path: 'update-ipo', component: UpdateIpoComponent }
    ]
  },
  {
    path: 'user', component: UserComponent,canActivateChild:[UserAuthGuardService],
         children: [
      // { path: '', component: DetailsComponent },
      // { path: 'details', component: DetailsComponent},
      // { path: 'update-user', component: UpdateDetailsComponent},
      // { path: 'charts-over-period', component: ChartsOverPeriodComponent},
      { path: 'change-password', component: ChangePasswordComponent},
      { path: 'ipo-display', component: IpoDisplayComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'update-user', component: UserUpdateComponent},
      { path: 'view-companies', component: ViewCompaniesComponent},
      { path: 'compare-companies', component: ComparisonChartComponent},
      { path: 'user-update', component: UserUpdateComponent},
      { path: 'change-password', component: ChangePasswordComponent},

      // { path: 'manage-ipo', component: ManageIpoComponent},
      // { path: 'compare-details', component: CompareDetailsComponent }

    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
