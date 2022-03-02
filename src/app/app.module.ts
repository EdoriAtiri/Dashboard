import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RightPaneComponent } from './components/right-pane/right-pane.component';
import { CtaComponent } from './components/cta/cta.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CommsComponent } from './components/comms/comms.component';
import { OngoingProjectsComponent } from './components/ongoing-projects/ongoing-projects.component';
import { MainComponent } from './components/main/main.component';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    RightPaneComponent,
    CtaComponent,
    CalendarComponent,
    CommsComponent,
    OngoingProjectsComponent,
    MainComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
