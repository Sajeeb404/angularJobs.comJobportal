import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLogin } from 'src/app/login-form/model';
import { LoginFormService } from 'src/app/login-form/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{


  id!: number;
  post!: UserLogin;
  forms!:FormGroup;

  constructor(private servis:LoginFormService,
    private route: ActivatedRoute,
    private router: Router
    ){

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.servis.find(this.id).subscribe((data: UserLogin)=>{
      this.post = data;
    }); 
    this.forms = new FormGroup({
      id: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      usertype: new FormControl(),
    })
    
  }

  update(){
    this.servis.updateReminder(this.id, this.forms.value).subscribe((res:any) => {
      this.router.navigateByUrl('/Admin/LoginList');
 })
}


  

}
