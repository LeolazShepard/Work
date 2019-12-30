import { Component } from '@angular/core';

export interface Post{
	title:string;
	text:string;
	id?:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	posts: Post[]=[
		{title:'Хочу вивчити Ангуляр', text:'Поки що вчусь', id:1 },
		{title:'Наступний урок', text:'Докладно разказують про дерективи і пайпи', id:2 }
	]
  updatePosts(post:Post){
    this.posts.unshift(post);
console.log('Post:', post)
  }
  onRemove(id:number){
    this.posts= this.posts.filter(p=>p.id!==id);
  }

    // title = 'app-for-ruscourse';
  // bckgroundTogle=false;
  // color:string;
  // show=true;
  // arr=[1, 1, 2, 3, 5, 8, 13];
  // now:Date=new Date();
              
}

