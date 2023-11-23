<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Exo simple MVC controller using laravel" />
        <meta name="author" content="Thomas Aucoin-Lo" />
        <title>@yield('title') | Orbit Coka</title>
        <link href="{{ asset('css/main.css') }}" rel="stylesheet" />

        <!-- for three.js import -->
        <script type="importmap">
        {
            "imports": {
            "three": "https://unpkg.com/three@v0.158.0/build/three.module.js",
            "three/addons/": "https://unpkg.com/three@v0.158.0/examples/jsm/"
            }
        }
        </script>
        <script type="module" src="{{ asset('js/main.js') }}"></script>
    </head>
    <body>


        <!-- Navigation-->
        <nav>
            <div>
                <a href="{{ route('home') }}">Home</a>
                <a href="{{ route('about') }}">About</a>
                <a href="{{ route('home') }}">Subscribe</a>
                <a href="{{ route('home') }}">Contact</a>
            </div>
        </nav>

        <!-- inject content here -->
        @yield('content')

        <!-- Footer-->
        <footer>
        </footer>
    </body>


</html>