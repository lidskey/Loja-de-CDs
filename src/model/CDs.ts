import { CdsController } from "../controller/CdsController";
import { Principal } from "./Principal";



export class CDs extends Principal{

    private _colecionador: boolean;


    constructor(id: number, artista: string, album: string, genero: string, colecionador: boolean) {
        super(id, artista, album, genero)
		this._colecionador = colecionador;
	}


	public get colecionador(): boolean {
		return this._colecionador;
	}

   
	public set colecionador(value: boolean) {
		this._colecionador = value;
	}



    public visualizar(): void {

        super.visualizar();
        console.log(`ID do CD: ${this._colecionador}`)
        

    }


}