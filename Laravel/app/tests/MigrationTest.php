<?php

class MigrationTest extends TestCase {

  /**
   * A basic functional test example.
   *
   * @return void
   */
  public function testMigrationTables()
  {

    foreach (array('users', 'cities','birthdays') as $value) {
      $this->assertTrue(Schema::hasTable($value));
    }

  }

}
