export class UserDTO {
  private username?: String;
  private password?: String;
  private status?: String;
  private phoneNo?: String;
  private idPhoto?: String;
  private email?: String;
  private name?: String;
  private roleCode?: String;
  private teamId: any;


  constructor(username: String, password: String, status: String, phoneNo: String, idPhoto: String, email: String, name: String, roleCode: String, teamId: any) {
    this.username = username;
    this.password = password;
    this.status = status;
    this.phoneNo = phoneNo;
    this.idPhoto = idPhoto;
    this.email = email;
    this.name = name;
    this.roleCode = roleCode;
    this.teamId = teamId;
  }
}
