import { Cron, CronExpression } from '@nestjs/schedule';

export class AppCron {
  @Cron(CronExpression.EVERY_SECOND)
  public foobar(): void {
    console.log('foobar');
  }
}
