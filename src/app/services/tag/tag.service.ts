import { Injectable } from '@angular/core';
import { Tag } from '../../models/tag.model';
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TagService {
  private dbPath = '/tags'

  tagsRef: AngularFirestoreCollection<Tag>

  constructor(private db: AngularFirestore) {
    this.tagsRef = db.collection(this.dbPath)
  }

  getAllSnap(): Observable<QuerySnapshot<Tag>> {
    return this.tagsRef.get();
  }


}
