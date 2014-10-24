<?php namespace Birthdays\Weather;

use Illuminate\Support\ServiceProvider;

class WeatherServiceProvider extends ServiceProvider {

	/**
	 * Indicates if loading of the provider is deferred.
	 *
	 * @var bool
	 */
	protected $defer = false;

	/**
   * Bootstrap the application events.
   *
   * @return void
   */
  public function boot()
  {
    $this->package('birthdays/weather');
  }

	/**
	 * Register the service provider.
	 *
	 * @return void
	 */
	public function register()
	{
		$app = $this->app;

		$app['weather'] = $app->share(function($app){
			return new Weather;
		});

		$app->booting(function()
		{
			$loader = \Illuminate\Foundation\AliasLoader::getInstance();
			$loader->alias('Weather', 'Birthdays\Weather\Facades\Weather');
		});
	}

	/**
	 * Get the services provided by the provider.
	 *
	 * @return array
	 */
	public function provides()
	{
		return array('weather');
	}

}
