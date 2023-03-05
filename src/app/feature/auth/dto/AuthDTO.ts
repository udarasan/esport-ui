export class AuthDTO{
  private username?: String;
  private password?: String;

  constructor(username: String, password: String) {
    this.username = username;
    this.password = password;
  }
}
