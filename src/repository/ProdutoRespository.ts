import { Principal } from "../model/Principal"


export interface ProdutoRepository{

    listarTodosProdutos(): void
    listarProdutoPeloID(numero: number): void
    cadastrarProduto(cd: Principal): void
    atualizarProduto(cd: Principal): void
    deletarProduto(numero: number):void



}