import { Principal } from "../model/Principal"


export interface ProdutoRepository{

    listarCDs(): void
    gerarId(numero: number): void
    cadastrarProduto(cd: Principal): void
    atualizarProduto(cd: Principal): void
    deletarProduto(numero: number):void



}