import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PostService } from './post.service';

describe('PostService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: PostService = TestBed.get(PostService);
    expect(service).toBeTruthy();
  });
});
