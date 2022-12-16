import { Notification } from "../../src/app/entities/notification";
import { NotificationsRepository } from "../../src/app/repositories/notifications-repositories";


export class InMemoryNotificationsRepository implements NotificationsRepository {
  public notification: Notification[] = []

  async create(notifications: Notification) {
    this.notification.push(notifications)
  }
}
