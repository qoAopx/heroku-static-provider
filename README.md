# Heroku Static Provider

Static site provider for Heroku.

## Installation

You need sign-in or sign-up to Heroku.

```sh
$ git clone https://github.com/qoAopx/heroku-static-provider.git my-site
$ cd my-site
$ heroku create
$ git push -u heroku master
$ heroku open
```

## Deployment

Add or update files in `/public`.

```sh
$ git add .
$ git commit -a -m 'some commit message'
$ git push heroku master
$ heroku open
```

## Notes

### Adding Basic Auth

```sh
$ heroku config:set USER=username
$ heroku config:set PASS=password
```

## License

MIT

## Based

I referred to [https://github.com/nulltask/heroku-static-provider](https://github.com/nulltask/heroku-static-provider).
It corresponds to [Express 4](https://expressjs.com).
