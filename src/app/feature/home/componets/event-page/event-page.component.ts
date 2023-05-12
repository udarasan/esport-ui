import {
  Component,
  OnInit,
} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from "../../../../shared/event-card/service/event.service";
import {EventRegDTO} from "./dto/EventRegDTO";
import {TeamDTO} from "./dto/TeamDTO";
import {FormControl} from "@angular/forms";
import {loadScript} from "@paypal/paypal-js";



@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit{

constructor(private route:ActivatedRoute,private eventPageService:EventService,private router:Router) {
  console.log('constructor')

}


   isPayButtonDisabled: boolean = false;
   isRegButtonDisabled: boolean = false;
   isEventTypeSolo:boolean=false;

  showFirstDiv = true;
  country:any
  description:any
  endTime:any
  eventId:any
  eventImage:any
  eventName:any
  eventType:any
  isPaid:any;
  payment:any;
  gameId:any
  location:any
  organizer:any
  startTime:any

  teamDataSource!: TeamDTO[];

  //create-event-registration-details
  eveRegNumber=new FormControl()
  eveRegDob=new FormControl()
  teamId: any;
  paypal!:any;


  ngOnInit(): void {
    console.log('onInit')
    let eventId=this.route.snapshot.paramMap.get('id')
    this.eventPageService.getOneEventById(eventId).subscribe((res:any)=>{
      if (res.code=='201'){
        this.eventName=res.data.eventName
        this.country=res.data.country
        this.description=res.data.description
        this.endTime=res.data.endTime
        this.eventId=res.data.eventId
        this.eventImage=res.data.eventImage
        this.eventType=res.data.eventType
        this.isPaid=res.data.isPaid

        if (this.isPaid){
          this.isRegButtonDisabled=true
        }
        if (this.eventType=='Solo'){
          console.log('this.eventType')
          this.isEventTypeSolo=true
        }
        this.payment=res.data.payment
        this.gameId=res.data.gameId
        this.location=res.data.location
        this.organizer=res.data.organizer
        this.startTime=res.data.startTime
      }
    })




    this.eventPageService.getAllTeams().subscribe((res:any)=>{
      if (res.code == 201) {
        this.teamDataSource = res.data;
        console.log('------------')
        console.log(res.data)
        console.log('------------')
      }
    })



  }

  async runPayPal() {

    this.isPayButtonDisabled=true;
    try {
      this.paypal = await loadScript({"client-id": "AeFXB_20TV8N8qgJreAwKE8rB-r53Q_gtuyGTR1a18GMx2mBgxF-Gq9Th2pccHxV4jbdwqKmPBt-aels" });
    } catch (error) {
      console.error("failed to load the PayPal JS SDK script", error);
    }

    if (this.paypal) {
      try {
        const self = this;
        await this.paypal.Buttons({
          createOrder: function(data:any, actions:any) {
            // This function sets up the details of the transaction, including the amount and line item details.
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value:'0.01'
                }
              }]
            });
          },
          onApprove: function(data:any, actions:any) {
            // This function is called when the buyer approves the payment.
            // You can use the data object to verify the payment on the server side.
            // If the payment is successful, enable the registration button.

            // todo: verify payment on server side

            self.isRegButtonDisabled = false;
          }
          //todo chekck payment is success or not

        }).render('#paypal');
        // todo set amount dynamically

      } catch (error) {
        // todo if payment Failed enable isRegButton=ture
        console.error("failed to render the PayPal Buttons", error);
      }
    }
  }

  toggleDiv() {
    this.showFirstDiv = !this.showFirstDiv;
  }
  redirectoTeampage() {
    const url = this.router.serializeUrl(this.router.createUrlTree(['/team']));
    window.open(url, '_blank');

  }
  eventReg() {
    this.eventPageService.creteEventReg(new EventRegDTO(
      0,
      this.eveRegDob.value,
      this.eveRegNumber.value,
      this.eventId,
      this.teamId,
      sessionStorage.getItem('username') || '',
      this.gameId
    )).subscribe(
      (res:any)=>{
        if (res.code==201){
          alert("Registration Is Success!")
        }else {
          alert("Registration Is Failed!")
        }
    })

  }




}

