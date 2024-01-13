FROM node
WORKDIR /app
# COPY package.json . update this for caching later
COPY . .

ARG NODE_ENV
ARG MONGO_INITDB_ROOT_USERNAME
ARG MONGO_INITDB_ROOT_PASSWORD

RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

WORKDIR /app/backend

ENV PORT 3000
EXPOSE ${PORT}
CMD ["node", "index.ts"] 
