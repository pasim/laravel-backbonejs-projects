<?php

class CityTableSeeder extends Seeder {

  public function run()
  {

    $data = Weather::getLatLonListCityNames();

    DB::table('cities')->insert($data);

  }

}
