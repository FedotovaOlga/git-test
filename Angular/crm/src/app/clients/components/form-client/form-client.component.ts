import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../service/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent {
  public form!: FormGroup;

  public stateClient = Object.values(StateClient);

  public item: Client = new Client();

  constructor(private fb : FormBuilder,
    private clientsService: ClientsService,
    private router: Router

    ){}



  public onSubmit (){
    console.log(this.form.value);
    this.clientsService.add(this.form.value).subscribe(data=>{
      console.log(data);
    });
    this.router.navigate(["/clients"]);

  }

  ngOnInit(){
    this.form = this.fb.group({
      state: [this.item.state],
      tva:[this.item.tva],
      id:[this.item.id],
      name:[this.item.name],
      totalCaHt:[this.item.totalCaHt],
      comment:[this.item.comment],


    })
  }

}
