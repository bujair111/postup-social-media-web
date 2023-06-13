import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saidebar',
  templateUrl: './saidebar.component.html',
  styleUrls: ['./saidebar.component.css']
})
export class SaidebarComponent implements OnInit {

  siadeBarWidth: any = false

  @Output() sidebarWidthValue = new EventEmitter<string>();

  constructor(private router: Router) {}


  ngOnInit() {
    const togleBtn = document.querySelector<HTMLElement>("#togleBtn");
    const btn_menu = document.querySelector<HTMLElement>(".btn-menu");
    const side_bar = document.querySelector<HTMLElement>(".sidebar");

    togleBtn?.addEventListener("click", () =>{
      if(this.siadeBarWidth == false){
        this.siadeBarWidth = true
        this.sidebarWidthValue.emit(this.siadeBarWidth)
        console.log(this.siadeBarWidth)
      }
      else{
        this.siadeBarWidth = false
        console.log(this.siadeBarWidth)
        this.sidebarWidthValue.emit(this.siadeBarWidth)


      }

    })

    btn_menu?.addEventListener("click", () => {
      side_bar?.classList.toggle("expand");
      this.changebtn(btn_menu, side_bar);
    });
  }

  changebtn(btn_menu: HTMLElement | null, side_bar: HTMLElement | null) {
    if (btn_menu && side_bar) {
      if (side_bar.classList.contains("expand")) {
        btn_menu.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        btn_menu.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    }
  }

  logout(){
    console.log('logout working')
    localStorage.clear()
    this.router.navigateByUrl('/login')

  }

}
