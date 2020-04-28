FROM node:13.3.0 AS compile-image

WORKDIR /opt/ng
COPY package.json package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH" 

COPY . ./
RUN ng build --prod

FROM nginx

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

## Copy application contents
COPY --from=compile-image /opt/ng/dist/expenses-ui /usr/share/nginx/html

