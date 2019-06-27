import { Component, Input } from "@angular/core"

@Component({
    selector: 'ap-imagem',
    templateUrl: 'imagem.component.html'
})
export class ImagemComponent {
  @Input() descriptionImagemMergulho = "";

  @Input() urlImagemMergulho = "";

}