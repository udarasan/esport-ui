export class TeamDTO {
  private _teamId:number;
  private _teamName:string;
  private _description:string;
  private _country:string;


  constructor(teamId: number, teamName: string, description: string, country: string) {
    this._teamId = teamId;
    this._teamName = teamName;
    this._description = description;
    this._country = country;
  }

  get teamId(): number {
    return this._teamId;
  }

  set teamId(value: number) {
    this._teamId = value;
  }

  get teamName(): string {
    return this._teamName;
  }

  set teamName(value: string) {
    this._teamName = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }
}
