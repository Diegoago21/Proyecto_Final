import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VerificarTokenService } from './../../../Services/verificar-token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  latitud = '5.0766865';
  longitud = '-75.5222831,17';
  rutaUrl!: String;
  url: SafeResourceUrl;
  url2: SafeResourceUrl;
  cedula: String | undefined;

  constructor(private sanitizer: DomSanitizer, private VerificarToken: VerificarTokenService) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.1668764909705!2d' + this.longitud + '!3d' + this.latitud + '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e476fe68261169d%3A0xe41aa422e3edc13f!2sUniversidad%20de%20Manizales!5e0!3m2!1ses!2sco!4v1661384847083!5m2!1ses!2sco');
    this.url2 = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.2140650764145!2d-75.47411902616244!3d5.06902273835688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e476f7aeded91d9%3A0x5de026395c13dd59!2sCl.%2058E%20%236%2C%20Manizales%2C%20Caldas!5e0!3m2!1ses!2sco!4v1694014259926!5m2!1ses!2sco');
  }

  ngOnInit(): void {
    //const rutaUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.1668764909705!2d'+this.longitud+'!3d'+this.latitud+'!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e476fe68261169d%3A0xe41aa422e3edc13f!2sUniversidad%20de%20Manizales!5e0!3m2!1ses!2sco!4v1661384847083!5m2!1ses!2sco'
    this.cedula = this.VerificarToken.obtenerCedulaUsuario();
    console.log(this.cedula);

   /* if (this.cedula == '1053861700') {
      const rutaUrl = this.url
    }
    else if (this.cedula == '123456789') {
    const rutaUrl = this.url2
    }*/ 
  }

}
