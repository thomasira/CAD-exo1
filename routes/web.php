<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrbitController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [OrbitController::class, 'home'])->name('home');
Route::get('/about', [OrbitController::class, 'about'])->name('about');
Route::get('/subscribe', [OrbitController::class, 'subscribe'])->name('subscribe');
Route::get('/contact', [OrbitController::class, 'contact'])->name('contact');

/* 
Route::get('/about', [OrbitController::class, 'about'])->name('about');
Route::get('/article', [OrbitController::class, 'post'])->name('article');
Route::get('/contact', [OrbitController::class, 'contact'])->name('contact');
Route::post('/contact', [OrbitController::class, 'message']); */