FROM node:20-alpine

WORKDIR /FEC-South-Face

ENV PATH = "./node_modules/bin:$PATH"

COPY . .
RUN npm i && npm run build

CMD [ "npm", "start" ]
