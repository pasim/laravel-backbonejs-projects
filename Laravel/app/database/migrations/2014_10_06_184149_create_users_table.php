<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

/**
* Run the migrations.
*
* @return void
*/
	public function up()
	{
		Schema::create('users', function($table)
	    {
	    	$table->engine = 'InnoDB';

	        $table->increments('id')->unsigned();
	        $table->string('email')->unique();
	        $table->string('photo')->nullable()->default(NULL);
	        $table->string('username');
	        $table->string('password');
	        $table->boolean('is_admin')->default(0);
	        $table->timestamps();
	    });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('users');
	}

}
