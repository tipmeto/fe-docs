FROM node:23-alpine AS builder

WORKDIR /app


COPY package*.json yarn.lock ./
COPY . .

RUN yarn install
RUN yarn build

RUN yarn install --production --frozen-lockfile

FROM nginx:alpine

# Copiar os arquivos estáticos gerados para o Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor a porta que o Nginx irá usar
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
