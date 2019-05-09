import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  // constructor() {  }

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadMasListado':
          this.router.navigate(['/Juegos/AgilidadMasListado']);
          break;
      case 'Clickea':
          this.router.navigate(['/Juegos/Clickea']);
          break;
      case 'PPT':
          this.router.navigate(['/Juegos/PPT']);
      break;
      case 'Anagrama':
      this.router.navigate(['/Juegos/Anagrama']);
    break;
    case 'Tateti':
    this.router.navigate(['/Juegos/Tateti']);
  break;
    }
  }

 

}
