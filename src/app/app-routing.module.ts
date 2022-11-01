import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./auth-demo/auth.guard";
import { LoginComponent } from './auth-demo/login/login.component';
const routes: Routes = [
  { path: "auth", loadChildren: () => import('./auth-demo/auth.module').then( m => m.AuthModule) },
  {path:'', redirectTo:'LoginComponent', pathMatch:'full'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
