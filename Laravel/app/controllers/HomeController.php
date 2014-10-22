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

		$test = class_exists('SoapClient') ? "Done" : "NULL";

		$client = new SoapClient('http://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php?wsdl');
		$result = $client->LatLonListZipCode('71211');


		return View::make('something', array('test' => $test, 'result'=>$result, 'client'=>$client));
	}

}
