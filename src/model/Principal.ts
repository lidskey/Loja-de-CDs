import readlinesync=require('readline-sync')

export abstract class Principal{

    
    private _id: number;
    private _artista: string;
    private _album: string;
    private _genero: string;
    
    
    



	constructor(id: number, artista: string, album: string, genero: string) {
		this._id = id;
		this._artista = artista;
		this._album = album;
		this._genero = genero;
		
	}

    
	
   
	public get id(): number {
		return this._id;
	}

    
	public get artista(): string {
		return this._artista;
	}

    
	public get album(): string {
		return this._album;
	}

    
	public get genero(): string {
		return this._genero;
	}

	
    

	public set id(value: number) {
		this._id = value;
	}

   
	public set artista(value: string) {
		this._artista = value;
	}

    
	public set album(value: string) {
		this._album = value;
	}

	public set genero(value: string) {
		this._genero = value;
	}


 
    public visualizar(): void {

        console.log(`ID do CD: ${this._id}`)
        console.log(`Artista: ${this._artista}`)
        console.log(`Album: ${this._album}`)
        console.log(`Gênero Musical: ${this._genero}`)


    }


}