<?php

// ruta home
Route::get('/', function () {
    return view('welcome');
});

// ruta weapons
Route::get('weapons', [
    'uses' => 'Controller@weapons',
	'as' => 'weapons'
]);
