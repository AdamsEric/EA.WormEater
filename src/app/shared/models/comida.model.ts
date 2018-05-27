import { Objeto } from './objeto.model';

export class Comida extends Objeto {
    tipo: TipoComidaEnum;
    valorPontuacao: number;

    constructor (posX: number, posY: number, tipo: TipoComidaEnum) {
        super();
        this.posicao.x = posX;
        this.posicao.y = posY;

        if (tipo === TipoComidaEnum.Maca) {
            this.dimensoes.largura = 50;
            this.dimensoes.altura = 50;
            this.valorPontuacao = 50;
        }
        if (tipo === TipoComidaEnum.Estrela) {
            this.dimensoes.largura = 50;
            this.dimensoes.altura = 50;
            this.valorPontuacao = 50;
        }
    }
}

export enum TipoComidaEnum {
    Maca,
    Estrela
}