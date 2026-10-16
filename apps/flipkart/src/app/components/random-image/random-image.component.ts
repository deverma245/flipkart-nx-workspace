import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { distinctUntilChanged, Subject } from 'rxjs';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';
interface ApiResponse {
  message: string;
  status: string;
}
@Component({
  selector: 'app-random-image',
  imports: [JsonPipe],
  templateUrl: './random-image.component.html',
  styleUrl: './random-image.component.scss',
})

export class RandomImageComponent implements OnInit, OnDestroy{
  private readonly destroy$ = new Subject<void>();
  private readonly destroyRef = inject(DestroyRef);
  private fetchClick$ = new Subject<void>();
  private initialUrl = 'https://dog.ceo/api/breeds/image/random';
  readonly imageGeneratorResponse = signal<ApiResponse>({message: '', status: ''});
  readonly imageUrl = computed(() => this.imageGeneratorResponse().message || this.initialUrl);
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getImageUrl();
  }
  getImageUrl() {
    this.fetchClick$.pipe(
        debounceTime(1000),
        switchMap(() => this.http.get<ApiResponse>('https://dog.ceo/api/breeds/image/random')),
        takeUntil(this.destroy$)
      ).subscribe({
      next: (res) => {
        if (res && res.status === 'success') {
          this.imageGeneratorResponse.set(res);
        }
      },
      error: (err) => {
        console.error(err);
      }
    });

  }
  handleClick() {
    console.log('clicked');
    this.fetchClick$.next();
  }
  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }
}

