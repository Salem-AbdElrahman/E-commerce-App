import {  Component, inject, input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MyTranslateService } from '../../core/services/myTranslate/my-translate.service';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from '../../core/services/flowbite/flowbite.service';


@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive,RouterLink,TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
isLogin=input<boolean>(true)
private readonly authService=inject(AuthService);
private readonly myTranslateService=inject(MyTranslateService);
 readonly translateService=inject(TranslateService);

 constructor(private flowbiteService: FlowbiteService){
 }
 ngOnInit(): void {
  this.flowbiteService.loadFlowbite(flowbite => {
    // Your custom code here

  });
  initFlowbite();
}



logOut():void{
  this.authService.logOut()
}

change(lang:string):void{
this.myTranslateService.changeLang(lang)
}

checkCurrentLang(lang:string):boolean{
  return this.translateService.currentLang === lang
}
}

