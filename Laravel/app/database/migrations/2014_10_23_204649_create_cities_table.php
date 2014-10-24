<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCitiesTable extends Migration {
/**
* Run the migrations.
*
* @return void
*/
  public function up()
  {
    Schema::create('cities', function($table)
      {
        $table->engine = 'InnoDB';

          $table->increments('id')->unsigned();
          $table->string('city', 100);
          $table->string('longlat', 100);
      });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::drop('cities');
  }

}
