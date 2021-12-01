document.getElementById("button").onclick = function (){
    let name = document.getElementById("name").value;
    let salario = Number (document.getElementById("salario").value);
    let dependentes = Number (document.getElementById("dependentes").value);
    let desconto_INSS; 
    let porcentagem_INSS;
    let porcentagem_IRPF;
    let salario_pos_INSS;
    let desconto_final_IRPF;
    let salario_final;
    let parcela_IRPF;
    let tabela = document.getElementById("tabela");
    if (name!="" && salario!=""){
        if ( salario <= 1100 ){
            porcentagem_INSS = 0.075;
            desconto_INSS = salario * porcentagem_INSS;
        }
        else if ( salario >= 1100.01 && salario <= 2203.48 ){
            porcentagem_INSS = 0.09;
            desconto_INSS = salario * porcentagem_INSS;
        }
        else if ( salario >= 2203.49 && salario <= 3305.22 ){
            porcentagem_INSS = 0.12;
            desconto_INSS = salario * porcentagem_INSS;
        }
        else if ( salario >= 3305.23 && salario <= 6433.57){
            porcentagem_INSS = 0.14;
            desconto_INSS = salario * porcentagem_INSS;
        }
        else if(salario>6433.57){
            porcentagem_INSS = 0.14;
            desconto_INSS = salario * porcentagem_INSS;
        }
        else{
            desconto_INSS = 713.09;
        }        
        salario_pos_INSS = salario - desconto_INSS;
        
        if ( salario_pos_INSS <= 1903.98){
            porcentagem_IRPF = 0.00;
            parcela_IRPF = 0.00;
        }
        else if ( salario_pos_INSS >= 1903.99 && salario_pos_INSS <= 2826.66 ){
            porcentagem_IRPF = 0.075;
            parcela_IRPF = 142.80;
        }
        else if ( salario_pos_INSS >= 2826.67 && salario_pos_INSS <= 3751.05 ){
            porcentagem_IRPF = 0.15;
            parcela_IRPF = 354.80;
        }
        else if ( salario_pos_INSS >= 3751.06 && salario_pos_INSS <= 4664.68){
            porcentagem_IRPF = 0.22;
            parcela_IRPF = 636.13;
        }
        else if ( salario_pos_INSS > 4664.68){
            porcentagem_IRPF = 0.275;
            parcela_IRPF = 869.36
        }
        desconto_final_IRPF = salario_pos_INSS * porcentagem_IRPF - parcela_IRPF;
        salario_final = salario_pos_INSS - desconto_final_IRPF;
        salario = salario.toFixed(2);
        porcentagem_INSS = porcentagem_INSS.toFixed(2);
        desconto_INSS = desconto_INSS.toFixed(2);
        porcentagem_IRPF = porcentagem_IRPF.toFixed(2);
        desconto_final_IRPF = desconto_final_IRPF.toFixed(2);
        salario_final = salario_final.toFixed(2);
        tabela.innerHTML += `
                            <tr class = "limpar">
                            <th>${name}</th>
                            <th>${salario}</th>
                            <th>${porcentagem_INSS}</th>
                            <th>${desconto_INSS}</th>
                            <th>${porcentagem_IRPF}</th>
                            <th>${desconto_final_IRPF}</th>
                            <th>${salario_final}</th>
                            </tr>
                            `                        
        document.getElementById("name").value = null
        document.getElementById("salario").value = null
        document.getElementById("dependentes").value = null
    }
    else{
        alert ("Preencha os Campos para Calcular");
    }
    return false;
}
    document.getElementById("limpar").onclick = function(){
        location.reload();        
    }