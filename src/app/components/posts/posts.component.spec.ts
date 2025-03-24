import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from '../../app.config';
import { MatGridListModule } from '@angular/material/grid-list';
import { postsMock } from '../../modules/main/mocks/post.mock';
import { of } from 'rxjs';
import { PostService } from '../../modules/main/services/post.service';
import { PostComponent } from '../post/post.component';
import { MatCardModule } from '@angular/material/card';
import { MARKED_OPTIONS, MarkdownModule } from 'ngx-markdown';
import { gfmHeadingId } from 'marked-gfm-heading-id';

const querySnapshotPostMock = {
  docs: [
    {
      data: () => postsMock[0]
    },
    {
      data: () => postsMock[1]
    }
  ]
}

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let mockPostsService: any

  beforeEach(async () => {
    mockPostsService = jasmine.createSpyObj(['getAllSnap']);
    mockPostsService.getAllSnap.and.returnValue(of(querySnapshotPostMock));

    await TestBed.configureTestingModule({
      declarations: [PostsComponent, PostComponent],
      imports: [
        MatGridListModule,
        MatCardModule,
        MarkdownModule.forRoot({
          markedOptions: {
            provide: MARKED_OPTIONS,
            useValue: {
              gfm: true,
              breaks: false,
              pedantic: false,
            }
          },
          markedExtensions: [gfmHeadingId()],
        }),
      ],
      providers: [
        { provide: FIREBASE_OPTIONS, useValue: firebaseConfig },
        { provide: PostService, useValue: mockPostsService }
      ]
    })
      .compileComponents()

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render grid list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-grid-list')).toBeTruthy();
  });

  it(`should return ${querySnapshotPostMock.docs.length} posts from service function`, () => {
    expect(component.posts).toHaveSize(querySnapshotPostMock.docs.length);
  })

  it(`should render ${querySnapshotPostMock.docs.length} grid tile`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('mat-grid-tile')).toHaveSize(querySnapshotPostMock.docs.length)
  })

  it(`should not render grid tile`, () => {
    mockPostsService.getAllSnap.and.returnValue(of([]))

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-grid-tile')).toBeFalsy()
  })


});
