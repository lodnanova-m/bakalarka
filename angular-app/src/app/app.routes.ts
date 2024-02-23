import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './store/product/product.component';

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
        children: [
            {
                path: "",
                component: StoreComponent,
            },
            {
                path: ":id",
                component: ProductComponent,
            }
        ],
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
