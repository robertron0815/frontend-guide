# stage 1

FROM node:alpine AS compile-image

WORKDIR /opt/ng
COPY ./package.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH" 

COPY . ./
RUN ng build --prod

FROM nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=compile-image /opt/ng/dist/frontendGuide /usr/share/nginx/html

