<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBirthdaysTable extends Migration {

/**
* Run the migrations.
*
* @return void
*/
  public function up()
  {
    Schema::create('birthdays', function($table)
      {
        $table->engine = 'InnoDB';

          $table->increments('id')->unsigned();
          $table->dateTime('date');
          $table->integer('user_id')->unsigned();
          $table->timestamps();
          $table->foreign('user_id')
                  ->references('id')->on('users')
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
    Schema::table('birthdays', function($table)
    {
      $table->dropForeign('birthdays_user_id_foreign');
    });
    Schema::drop('birthdays');
  }

}
