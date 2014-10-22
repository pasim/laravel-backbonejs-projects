<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('hello');
});

Route::get('info', function()
{
  return View::make('info');
});

Route::get('hello', function()
{
  return View::make('hello');
});

Route::get('/something', 'HomeController@showSomething');

Route::get('faker', 'FakeController@showFaker');
