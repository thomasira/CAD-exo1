@extends('master')
@section('title', 'Home')
@section('content')
<main class="main-home">
    <header>
        <h1>Welcome to Earth</h1>
        
        <p>Please come in!</p>
    </header>
@isset ($formData)
    <div class="result">
        <h2>Thank you for Subscribing</h2>
        <p><strong>Name: </strong>{{ $formData->name }}</p>
        <p><strong>Email: </strong>{{ $formData->email }}</p>
        <p><strong>Profile: </strong>{{ $formData->profile }}</p>
    </div>
@endisset
    <div data-js-3d class="box-3d">

    </div>
</main>
@endsection