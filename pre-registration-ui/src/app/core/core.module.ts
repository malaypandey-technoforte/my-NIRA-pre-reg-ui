import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule ,FormsModule,} from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { FaqCitizenComponent } from "./faq-citizen/faq-citizen.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthInterceptorService } from '../shared/auth-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    FaqComponent,
    ContactComponent,
    FaqCitizenComponent,
  ],
  exports: [HeaderComponent, FooterComponent, SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
