import { Component, Output, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import {Post}  from '../app.component';

@Component({
  selector: 'app-post-forn',
  templateUrl: './post-forn.component.html',
  styleUrls: ['./post-forn.component.css']
})
export class PostFornComponent implements OnInit {

@Output() onAdd: EventEmitter<Post>= new EventEmitter<Post>();
@ViewChild('titleInput', {static:false}) inputRef:ElementRef 
@ViewChild('textInput', {static:false}) inputRefText:ElementRef ;
title='';
text='';
  constructor() { }

  ngOnInit() {
  }
addPost(){
	if (this.text.trim()&& this.title.trim()){
		const post: Post={
			title:this.title,
			text:this.text
		}
			this.onAdd.emit(post);


			this.title=this.text='';
	}
}
focusTitle(){
this.inputRef.nativeElement.focus();
}
focusText(){
this.inputRefText.nativeElement.focus();
}
}
