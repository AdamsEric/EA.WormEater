import { Objeto } from './objeto.model';

export class Jogador extends Objeto {
    private score: number;

    constructor(posX: number, posY: number) {
        super();
        this.score = 0;
        this.posicao.x = posX;
        this.posicao.y = posY;
        this.dimensoes.largura = 320;
        this.dimensoes.altura = 180;
    }
}