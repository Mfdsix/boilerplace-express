FROM node:alpine

WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
COPY src /app/src

RUN npm install
RUN npm run build
COPY ./ ./

CMD ["npm", "start"]