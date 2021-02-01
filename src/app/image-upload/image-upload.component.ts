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

    this.http.post("https://z4qngk4vj4.execute-api.us-west-2.amazonaws.com/develop", this.selectedFile).subscribe(res => {
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

    var img = document.createElement("img");
  
    myReader.onloadend = (e:any) => {
      this.selectedFile = myReader.result;

      img.src = e.target.result;

      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0 ,0);

      var MAX_WIDTH = 400;
      var MAX_HEIGHT = 400;
      var width = img.width;
      var height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
        }
      } else {
          if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
          }
      }

      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);

      var dataurl = canvas.toDataURL("image/png");
      (document.getElementById('userPic') as HTMLImageElement).src = dataurl;

    }

    myReader.readAsDataURL(file);
  }
}
