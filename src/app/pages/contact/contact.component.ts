import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      message: new FormControl()
    });
  }

  onSubmit(e: Event) {
    const formData = new FormData();
    formData.append('name', this.form.value.name);
    formData.append('email', this.form.value.email);
    formData.append('phone', this.form.value.phone);
    formData.append('message', this.form.value.message);

    console.log(formData);
    try {
      this.http.post('https://example.com/mail.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    } catch (error: any) {
      console.log(error)
    }

  }
}
