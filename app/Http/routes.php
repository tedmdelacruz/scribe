<?php

Route::get('/', function () {
    return view('welcome');
});

Route::auth();

Route::get('/home', 'HomeController@index');

Route::post('/entry', 'EntriesController@create');
Route::get('/entries', 'EntriesController@get');
Route::delete('/entry/{entry}', 'EntriesController@delete');
