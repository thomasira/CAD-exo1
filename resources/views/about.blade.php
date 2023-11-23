@extends('master')
@section('title', 'About')
@section('earthnav')
<div data-js-3dnav class="box-3d small">

</div>
@endsection
@section('content')
<main>
    <section class="orange-banner">
        <header>
            <h1>About</h1>
        </header>
        <div>
            <p>This project is a showcase and experimentation of Three.js, a 3D renderer API. Mapping, rendering, camera position and interaction are some of the properties played with. Make no mistake, this is a very simple project as I am new to 3D rendering libraries, I only dabbled briefly in blender and as such, have some knowledge of 3D renderers. The website is wrapped in an MVC architecture using Laravel with blade</p>
        </div>
        <div>
            <h2>List of softwares or libraries used:</h2>
            <ul>
                <li><img src="{{ asset('logos/blender.png') }}" alt="blender"></li>
                <li><img src="{{ asset('logos/threejs.png') }}" alt="three.js"></li>
                <li><img src="{{ asset('logos/laravel.svg') }}" alt="laravel"></li>
            </ul>
        </div>
        <div>
            <h2>References:</h2>
            <div>
                <p><strong>Earth Texture:</strong> <a href="https://planetpixelemporium.com/earth8081.html"> planetpixelemporium.com</a></p>
                <p><strong>Earth Normal Texture:</strong><a href="https://poniesandlight.co.uk/reflect/creating_normal_maps_from_nasa_depth_data/"> poniesandlight.co.uk</a></p>
                <p><strong>Three.js Doc:</strong><a href="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene"> threejs.org</a></p>
                <p><strong>Three.js Helper:</strong><a href="https://tympanus.net/codrops/2022/01/05/crafting-scroll-based-animations-in-three-js/"> tympanus.net</a></p>
            </div>
        </div>
    </section>
</main>


@endsection