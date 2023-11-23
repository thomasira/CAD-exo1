@extends('master')
@section('title', 'Contact')
@section('earthnav')
<div data-js-3dnav class="box-3d small">

</div>
@endsection
@section('content')
<main>
    <section class="orange-banner">
        <header>
            <h1>Contact</h1>
        </header>

    @isset ($formData)
        <div class="result">
            <h2>Thank you for reaching out</h2>
            <p><strong>Name: </strong>{{ $formData->name }}</p>
            <p><strong>Email: </strong>{{ $formData->email }}</p>
            <p><strong>Message: </strong>{{ $formData->message }}</p>
        </div>
    @else
        <div>
            <p>You can send us a direct email if you have any questions about this project.</p>
        </div>
        <div>
            <form method="post">
            @csrf
                <label>Name:
                    <input type="text" name="name">
                </label>
                <label>Email:
                    <input type="email" name="email">
                </label>
                <label class="text-area">Message:
                    <textarea name="message" placeholder="your message..."></textarea>
                </label>
                <button type="submit" class="btn">send</button>
            </form>
        </div>
        <div>
            <p>Orbit will not use your data in any manner. As a matter of fact, The present version of the site doesn't event collect data.</p>
        </div>
    @endisset
    </section>
</main>
@endsection