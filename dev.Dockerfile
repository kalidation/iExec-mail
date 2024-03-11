FROM node:20-alpine

# Set working directory
WORKDIR /app

# get the app's foler and json files and copy them in the appropriate directory
COPY package.json .
COPY package-lock.json .

# install the packages
RUN npm install


COPY . .

EXPOSE 5173

CMD ["npm","run","dev"]
