import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../Services/loader.service';
import { ILoaderState } from '../../Helper/ILoaderState';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  public show : boolean;
  private subscription: Subscription;
  constructor(private loaderService: LoaderService) { 
    this.show = false;
  }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
    .subscribe((state: ILoaderState) => {
      this.show = state.show;
    });
 }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
