import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, DocumentSnapshot, QuerySnapshot } from '@angular/fire/compat/firestore';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private dbPath = '/posts'

  postsRef: AngularFirestoreCollection<Post>

  constructor(private db: AngularFirestore) {
    this.postsRef = db.collection(this.dbPath)
  }

  getAllSnap(): Observable<QuerySnapshot<Post>> {
    return this.postsRef.get();
  }

  getByPathSnap(path: string): Observable<DocumentSnapshot<Post>> {
    return this.postsRef.doc(path).get() as Observable<DocumentSnapshot<Post>>;
  }


  create(post: Post): Promise<DocumentReference<Post>> {
    return this.postsRef.add(post)
  }

  update(path: string, value: Post): Promise<void> {
    return this.postsRef.doc(path).set(value)
  }

  delete(path: string): Promise<void> {
    return this.postsRef.doc(path).delete()
  }

  deleteAll(): Promise<void> {
    return this.postsRef.doc().delete()
  }
}
