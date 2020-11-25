import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { InboxMessage } from '../../../models/http/inboxMessage';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  inboxMessagesArr: InboxMessage[];

  constructor(
    private httpServ: HttpService
  ) { }

  ngOnInit() {
    this.getInboxMessages();
  }

  onRefresh(event) {
    this.getInboxMessages(event);
  }

  getInboxMessages(event?) {
    this.httpServ.getInboxMessages().subscribe((res: InboxMessage[]) => {
      this.inboxMessagesArr = res;
      if (event) {
        event.target.complete();
      }
    });
  }

}
