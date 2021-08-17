//Iniciando Servidor web com node e TS
import express from "express"
// permite dar permissão para APIs
import cors from "cors"
// criando servidor
let servidor = express()
//servidor usando cors
servidor.use(cors())
//servidor precisa converter em json o conteúdo vindo do front
servidor.use(express.json())

// importar rotas 
import routes from'./routes'
//Utilizando
servidor.use(routes)

// servidor será executado e aguardando pela ultima requisições 
servidor.listen(3333,() =>{
    console.log(`Servidor está voando aqui`)
})