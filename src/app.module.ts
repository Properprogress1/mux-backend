import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WalletsModule } from './wallets/wallets.module';
import { PaymentsModule } from './payments/payments.module';
import { LimitsModule } from './limits/limits.module';
import { RecoveryModule } from './recovery/recovery.module';

@Module({
  imports: [UsersModule, WalletsModule, PaymentsModule, LimitsModule, RecoveryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
