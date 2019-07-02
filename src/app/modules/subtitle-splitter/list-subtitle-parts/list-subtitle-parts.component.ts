import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SubtitleSplitterService} from '../../../core/http/services/subtitle-splitter.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list-subtitle-parts',
  templateUrl: './list-subtitle-parts.component.html',
  styleUrls: ['./list-subtitle-parts.component.scss']
})
export class ListSubtitlePartsComponent implements OnInit {
  public url: string;

  public getPartsSubscription: Subscription;

  public project: any;

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
        this.project = res[0];
      }, (error) => {
        this.getPartsSubscription.unsubscribe();
        console.log(error);
      });
  }
}
