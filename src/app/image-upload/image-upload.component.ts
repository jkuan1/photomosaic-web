import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.sass']
})
export class ImageUploadComponent{

  constructor(private http: HttpClient) {}

  selectedFile:any;
  // selectedFile:FormData = new FormData()
  onFileSelected(event: any) {   
    this.readThis(event.target)
  }

  onUpload() {
    console.log(this.selectedFile);
    this.http.post("https://rm2251t9j3.execute-api.us-west-2.amazonaws.com/develop/mosaic", this.selectedFile).subscribe(res => {console.log(res)})
  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.selectedFile = myReader.result;
    }
    myReader.readAsDataURL(file);
  }
}
