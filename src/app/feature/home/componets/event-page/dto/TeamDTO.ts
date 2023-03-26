export class TeamDTO {
  private _teamId:number;
  private _teamName:string;

  constructor(teamId: number, teamName: string) {
    this._teamId = teamId;
    this._teamName = teamName;
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
}
