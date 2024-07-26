import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import {
  AngularSignaturePadModule,
  NgSignaturePadOptions,
} from '@almothafar/angular-signature-pad';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    MatBadgeModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    AngularSignaturePadModule,
  ],
})
export class SidebarComponent {
  private breakpointObserver = inject(BreakpointObserver);

  
  signaturePadOptions: NgSignaturePadOptions = {
    // passed through to szimek/signature_pad constructor
    minWidth: 2,
    canvasWidth: 200,
    canvasHeight: 90,
    backgroundColor: '#fff',
    penColor: '#000',
  };

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  items = [
    { icon: 'dashboard', name: 'Dashboard', badgeNo: 9, isBadges: true },
    { icon: 'bar_chart', name: 'BudgetDashboard', badgeNo: 4, isBadges: true },
    {
      icon: 'insert_drive_file',
      name: 'DashboardForContracts',
      badgeNo: 0,
      isBadges: false,
    },
    {
      icon: 'assessment',
      name: 'ObjectivesDashboard',
      badgeNo: 0,
      isBadges: false,
    },
    { icon: 'pie_chart', name: 'PMDashboard', badgeNo: 0, isBadges: false },
    { icon: 'mail', name: 'Mailbox', badgeNo: 0, isBadges: false },
    {
      icon: 'dashboard_customize',
      name: 'DashboardV1',
      badgeNo: 0,
      isBadges: false,
    },
    {
      icon: 'dashboard_customize',
      name: 'DashboardV2',
      badgeNo: 0,
      isBadges: false,
    },
    { icon: 'view_column', name: 'KarbanView', badgeNo: 0, isBadges: false },
    {
      icon: 'show_chart',
      name: 'AngularHorizontalChart',
      badgeNo: 0,
      isBadges: false,
    },
    {
      icon: 'calendar_today',
      name: 'CalendarView',
      badgeNo: 0,
      isBadges: false,
    },
    { icon: 'chat', name: 'IM', badgeNo: 0, isBadges: false },
    { icon: 'receipt', name: 'Order', badgeNo: 2, isBadges: true },
    { icon: 'flag', name: 'Objective', badgeNo: 10, isBadges: false },
    { icon: 'emoji_events', name: 'Goal', badgeNo: 15, isBadges: false },
    { icon: 'warning', name: 'Risk', badgeNo: 3, isBadges: false },
    { icon: 'work', name: 'Project', badgeNo: 5, isBadges: false },
    { icon: 'check_circle', name: 'Task', badgeNo: 8, isBadges: false },
    { icon: 'group', name: 'Meeting', badgeNo: 1, isBadges: false },
    { icon: 'list', name: 'MyList', badgeNo: 2, isBadges: false },
    { icon: 'note', name: 'Note', badgeNo: 8, isBadges: false },
    { icon: 'search', name: 'Research', badgeNo: 6, isBadges: false },
    { icon: 'event', name: 'Event', badgeNo: 7, isBadges: false },
    {
      icon: 'confirmation_number',
      name: 'Ticket',
      badgeNo: 3,
      isBadges: false,
    },
    { icon: 'check_box', name: 'Checklist', badgeNo: 0, isBadges: false },
    { icon: 'view_agenda', name: 'Karban', badgeNo: 0, isBadges: false },
    { icon: 'schedule', name: 'Scheduler', badgeNo: 0, isBadges: false },
    { icon: 'sync_alt', name: 'ModelFlows', badgeNo: 0, isBadges: false },
    { icon: 'people', name: 'Users', badgeNo: 0, isBadges: false },
    {
      icon: 'swap_horiz',
      name: 'FlowUserMapping',
      badgeNo: 0,
      isBadges: false,
    },
  ];
  riskFactors = [
    'Varicose Veins',
    'Hypertension',
    'Diabetes',
    'Sickle Cell',
    'Fibroids',
    'PID (Pelvic Inflammatory Disease)',
    'Severe Migraine',
    'Heart Disease',
    'Thrombosis/Stroke',
    'Hepatitis',
    'Gall Bladder Condition',
    'Breast Disease',
    'Depression',
    'Allergies',
    'Infertility',
    'Asthma',
    'Epilepsy',
    'Contact Lenses',
    'Contraceptive Complication (specify)',
    'Other (specify)',
  ];
  medicalItems = [
    'Breast Exam',
    'Cardiac Echo',
    'ECG',
    'Gynaecological Exam',
    'Mammogram',
    'Physical Exam',
    'Prostate Exam',
    'Rectal Exam',
    'Sigmoid/Colonoscopy',
    'Retinal Exam',
    'Flu Vaccination',
    'Pneumonia Vaccination',
    'LDL',
    'Hemoglobin',
    'PSA',
  ];
}
