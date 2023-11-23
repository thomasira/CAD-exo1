@extends('master')

@section('title', 'Subscribe')

@section('earthnav')
<div data-js-3dnav class="box-3d small"></div>
@endsection

@section('content')
<main>
    <section class="orange-banner">
        <header>
            <h1>Subscribe</h1>
        </header>
        <div>
            <p>Subscribe to the mailing list for this project. It is purely fictional and as of now, the data is not even being processed or saved to a database.</p>
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
                <label>Profile:
                    <select name="profile">
                        <option value="education">Education</option>
                        <option value="professional">Professional</option>
                        <option value="hobby">Hobby</option>
                    </select>
                </label>
                <button type="submit" class="btn">subscribe</button>
            </form>
        </div>
    </section>
</main>
@endsection