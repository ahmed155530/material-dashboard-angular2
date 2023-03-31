import { ChangeDetectorRef, Injectable, Injector } from '@angular/core';
import { TranslationService } from './translation.service';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Languages } from 'base/constants/Languages';
import { SpinnerService } from './spinner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginatorSize } from 'base/constants/MatPaginatorSize';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  ngUnsubscribe = new Subject<void>();
  public _ref!: ChangeDetectorRef;
  public translationService!: TranslationService;
  public translateService: TranslateService;
  public spinnerService: SpinnerService;
  public activatedRoute: ActivatedRoute;
  public router: Router;
  _name = new BehaviorSubject<string>('');

  Languages = Languages;
  MatPaginatorSize: any = MatPaginatorSize;

  constructor(public injector: Injector) {
    this._ref = this.injector.get(ChangeDetectorRef);
    this.translationService = this.injector.get(TranslationService);
    this.translateService = this.injector.get(TranslateService);
    this.spinnerService = this.injector.get(SpinnerService);
    this.activatedRoute = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);

  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  GetTranslatedName(ArabicName: string, EnglishName: string): BehaviorSubject<string> {
    switch (this.translationService._dir.value) {
      case 'rtl':
        this._name.next(ArabicName);
        break;
      case 'ltr':
        this._name.next(EnglishName);
        break;
      default:
        break;
    }
    return this._name;
  }
}
