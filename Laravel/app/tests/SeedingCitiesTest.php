<?php

class SeedingCitiesTest extends TestCase {

  /**
   * A basic functional test example.
   *
   * @return void
   */
  public function testSeedingSuccess()
  {

    $cities = DB::table('cities')->get();

    $this->assertTrue(!empty($cities));


  }

}
