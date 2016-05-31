<?php

Route::get('/', function () {
    return view('welcome');
});

Route::auth();

Route::get('/write', 'EntriesController@write');

Route::post('/entry', 'EntriesController@create');

Route::get('/entries', 'EntriesController@get');

Route::delete('/entry/{entry}', 'EntriesController@delete');
