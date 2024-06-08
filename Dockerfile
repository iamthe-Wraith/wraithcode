FROM node:21-alpine3.18
WORKDIR /usr/app

COPY ./ ./

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["node", "build"]