export class EventRegDTO{
  private _registrationId: number;
  private _dob:string;
  private _number:string;
  private _eventId: number;
  private _teamId: number;
  private _userName: string;
  private _gameId: number;


  constructor(registrationId: number, dob: string, number: string, eventId: number, teamId: number, userName: string, gameId: number) {
    this._registrationId = registrationId;
    this._dob = dob;
    this._number = number;
    this._eventId = eventId;
    this._teamId = teamId;
    this._userName = userName;
    this._gameId = gameId;
  }


  get registrationId(): number {
    return this._registrationId;
  }

  set registrationId(value: number) {
    this._registrationId = value;
  }

  get dob(): string {
    return this._dob;
  }

  set dob(value: string) {
    this._dob = value;
  }

  get number(): string {
    return this._number;
  }

  set number(value: string) {
    this._number = value;
  }

  get eventId(): number {
    return this._eventId;
  }

  set eventId(value: number) {
    this._eventId = value;
  }

  get teamId(): number {
    return this._teamId;
  }

  set teamId(value: number) {
    this._teamId = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get gameId(): number {
    return this._gameId;
  }

  set gameId(value: number) {
    this._gameId = value;
  }
}
