FROM node:20-alpine

WORKDIR /app

ENV PATH="./node_modules/.bin:$PATH"

COPY . .
RUN npm install
RUN npm run build

CMD ["npm", "start"]