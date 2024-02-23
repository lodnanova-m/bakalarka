import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "about",
        component: AboutComponent,
    },
    {
        path: "store",
        component: StoreComponent,
    },
    {
        path: "contact",
        component: ContactComponent,
    },
    {
        path: "**",
        redirectTo: "",
    }

];
