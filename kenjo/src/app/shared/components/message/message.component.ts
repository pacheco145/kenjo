import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() msg:string = '';
  // msg: string = '';
  showMsg = false;

  constructor() { }

  ngOnInit(): void {
    if (this.msg) this.hideMessage()
    console.log(history.state)
  }

  hideMessage = () => {
    // this.msg = history.state.msg
    this.showMsg = true;
    setTimeout(() => {
      this.showMsg = false;
    }, 2500)
  }

}
