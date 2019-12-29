# Aplicación condiciones del clima

_Exámen S1 - Matias Greco_

_Aplicación que obtiene las condiciones climáticas actuales para la ciudad de La Plata._

### Pre-requisitos 📋

- PHP > 7
- Composer (https://getcomposer.org/)
- Yarn (https://yarnpkg.com/)

## Deploy 📦

- Backend
    * composer install --no-dev --optimize-autoloader
    * apuntar servidor a la carpeta /public
- Frontend
    * yarn install
    * configurar dentro del archivo .env.production la url del backend
    * configurar dentro de package.json la url de la aplicación. ej "homepage": "http://localhost/s1app/"
    * yarn build
    * apuntar servidor a la carpeta /build

## Construido con 🛠️

* [React](https://es.reactjs.org/) - Biblioteca de JavaScript
* [Symfony 4](https://symfony.com/) - Framework PHP

## Autor ✒️

* **Matías Greco**