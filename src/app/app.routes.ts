import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component/product-list.component';
import { LoginComponent } from './login-component/login-component';
import { SampleComponent } from './sample/sample';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    {
        path: '',
        component: ProductListComponent,
        canActivate: [authGuard],
        title: "Product List"
    },
    {
        path: 'Login',
        component: LoginComponent,        
        title: "Login Page"
    },
    {
        path: 'Sample',
        component: SampleComponent,        
        title: "Sample Page"
    }

];
