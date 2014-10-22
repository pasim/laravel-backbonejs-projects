<?php

class FakeController extends BaseController {

  public function showFaker()
  {
    $faker = Faker\Factory::create('fr_FR');

    $full = array();

    for ($i=0; $i < 10; $i++) {
      $return = new stdClass;

      $return->name = $faker->name;

      $return->address = $faker->address;

      $return->text = $faker->text;

      $return->email = $faker->email;

      $full[] = $return;
    }

    return Response::json($full);
  }

}
