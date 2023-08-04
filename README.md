## React and Express setup

We have run React(Client/FrontEnd) on `localhost:3000` and Express(Server/BackEnd) on `localhost:3001`
We have set `"proxy":"http://localhost:3001"` in  `client/package.json` to ensure that we can make relative requests to the server and avoid a lot hassle
```
git clone https://github.com/krishnanshagarwal112/react-express-starter.git
cd react-express-starter
```

For client
```
cd client
npm install
```

For server
```
cd server
npm install
```

Let's start both of them (first start server then client)
```
cd server
npm run dev
```
```
cd client
npm start
```
