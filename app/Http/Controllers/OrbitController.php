<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrbitController extends Controller
{
    public function home() {
        return view('home');
    }
    public function about() {
        return view('about');
    }
    public function subscribe() {
        return view('subscribe');
    }
    public function contact() {
        return view('contact');
    }
    public function message(Request $request) {
        return view('home', ["formData" => $request]);
    }
    public function contactmessage(Request $request) {
        return view('contact', ["formData" => $request]);
    }
}