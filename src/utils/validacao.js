export function validaCampos(valor, validacoes, mensagemPadrao = "padrão errado") {
    const erros = [];
    /* Se o tiver a regra de obrigatório, se for nulo já retorno o erro
    e se for vazio eu adiciono o erro apropriado
    */
    if (validacoes.obrigatorio) {
        if (valor == null) {
            erros.push('Item Obrigatório');
            return erros;
        }
        //Se for vazio, adiciono o erro
        if (valor.trim() === '')
            erros.push('Item Obrigatório');
    }
    /*Se tiver a regra de mínimo,
    adiciono o erro apropriado se o valor estiver fora da regra
    */
    if (validacoes.minimo && valor.length < validacoes.minimo) {
        erros.push(`No mínimo ${validacoes.minimo} caracteres `);
    }
    /*Se tiver a regra de máximo,
    adiciono o erro apropriado se o valor estiver fora da regra
    */
    if (validacoes.maximo && valor.length > validacoes.maximo) {
        erros.push(`No máximo ${validacoes.maximo} caracteres `);
    }
    /*Se tiver a regra de padrão, adiciono o erro com
    a mensagem de padrão, para avisar como preencher corretamente
    */
    if (validacoes.padrao && !valor.match(validacoes.padrao)) {
        erros.push(mensagemPadrao);
    }
    return erros;
}