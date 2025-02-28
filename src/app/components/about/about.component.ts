import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Technology } from './technology';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less'
})
export class AboutComponent {
  technologys: Technology[] = [
    new Technology("C#", undefined, undefined),
    new Technology(".NET Framework (inc. .NET Core)", undefined, undefined),
    new Technology("ASP.NET", undefined, undefined),
    new Technology("NServiceBus & MassTransit", undefined, undefined),
    new Technology("Seq (with NLog and Serilog)", undefined, undefined),
    new Technology("TeamCity and Octopus", undefined, undefined),
    new Technology("Git (Gitlab and AzDO)", undefined, undefined),
    new Technology("Azure Portal", undefined, undefined),
    new Technology("RabbitMQ", undefined, undefined),
    new Technology("Docker", undefined, undefined),
    new Technology("Tyche", undefined, undefined),
    new Technology("Financial Information eXchange (FIX)", undefined, undefined),
    new Technology("Python", undefined, undefined),
    new Technology("Salesforce", undefined, undefined),
    new Technology("Slack API and Teams Webhooks", undefined, undefined),
    new Technology("Zabbix and Solarwinds", undefined, undefined),
    new Technology("Jira and Confluence", undefined, undefined),
    new Technology("WPF and Silverlight", undefined, undefined),
    new Technology("WCF", undefined, undefined),
    new Technology("SQL (SQL Server)", undefined, undefined),
    new Technology("JavaScript / jQuery / TypeScript", undefined, undefined)
  ]
}
