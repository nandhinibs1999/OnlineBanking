import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AddbeneficiaryComponent } from './addbeneficiary/addbeneficiary.component';
import { AddnomineeComponent } from './addnominee/addnominee.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { DepositComponent } from './deposit/deposit.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NomineeComponent } from './nominee/nominee.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TransactionRecordsComponent } from './transaction-records/transaction-records.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ViewallbeneficiaryComponent } from './viewallbeneficiary/viewallbeneficiary.component';
import { ViewallnomineeComponent } from './viewallnominee/viewallnominee.component';

const routes: Routes = [
   { path: 'profile',component: ProfileComponent},
   { path: 'login',component:LoginComponent},
   { path: 'register',component:RegisterComponent},
   { path: 'logout',component:LogoutComponent},
   { path: 'account',component: AccountComponent},
   { path: 'beneficiary',component: BeneficiaryComponent},
   { path: 'beneficiary/addbeneficiary',component: AddbeneficiaryComponent},
   { path: 'beneficiary/viewallbeneficiary',component: ViewallbeneficiaryComponent},
   { path: 'nominee',component: NomineeComponent},
   { path: 'nominee/addnominee',component: AddnomineeComponent},
   { path: 'nominee/viewallnominee',component: ViewallnomineeComponent},
   { path: 'transactions',component: TransactionsComponent},
   { path: 'transactions/deposit',component: DepositComponent},
   { path: 'transactions/fundtransfer',component: FundTransferComponent},
   { path: 'transactions/transactionrecords',component: TransactionRecordsComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
