FROM node:26-slim AS builder

WORKDIR /app

RUN npm install --global --force @yarnpkg/cli-dist@4.18.1

COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --immutable

COPY . .
RUN yarn build

FROM nginx:alpine

# Copiar os arquivos estáticos gerados para o Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor a porta que o Nginx irá usar
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
