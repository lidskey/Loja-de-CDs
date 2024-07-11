import { Principal } from "../model/Principal";
import { ProdutoRepository } from "../repository/ProdutoRespository";
import { CDs } from "../model/CDs";


export class CdsController implements ProdutoRepository{

    private listaCds: Array<Principal> = new Array<Principal>();

    public id: number = 0;


    listarCDs(): void {
        for (let novoCds of this.listaCds) {
            novoCds.visualizar();
        }
        
    }


    gerarId(): number {
        return ++this.id;
        
    }
    cadastrarProduto(cd: Principal): void {
        this.listaCds.push(cd);
        console.log("O CD foi cadastrado com sucesso!");
    }

    atualizarProduto(cd: Principal): void {
        let buscaId = this.buscarNoArray(cd.id);
        if (buscaId !== null) {
            this.listaCds[this.listaCds.indexOf(buscaId)] = cd;
            console.log("O CD foi atualizado com sucesso!")
        } else {
            console.log("\n O CD não foi encontrada! ")
        }
    }

    deletarProduto(id: number): void {
        let buscaId = this.buscarNoArray(id);

        if (buscaId !== null) {
            this.listaCds.splice(this.listaCds.indexOf(buscaId), 1);
            console.log(`\nO CD foi excluído!`)
        } else {
            console.log(`\nO CD não foi encontrado!`)
        }

    }

    public buscarNoArray(numero: number): Principal | null {
        for (let cd of this.listaCds) {
            if (cd.id == numero) return cd;
        }
        return null;
    }
}