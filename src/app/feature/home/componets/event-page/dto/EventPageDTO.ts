export class EventPageDTO{
  private eventId?: number;
  private gameId?: Object;
  private eventType?: String;
  private isPaid?: String;
  private payment?: String;
  private eventName?: String;
  private startTime?: String;
  private endTime?: String;
  private country?: String;
  private location?: String;
  private organizer?: String;
  private description?: String;
  private eventImage?: String;


  constructor(eventId: number, gameId: Object, eventType: String, isPaid: String, payment: String, eventName: String, startTime: String, endTime: String, country: String, location: String, organizer: String, description: String, eventImage: String) {
    this.eventId = eventId;
    this.gameId = gameId;
    this.eventType = eventType;
    this.isPaid = isPaid;
    this.payment = payment;
    this.eventName = eventName;
    this.startTime = startTime;
    this.endTime = endTime;
    this.country = country;
    this.location = location;
    this.organizer = organizer;
    this.description = description;
    this.eventImage = eventImage;
  }
}
