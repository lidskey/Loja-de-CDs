import { Principal } from "../model/Principal"


export interface ProdutoRepository{

    listarCDs(): void
    procurarPorId(id: number): void 
    cadastrarProduto(cd: Principal): void
    atualizarProduto(cd: Principal): void
    deletarProduto(numero: number):void



}