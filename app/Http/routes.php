<?php

Route::get('/', function () {
    return view('welcome');
});

Route::auth();

Route::get('/write', function () {
    return view('write');
});

Route::get('/browse', function () {
    return view('browse');
});

Route::post('/entry', 'EntriesController@create');

Route::get('/entries', 'EntriesController@get');

Route::delete('/entry/{entry}', 'EntriesController@delete');
