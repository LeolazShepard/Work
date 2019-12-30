import {EventEmitter, Component,ContentChild,ElementRef, Input, OnInit,Output } from '@angular/core';
import {Post}  from '../app.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 @ContentChild('info', {static:true})infoRef:ElementRef;
 @Input() post: Post;
@Output()removePost=new EventEmitter<number>();
 onRemove(){
	this.removePost.emit(this.post.id);
} 
  constructor() { }
  ngOnInit() {
  	console.log(this.infoRef.nativeElement);
  }

}
