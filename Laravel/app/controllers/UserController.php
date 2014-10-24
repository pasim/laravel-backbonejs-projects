<?php

class User extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	 {
    $newUserInfo = Input::all();

    $newUserInfo['username'] = $newUserInfo['name'];
    $newUserInfo['email'] = $newUserInfo['email'];
    $newUserInfo['password'] =  Hash::make("password");

    $user = User::create($newUserInfo);

    return Response::json(array(
      "id" => $user->id
      ));
  }


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		User::where('id','=',$id)->delete();
	}

	public function login(){

    $newUserInfo = Input::all();

    if(Auth::attempt($newUserInfo)){
      $userId = Auth::user()->id;
      $user = User::find($userId);
      $response = Auth::user();
      return Response::json($response);
    }

    return Response::json("Login failed", 401);


}
