import { ModuleWithProviders, NgModule } from '@angular/core';

import { ChartEditorComponent } from './components/chart-editor/chart-editor.component';
import { ChartWrapperComponent } from './components/chart-wrapper/chart-wrapper.component';
import { ControlWrapperComponent } from './components/control-wrapper/control-wrapper.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GoogleChartComponent } from './components/google-chart/google-chart.component';
import { GoogleChartsConfig } from './models/google-charts-config.model';
import { GOOGLE_CHARTS_CONFIG } from './models/injection-tokens.model';

@NgModule({
  declarations: [GoogleChartComponent, ChartWrapperComponent, DashboardComponent, ControlWrapperComponent, ChartEditorComponent],
  exports: [GoogleChartComponent, ChartWrapperComponent, DashboardComponent, ControlWrapperComponent, ChartEditorComponent]
})
export class GoogleChartsModule {
  public static forRoot(config: GoogleChartsConfig = {}): ModuleWithProviders<GoogleChartsModule> {
    return {
      ngModule: GoogleChartsModule,
      providers: [{ provide: GOOGLE_CHARTS_CONFIG, useValue: config }]
    };
  }
}
