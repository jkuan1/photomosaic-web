import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.sass']
})
export class ImageUploadComponent{

  constructor(private http: HttpClient) {

  }

  selectedFile:any;
  
  // selectedFile:FormData = new FormData()
  onFileSelected(event: any) {   
    this.readThis(event.target)
  }

  onUpload() {
    console.log(this.selectedFile);

    this.http.post("https://rm2251t9j3.execute-api.us-west-2.amazonaws.com/develop/mosaic", this.selectedFile).subscribe(res => {
      console.log(res);
      var image = new Image();
      image.onload = function(){
        console.log(image.width); // image is loaded and we have image width 
      }
      image.src = 'data:image/png;base64,'.concat(String(res));
      (document.getElementById('userPic') as HTMLImageElement).replaceWith(image)
    })
    

  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e:any) => {
      this.selectedFile = myReader.result;
      (document.getElementById('userPic') as HTMLImageElement).src = e.target.result
    }

    myReader.readAsDataURL(file);
  }
}
