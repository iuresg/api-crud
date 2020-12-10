# api-crud

Api simples com postgres, docker, typeorm

Step by step no terminal:

 - 1 npm install
   
 - 2 docker-compose up -d (para rodar container do postgres)
   
   (Precisa do docker e docker-compose instalado)
   
 
 - 3 npm run dev:server (iniciar o servidor)
 
 - 4 npm run typeorm migration:run (Gerar tabelas no banco de dados)
 
  *Build
  
  1 - npm run build
 
 *Rotas
 - localhost:3000/usuarios (post, delete, put, get)
 
