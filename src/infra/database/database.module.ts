import { Module } from "@nestjs/common";
import { NotificationsRepository } from "src/app/repositories/notifications-repositories";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationRepository } from "./prisma/respositories/prisma-notifications.repository";

@Module({
  providers: [PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationRepository
    }
  ],
  exports: [
    NotificationsRepository
  ]
})
export class DatabaseModule {

}
