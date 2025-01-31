import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthenService } from './authen.service';


export const routes: Routes = [
    {
        path:"",component:HomeComponent
    },
    {
        path:"about",component:AboutComponent
    },
    {
        path:"header",component:HeaderComponent
    },
    {
        path:"contact",component:ContactComponent, canActivate:[AuthenService] 
    },
    {
        path:"**",component:NotFoundComponent
    }

];
