import readlinesync = require("readline-sync")
import { CdsController } from "./src/controller/CdsController";
import { CDs } from "./src/model/CDs";
import { Principal } from "./src/model/Principal";

export function main() {


    let artista='', album='', genero='';
    let colecionador;
    let tipo = 0, tipoMusical = 0, opcao, id = 0;
    
    

    const novoCds: CdsController = new CdsController();

    novoCds.cadastrarProduto(new CDs(novoCds.gerarId(),'maria','flowers', 'pop', true))


    while (true) {
        
        console.log("                                                     ");
        console.log("      SEJA BEM VINDE À LOJA DE CDS LILIKA            ");
        console.log("                                                     ");
        console.log("****************************************************");
        console.log("                                                     ");
        console.log("            1 -   Listar todos os CDs                ");
        console.log("            2 -   Buscar o CD por ID                 ");
        console.log("            3 -   Cadastrar CD                       ");
        console.log("            4 -   Atualizar Dados do CD              ");
        console.log("            5 -   Deletar CD                        ");
        console.log("            6 -   Sair                               ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log("\nLOJA DE CDs LILIKA - O passado no presente!");
            sobre();
            process.exit(0);
        }



    
        switch (opcao) {
            case 1:

                console.log("\nListar todos os CDs ");
                novoCds.listarCDs();

                break;
            
            case 2:
                console.log("\nListar por ID: ");   
                id = readlinesync.questionInt(``)
                novoCds.procurarPorId(id);
                 

                keyPress()
                break;

            case 3:
                console.log("\nCadastrar CD\n")
                
                
                console.log("\nDigite o Nome do Artista: \n");
                artista = readlinesync.question();

                console.log("\nDigite o nome do Album: \n");
                album = readlinesync.question();
                console.log("\nDigite o Gênero Musical do CD: \n");
                genero = readlinesync.question();
                console.log("\nÉ item de colecionador? Y/N\n")
                colecionador = readlinesync.keyInYNStrict();
                console.log(`${colecionador}`)
                
                novoCds.cadastrarProduto(new CDs(novoCds.gerarId(), artista, album, genero, colecionador));

                console.log("\nCD cadastrado com sucesso!\n")
                


                keyPress()
                break;

            case 4:
                console.log("\nAtualizar CD\n");

                //atualizar não está funcionando pois Principal só tem uma herança (CDs)
                console.log("\nDigite o ID do CD:\n");
                id = readlinesync.questionInt(" ")

                console.log("\nDigite o Nome do Artista: \n");
                artista = readlinesync.question();

                console.log("\nDigite o nome do Album: \n");
                album = readlinesync.question();
                console.log("\nDigite o Gênero Musical do CD: \n");
                genero = readlinesync.question();
                console.log("\nÉ item de colecionador? Y/N\n")
                colecionador = readlinesync.keyInYNStrict();
                console.log(`${colecionador}`)

                novoCds.atualizarProduto(new CDs(novoCds.gerarId(), artista, album, genero, colecionador));

                console.log("CD cadastrado com sucesso!")

                
                keyPress()
                break;

            case 5:
                console.log("\nDeletar  CD\n");
                console.log("\nDigite o ID do CD: \n");               
                id = readlinesync.questionInt(``);

                novoCds.deletarProduto(id);
                
                keyPress()
                break;
            default:
                console.log("\nSaindo...\n");
                               

                keyPress()
                break;
        }
    }
}



    

    export function sobre(): void {
        console.log("\n*****************************************************\n");
        console.log("Projeto Desenvolvido por: Liara Cristina");
        console.log("Generation Brasil - liara.santos@genstudents.org");
        console.log("github.com/lidskey");
        console.log("\n*****************************************************\n");
}
    

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();