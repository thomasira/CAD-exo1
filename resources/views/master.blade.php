<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Exo simple MVC controller using laravel" />
        <meta name="author" content="Thomas Aucoin-Lo" />
        <title>@yield('title') | Orbit</title>
        <link href="{{ asset('css/main.css') }}" rel="stylesheet" />

        <!-- for three.js -->
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
            @yield('earthnav')
            <div>
                <a href="{{ route('home') }}">Home</a>
                <a href="{{ route('about') }}">About</a>
                <a href="{{ route('subscribe') }}">Subscribe</a>
                <a href="{{ route('contact') }}">Contact</a>
            </div>
        </nav>

        <!-- inject content here -->
        @yield('content')

        <!-- Footer-->
        <footer>
            <div>
                <p><strong>Exo 1 | Orbit</strong></p>
                <p>Cadriciel Web | 2023-11-23</p>
            </div>
            <div>
                <p><strong>Thomas Aucoin-Lo</strong></p>
                <p>e2395387 | gr.22645</p>
            </div>
        </footer>
    </body>

</html>