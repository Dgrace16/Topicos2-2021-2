//Iniciando Servidor web com node e TS
import express from "express"
// permete dar permissão para APIs
import cors from "cors"
// criando servidor
let servidor = express()
//servidor usando cors
servidor.use(cors())
//servidor precisa converter em json o conteudo vinbdo do front
servidor.use(express.json())

// importar rotas 
import routes from'./routes'
//Utilizamdo
servidor.use(routes)

// sertvidor será executado e aguardando pela ultima requisições 
servidor.listen(3333,() =>{
    console.log(`Servidor está voando aqui`)
})