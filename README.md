# carboncap

## Instructions
Use Node 12 to install and run the application. Personally I use yarn.

I've removed the .env from .gitignore to make sure the app works out of the box. Obviously
this is not standard procedure and a .env should never be in the repo, but in this case it doesn't contain any major secrets and it 
makes running the project easier without adding work for the reviewer(s).

Seeing as the layout/font/styling isn't yet final, I've not paid too much attention to that aspect. I've tried it make it "work" first and
foremost. That being said: the application doesn't work completely. All inputs work and the correct data ends up in the correct method, 
but it's not clear to me which endpoint I need to post the new data. The "endgame" method is found in `Home > handleSubmit()`. 

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
