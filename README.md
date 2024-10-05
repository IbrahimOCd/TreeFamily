#  Famiree is a PHP Family Tree

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/malamalca/famiree/actions/workflows/ci.yml/badge.svg)](https://github.com/malamalca/arhint/famiree/workflows/ci.yml)
[![codecov](https://codecov.io/gh/malamalca/famiree/branch/master/graph/badge.svg?token=x40FDnnbCp)](https://codecov.io/gh/malamalca/famiree)
[![Total Downloads](https://img.shields.io/packagist/dt/malamalca/famiree.svg?style=flat-square)](https://packagist.org/packages/malamaca/famiree)

Simple open source family tree web application [Famiree](https://famiree.org)

The source code can be found here: [malamalca/famiree](https://github.com/malamalca/famiree).

![alt text](https://github.com/malamalca/famiree/raw/master/example.png)

## Installation

1. Download [Composer](https://getcomposer.org/doc/00-intro.md) or update `composer self-update`.
2. Run `php composer.phar create-project malamalca/famiree --no-dev`.

If Composer is installed globally, run

```bash
composer create-project malamalca/famiree --no-dev
```

You can now either use your machine's webserver to view the default home page, or start
up the built-in webserver with:

```bash
bin/cake server -p 8765
```

Then visit `http://localhost:8765` to see the welcome page.

## Configuration

Read and edit `config/app.php` and setup the `'Datasources'` and any other
configuration relevant for your application.

