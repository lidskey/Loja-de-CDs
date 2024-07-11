import { Principal } from "./Principal";


export class CDs extends Principal{

    private _colecionador: number;


    constructor(tipo: string, id: number, artista: string, album: string, genero: string, colecionador: number) {
        super(tipo, id, artista, album, genero)
		this._colecionador = colecionador;
	}


	public get colecionador(): number {
		return this._colecionador;
	}

   
	public set colecionador(value: number) {
		this._colecionador = value;
	}



}