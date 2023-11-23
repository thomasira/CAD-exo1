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
    

  /*   public function about() {
        return view('about');
    }

    public function contact() {
        return view('contact');
    }

    public function post() {
        return view('post');
    }

    public function message(Request $request) {
        return view('contact', ["formData" => $request]);
    } */
}