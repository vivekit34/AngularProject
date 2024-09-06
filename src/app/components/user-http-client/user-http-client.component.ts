import { Component } from '@angular/core';
import { UserHttpService } from '../../services/user-http.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-http-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-http-client.component.html',
  styleUrl: './user-http-client.component.css'
})
export class UserHttpClientComponent {

  url: any="http://localhost:3000/employees";
  users:any;
  constructor(private userHttpService: UserHttpService){}

  ngOnInit(){
    this.userHttpService.getAlluser(this.url).subscribe((response: any)=>{
      this.users= response;
    });
  }

  DeleteUser(userID: any){
    this.userHttpService.deleteUser(this.url, userID);
    this.ngOnInit();
  }
}