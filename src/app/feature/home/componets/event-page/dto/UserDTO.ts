export class UserDTO{
  private _username:string;
  private _password:string;
  private _status:string;
  private _phoneNo:string;
  private _idPhoto:string;
  private _email:string;
  private _name:string;
  private _roleCode:string;
  private _teamId:string;

  constructor(username: string, password: string, status: string, phoneNo: string, idPhoto: string, email: string, name: string, roleCode: string, teamId: string) {
    this._username = username;
    this._password = password;
    this._status = status;
    this._phoneNo = phoneNo;
    this._idPhoto = idPhoto;
    this._email = email;
    this._name = name;
    this._roleCode = roleCode;
    this._teamId = teamId;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get phoneNo(): string {
    return this._phoneNo;
  }

  set phoneNo(value: string) {
    this._phoneNo = value;
  }

  get idPhoto(): string {
    return this._idPhoto;
  }

  set idPhoto(value: string) {
    this._idPhoto = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get roleCode(): string {
    return this._roleCode;
  }

  set roleCode(value: string) {
    this._roleCode = value;
  }

  get teamId(): string {
    return this._teamId;
  }

  set teamId(value: string) {
    this._teamId = value;
  }
}
