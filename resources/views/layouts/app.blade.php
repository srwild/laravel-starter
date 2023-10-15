<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="@yield('description')">
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        <title>@yield('title') @hasSection('title') | @endif {{ env('APP_NAME') }}</title>
        <style>[x-cloak] {display: none !important}</style>

    </head>
    <body class="@yield('body_classes')">
        @yield('content')
        @yield('extra_js')
    </body>
</html>
