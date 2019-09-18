import {Component} from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: string[] = ['Moshe Cohen', 'Yaakov Rabinovitz', 'Yisroel Meir Shechter', 'Aharon Black', 'Avinoam Levy'];
  usersToAdd: string[] = ['Menachem Shechter', 'Gal Shapira', 'Otniel Ben-Knaz', 'Yehuda Black', 'Chaim Zvi Levy', 'Asher Zeev Cohen', 'Avinoam Liberman', 'Gad Man', 'Yair Shalev', 'Effie Dehan'];
  btnText = 'add';

  constructor(){}

  addRandomUser(): void {
    let randomNumber = Math.floor(Math.random() * 10);

    this
      .users
      .push(this.usersToAdd[randomNumber]);
  }

  setBtnText(text: string): void {
    this.btnText = text;
  }

}
