# Usar a imagem oficial do Node.js como base
FROM node:18

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar os arquivos da aplicação para o diretório de trabalho
COPY . /app

# Instalar as dependências da aplicação
RUN npm install

# Expor a porta se o bot estiver ouvindo em uma porta específica (opcional)
# EXPOSE 3000

# Definir o comando de entrada para o contêiner
CMD ["node", "bot.js"]
