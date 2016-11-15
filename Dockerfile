FROM mhart/alpine-node-auto

RUN mkdir /app -p
WORKDIR /app

COPY server/package.json .
RUN npm install --production

COPY server/ .

CMD ["npm","start","--production"]
