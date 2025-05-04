# Etapa 1: Build
FROM node:18 AS builder

# Cria diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante da aplicação
COPY . .

# Faz o build da aplicação
RUN npm run build

# Etapa 2: Runtime
FROM node:18 AS runner

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos necessários do build
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Expõe a porta que o Next.js usa por padrão
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
