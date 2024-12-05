import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { MatCardModule } from '@angular/material/card';
import { MARKED_OPTIONS, MarkdownModule } from 'ngx-markdown';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import { postsMock } from '../../mocks/post.mock';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  const mockData = postsMock[0];
  const buttonContent = 'GO TO DETAILS'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent],
      imports: [
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
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    fixture.componentRef.setInput('post', mockData)
    fixture.componentRef.setInput('index', 0)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render element mat-card', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card')).toBeTruthy();
  });

  it('should contains tag list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('span[data-test-id=tag]')).toHaveSize(mockData.tags.length)
  });

  it('should contains title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card-title')).toBeTruthy();
    expect(compiled.querySelector('mat-card-title')?.textContent).toContain(mockData.title);
  });

  it('should contains action button with text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[mat-button]')?.textContent).toContain(buttonContent);
  });

  it('should render markdown editor', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('markdown')).toBeTruthy();
  });

  it('should markdown editor contains post content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('markdown')?.textContent).toContain(mockData.content);
  });

  it('should contains post author', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span[data-test-id=author]')?.textContent).toContain(mockData.author)
  });

  it('should contains published date', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const dateOptions: any = {
      month: "short",
      day: "numeric",
      year: "numeric"
    }
    const date = new Intl.DateTimeFormat("en-US", dateOptions).format(new Date(mockData.publishedAt))
    expect(compiled.querySelector('span[data-test-id=date]')?.textContent).toContain(date)
  });

});

