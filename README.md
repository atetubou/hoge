# hoge

## How to setup

```
npm install # for TypeScript build
```

```
pipenv shell # For python server run
```

## How to generate html/js files.

```
npm run build # dist dir will have static files
```

## How to run

For api serving.

```
gunicorn -k uvicorn.workers.UvicornWorker --reload python_server.main:app
```

For html/javascript serving.

```
npm run serve
```

## misc

Apply formatter using [deno](https://deno.land/#installation).

```
deno fmt $(git ls-files)
```

## references

- https://pixijs.io/examples/#/demos-basic/container.js
- https://pixijs.io/examples/#/graphics/simple.js

## TODO

- [ ] use [prettier](https://prettier.io/)?
- [ ] connect with running binary?
