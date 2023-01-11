import { Component, OnInit } from '@angular/core';
import {CommentsService} from "../services/comments.service"
import {Comment} from "../models/Comment"


@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  comment:Comment = {
    id_comentario: 0,
    id_post: 0,
    id_usuario: 0,
    comentario: "",
  }

  constructor(private commentService:CommentsService) { }

  ngOnInit(): void {
  }

  createComment(){

    const aux = JSON.parse(localStorage.getItem('token') || '{}');
    const aux2 = JSON.parse(localStorage.getItem('idPost') || '{}');
    delete this.comment.id_comentario;

    this.comment.id_usuario= parseInt(aux);

    this.comment.id_post=(aux2)

    if(this.comment.comentario==""){
      alert("Llene todos los campos");
    }
    else{
      this.commentService.saveComment(this.comment).subscribe(
        res => {
          console.log(res);
        },
        err => alert(err),
      )

    }
    localStorage.removeItem("idPost");

  }

}
