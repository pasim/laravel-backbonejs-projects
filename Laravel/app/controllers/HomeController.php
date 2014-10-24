<?php

class HomeController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function showWelcome()
	{
		return View::make('hello');
	}

	public function showSomething()
	{

		$id = rand(1,78);
		$cities = DB::table('cities')->where('id', $id)->first();

    $ct = explode(",", $cities->city);

    var_dump($ct);

    list($city,$state) = $ct;

    $city = str_replace(" ", "_", $city);
		$id = rand(1, 78);
		$result = Weather::getHistoricalData($city, $state, '19770709');
		var_dump($result['history']['observations']);
		// dd($latLonList);


	}

}
