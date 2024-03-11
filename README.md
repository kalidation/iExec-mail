# Docs

## 1. Install

you need Node 18 or geater to use install all the packages without any issues.

- clone the project
- npm install
- npm run dev to run the project in dev mode
- npm run test to run all tests

## 2. Tools and tech

- **React 18 with typescript V5**
- **Vite V4**
- **React-router-dom V6**
- **Redux V9 and  redux/toolkit V2**
- **Vitest, testing-library/react for testing**

## 3. Folder Architecture

### 3.1 /components

 Contains all the components used in the app, every component has a css file

- #### /comonents/common

 Containes all the common components use in multiple feature components

- #### /comonents/features

 Containes all the components that a define a specific feature

- #### /comonents/layout

 Containes the Layout component that wrapp all pages/routes  

### 3.2 /pages

 Containes all the screens/routes Main and Auth.

### 3.3 /redux

Defines the store of the app with endpoints request;

- #### /redux/app

Defines the store's config

- #### /redux/features

containes every endpoint feature, slices/reducers and actions.

## 4 Some important informations

### 4.1 Reasons to use Redux

For this project i used redux to simplify my global state management ***( It's not a large scale app but i preffer to start with if app will grow up to large scale )***. I Could use context or props drilling but for more readability, maintability and performance i prefered to use Redux.

Also i used the ***createAsyncThunk (toolkit-thunk-middlware)*** for all my endpoints request to manage LifeCycle request.

I didn't use ***RTK-Query*** for a reason, we can discuss that.  

### 4.2 Tests

I wrote two simple and not robuste tests just for me to test the display of my two components.

To achieve this i used ***vitest*** because i'm using vite event if jest is a better choice and also ***testing-library/react*** for rendering my components.

### 5 Dockerizing and serve the app

- I used two ***DockerFile***: One for **dev env** and the other one for **prod env**.
- In prod-DockerFile i used to nginx to serve the serve the image inside containers. 
- All nginx conf is under the **nginx.conf** file 
