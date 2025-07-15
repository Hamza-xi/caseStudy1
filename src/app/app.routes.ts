import { Routes } from '@angular/router';
import { LoginComponent } from './PersonnelTrainingSchedule/login/login.component';
import { TrainingScheduleComponent } from './PersonnelTrainingSchedule/training-schedule/training-schedule.component';
import { CanComponentDeactivate } from './guards/can-component-deactivate';
import { authguardGuard } from './guards/authguard.guard';
import { roleGuard } from './guards/roleguard.guard';
import { canDeactivateGuard } from './guards/can-deactivate.guard';
import { HeaderComponent } from './PersonnelTrainingSchedule/header/header.component';
import { AddTrainingComponent } from './PersonnelTrainingSchedule/add-training/add-training.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'TrSchedule', component: TrainingScheduleComponent, canActivate: [authguardGuard, roleGuard], canDeactivate: [canDeactivateGuard], data: { roles: ['admin'] } },
    { path: 'TrSheduleList', component: TrainingScheduleComponent },
    { path: 'add-training', component: AddTrainingComponent }


];
