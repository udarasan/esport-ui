export class GameDTO{
  private gameID?:number;
  private gameName?:string;
  private imageUrl?:string;
  private description?:string;


  constructor(gameID: number, gameName: string, imageUrl: string, description: string) {
    this.gameID = gameID;
    this.gameName = gameName;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}
