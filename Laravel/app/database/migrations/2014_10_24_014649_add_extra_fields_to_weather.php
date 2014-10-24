<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddExtraFieldsToWeather extends Migration {

  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('weather', function($table)
    {
        $table->integer('city_id')->unsigned();
        $table->foreign('city_id')
                  ->references('id')->on('cities')
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
        $table->dropForeign('weather_city_id_foreign');
        $table->dropColumn('city_id');
    });
  }

}
