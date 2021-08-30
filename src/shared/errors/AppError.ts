class AppError{
    
    // declaração de duas (2) variáveis apenas de leitura - depois que o objeto é criado
    // mão podemos alterar as variáveis 

    public readonly message: string;
    public readonly statusCode: number;

    // criar o método construtor
   // se não for passado valor para o statusCode, o valor padrão sera 400
    constructor(message: string, statusCode = 400){
        this.message = message
        this.statusCode = statusCode
    }


} 

//exportar classe
export default AppError