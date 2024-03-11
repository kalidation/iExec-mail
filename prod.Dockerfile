FROM node:20-alpine AS build-stage
# location of our app in docker
WORKDIR /usr/src/app 
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


FROM nginx:stable-alpine
#Copying the built application into the appropriate directory 
#And config nginx to use custom conf we created
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
ADD  Nginx.conf /etc/nginx/conf.d/default.template

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]



