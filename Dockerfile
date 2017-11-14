FROM node:8.2.1-alpine

RUN addgroup -S assistente && adduser -S -g assistente assistente &&\
    npm install --global npm@3.7.5

ENV HOME=/home/assistente

COPY package.json $HOME/app/
RUN chown -R assistente:assistente $HOME/*

USER assistente
WORKDIR $HOME/app
RUN npm cache clean && npm install --silent --progress=false

USER root
COPY . $HOME/app
#RUN chown -R app:app $HOME/*
#USER assistente

CMD ["npm", "start"]