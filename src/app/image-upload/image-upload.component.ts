import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.sass']
})
export class ImageUploadComponent{

  constructor(private http: HttpClient) {}

  selectedFile:File;
  // selectedFile:FormData = new FormData()
  onFileSelected(event: any) {
    
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile)
  }

  onUpload() {
    const fd = new FormData();
    fd.append("image", this.selectedFile, this.selectedFile.name);
    console.log(fd)
    this.http.post("https://rm2251t9j3.execute-api.us-west-2.amazonaws.com/develop/mosaic", fd).subscribe(res => {console.log(res)})
  }

}
