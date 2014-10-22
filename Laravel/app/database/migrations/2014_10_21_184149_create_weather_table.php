<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWeatherTable extends Migration {

/**
* Run the migrations.
*
* @return void
*/
  public function up()
  {
    Schema::create('weather', function($table)
      {
        $table->engine = 'InnoDB';

          $table->increments('id')->unsigned();
          $table->binary('data');
          $table->integer('birthday_id')->unsigned();
          $table->timestamps();
          $table->foreign('birthday_id')
                  ->references('id')->on('birthdays')
                  ->onUpdate('cascade')
                  ->onDelete('cascade');
      });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::table('weather', function($table)
    {
      $table->dropForeign('weather_birthday_id_foreign');
    });
    Schema::drop('weather');
  }

}
