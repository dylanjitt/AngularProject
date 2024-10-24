import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';
import { User ,SocialItem} from '../app.component';
import { NotifsComponent } from './notifs/notifs.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NotifsComponent,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})


export class UserComponent implements OnInit,OnChanges{

  @Input() user!: User;
  @Input() socials!: SocialItem[];

  @Output() removeItem = new EventEmitter<{ userId: string, socialId: number }>(); // Emit userId and socialId
  @Output() addItem = new EventEmitter<{ userId: string, socialId: number }>();   // Emit userId and socialId
  @Output() sendSubType = new EventEmitter<{userId: string, value:string}>();

  userView:boolean=true;
  notifView:boolean=false;

  premium!:boolean

  subThere!:SocialItem[]
  notThere!:SocialItem[]

  loggedIn:boolean=true

  ngOnInit(): void {
    this.filterSocials();
  }

  ngOnChanges(changes: any) {
    console.log(changes);
    if (changes['socials'] || changes['user']) {
      this.filterSocials();
      //this.cdr.detectChanges();  // Manually trigger change detection
    }
  }

  private filterSocials() {
    if (this.socials && Array.isArray(this.socials)) {
      this.subThere = this.socials.filter(social => this.user.subscriptions.includes(social.id));
      this.notThere = this.socials.filter(social => !this.user.subscriptions.includes(social.id));
    } else {
      console.error('Socials input is undefined or not an array');
      this.subThere = [];
      this.notThere = [];
    }
    this.premium=this.user.subscriptionType=='premium'?true:false
  }
  // constructor(){
  //   if (this.socials && Array.isArray(this.socials)) {
  //     // Filter socials based on user subscriptions
  //     this.subThere = this.socials.filter(social => this.user.subscriptions.includes(social.id));
  //     this.notThere = this.socials.filter(social => !this.user.subscriptions.includes(social.id));
  //   } else {
  //     console.error('Socials input is undefined or not an array');
  //     this.subThere = [];
  //     this.notThere = [];
  //   }
  // }

  public toggUser(){
    this.userView=true;
    this.notifView=false
  }

  public toggMessages(){
    this.userView=false;
    this.notifView=true
  }

  public onRemoveItem(id: number) {
    this.removeItem.emit({ userId: this.user.user_id, socialId: id });  // Emit both user_id and social_id

  }

  // Add a new item to the list
  public onAddItem(id: number) {
    this.addItem.emit({ userId: this.user.user_id, socialId: id });  // Emit both user_id and social_id

  }

  public subType(){
    this.premium=!this.premium
    const send = this.premium==true?'premium':'free';
    this.sendSubType.emit({userId:this.user.user_id,value:send})
  }

  public logOut(){
    this.loggedIn=false
  }
}
