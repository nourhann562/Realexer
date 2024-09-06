import { BrandComponent } from './layout/pages/brand/brand.component';
import { CartComponent } from './layout/pages/cart/cart.component';
import { CatogriesComponent } from './layout/pages/catogries/catogries.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegesterComponent } from './layout/pages/regester/regester.component';
import { NotfoundComponent } from './layout/addtions/notfound/notfound.component';
import { ProuductComponent } from './layout/pages/prouduct/prouduct.component';
import { gardGuard } from './shared/athunotcation/gaurds/gard.guard';
import { ForgetpassComponent } from './layout/addtions/forgetpass/forgetpass.component';
import { ProuductDetialsComponent } from './layout/addtions/prouduct-detials/prouduct-detials.component';
import { WeshlistComponent } from './layout/addtions/weshlist/weshlist.component';
import { ShopinadressComponent } from './shared/addtions/shopping address/shopinadress.component';
import { AllordersComponent } from './shared/addtions/allorders/allorders.component';

export const routes: Routes = [
    {path:"", redirectTo:'home',pathMatch:'full' },
    {path:'home' ,component:HomeComponent , canActivate:[gardGuard]},
    {path:'favourit' ,component:WeshlistComponent , canActivate:[gardGuard]},
    {path:'prouductdetials/:id' ,component:ProuductDetialsComponent , canActivate:[gardGuard]},
    {path:'proud' ,component:ProuductComponent ,canActivate:[gardGuard]},
    {path:'cart' ,component:CartComponent ,canActivate:[gardGuard]},
    {path:'shoping/:cartId' ,component:ShopinadressComponent ,canActivate:[gardGuard]},
    {path:'allorders' ,component:AllordersComponent,canActivate:[gardGuard]},
    {path:'catogries' ,component:CatogriesComponent ,canActivate:[gardGuard]},
    {path:'brand' ,component:BrandComponent ,canActivate:[gardGuard]},
    {path:'login' ,component:LoginComponent},
    {path:'forgetPass' ,component:ForgetpassComponent},
    {path:'regest' ,component:RegesterComponent},
    {path:'**' ,component:NotfoundComponent}
];
