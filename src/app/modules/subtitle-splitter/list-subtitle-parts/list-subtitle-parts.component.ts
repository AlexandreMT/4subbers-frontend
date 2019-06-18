import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SubtitleSplitterService} from '../../../core/services/subtitle-splitter.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list-subtitle-parts',
  templateUrl: './list-subtitle-parts.component.html',
  styleUrls: ['./list-subtitle-parts.component.scss']
})
export class ListSubtitlePartsComponent implements OnInit {
  public url: string;

  public getPartsSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private subtitleSplitterService: SubtitleSplitterService) { }

  ngOnInit() {
    this.getURL();
  }

  getURL() {
    this.url = this.route.snapshot.paramMap.get('url');
    this.getSubtitleParts();
  }

  getSubtitleParts() {
    if (this.getPartsSubscription) { this.getPartsSubscription.unsubscribe(); }
    this.getPartsSubscription = this.subtitleSplitterService.getSubtitleParts(this.url)
      .subscribe((res) => {
        this.getPartsSubscription.unsubscribe();
        console.log(res);
      }, (error) => {
        this.getPartsSubscription.unsubscribe();
        console.log(error);
      });
  }
}
