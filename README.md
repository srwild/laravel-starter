# Laravel Starter with DDEV

> [!WARNING]
> This is still progress and needs more testing.

A basic Laravel starter project for folks to get up and running with Laravel. There are many other ways to do this. I found DDEV to be the simplest.

DDEV is wonderful. I use it on all my WordPress too. Messing around with MAMP or using PHP, MySQL, Composer, and Apache with Homebrew is painful. DDEV makes running projects locally much easier. It uses Docker, but you don’t have to know Docker.

## Prerequisites

- Docker (Docker Desktop or [Colima](https://github.com/abiosoft/colima))
- [DDEV](https://ddev.readthedocs.io/en/latest/users/install/docker-installation/)
- Node.js
- [TablePlus](https://github.com/abiosoft/colima) or similar (optional)

## Initial Setup

1. `git clone https://github.com/srwild/laravel-starter.git` clone the repository
2. `cd laravel-starter` enter the project directory
3. `ddev start` start DDEV
4. `cp .env.example .env` duplicate the `.env` **Note:** the example is already setup up for DDEV. Variables will need to be change for other environments.
5. `ddev composer install` install Composer packages.
6. `ddev artisan key:generate` generate the Laravel application key.
7. `npm install` install Node packages.
8. `npm run dev` compile the assets and start the Vite server that will refresh your browser when changes are saved. `npm run build` will only compile the assets.
9. `ddev launch` launch the app in your browser or go to `https://larvel-starter.ddev.site`. You should see the welcome page.

## Optional Next Steps

The purpose of this starter project is to get the SysAdmin work out of the way. There are more steps depending on what you want to use.

- This is setup with vanilla CSS and JavaScript. I leave it up to you if you want to use Sass (SCSS), [Tailwind](https://tailwindcss.com/docs/guides/laravel), or something else. 
- You can also install [Livewire](https://livewire.laravel.com/docs/installation), which is great.
- [Inertia](https://inertiajs.com/server-side-setup) is another option if you want to use a frontend JavaScript like Vue or React. Note that you will need to adjust the file structure for that.

## Miscellaneous

I setup the Vite server to use HTTPS. Safari won’t load the assets unless they are served over HTTPS, it throws CORS errors. The example `.env` uses DDEV’s certs located in `.ddev/traefik/certs`. If you have issues or want to change them you can update the environment variables `VITE_HTTPS_CERT` and `VITE_HTTPS_KEY`. I’ve used [mkcert](https://github.com/FiloSottile/mkcert), then I accidentally found DDEV creates its own. Cool.

If you’re working on the frontend, editing Blade and HTML, Laravel’s view caching gets really annoying and slows you down. Mashing refresh in the browser eventually works or running `ddev artisan optimize:clear`. I have an option to disable caching *completely* in local environments by setting `CACHE_DRIVER=array` and `DISABLE_CACHE=true`. **CAUTION:** you will get Laravel errors occasionally, refreshing the page will solve it. There is most likely a better way to do this. If you know of one, please let me know.
