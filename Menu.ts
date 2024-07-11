import { read } from "fs";
import readlinesync = require("readline-sync")

export function main() {


    let  tipoMusical=0, idCD, idGeneroMusical, opcao: number
    let nomeCD, nomeArtista: string;
    
    
    const listacds = ['Greener grass', 'Flower shower', 'Blinded by fame']
    


    while (true) {
        
        console.log("                                                     ");
        console.log("                LOJA DE CDS LILIKA                   ");
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
                console.log(listacds)
                break;
            
            case 2:
                console.log("\nBuscar o CD por ID: ");        
                console.log(idCD)
                 

                switch (tipoMusical) {
                    case 1:

                        console.log("\nOpera: ");
                                           

                                            

                        break;

                    case 2:

                        console.log("\nSertanejo");
                        

                        

                        break;
                    
                    case 3:

                        console.log("Musica Pop");
                        
                        

                        break;
                    
                    case 4:
                        console.log("Axé");
                        
                        

                        break;
                        
                }

                break;

            case 3:
                console.log("\nCadastrar CD")
                
                console.log("Digite o ID do CD:");
                idCD = readlinesync.questionInt(" ")
                console.log("Digite o Gênero Musical do CD: ");
                idGeneroMusical = readlinesync.question(``);
                console.log("Digite o Nome do Artista: ");
                nomeArtista = readlinesync.question(``);
                console.log("Digite o nome do CD: ");
                nomeCD = readlinesync.question(``);

                console.log("CD cadastrado com sucesso!")
                


                
                break;

            case 4:
                console.log("\nAtualizar CD\n");

                console.log("Digite o ID do CD:");
                idCD = readlinesync.questionInt(" ")
                console.log("Digite o Gênero Musical do CD: ");
                idGeneroMusical = readlinesync.question(``);
                console.log("Digite o Nome do Artista: ");
                nomeArtista = readlinesync.question(``);
                console.log("Digite o nome do CD: ");
                idCD = readlinesync.question(``);
                
                console.log("CD atualizado com sucesso!")
                 

                

                break;

            case 5:
                console.log("\nAtualizar Dados do CD\n");
                

                console.log("Digite o o ID do CD:");
                idCD = readlinesync.questionInt(" ")


            case 6:
                console.log("\nDeletar  CD\n");


                console.log("Digite o ID do CD:");
                idCD = readlinesync.questionInt(" ")
                

                break;
            default:
                console.log("\nSaindo...\n");
                               

                keyPress()
                break;
        }
    }
}



    

    export function sobre(): void {
        console.log("\n*****************************************************");
        console.log("Projeto Desenvolvido por: Liara Cristina");
        console.log("Generation Brasil - liara.santos@genstudents.org");
        console.log("github.com/lidskey");
        console.log("*****************************************************");
}
    

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();