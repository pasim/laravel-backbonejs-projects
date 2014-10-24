<?php namespace Birthdays\Weather;

/**
*
*/
class Weather
{


  protected static $key;


  private static $client;

  public function __construct()
  {
    self::$client = new \SoapClient('http://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php?wsdl');
    self::$key = getenv('W_KEY');
  }

  public static function getLatLonListCityNames(){
    /**
     * returns encoded xml
     */
    $data = array();
    $return = self::$client->LatLonListCityNames(1);
    $json = simplexml_load_string($return);
    // if($json instanceof SimpleXMLElement)
    // {
      $cityNameList = explode("|", $json->cityNameList);
      $latLonList = explode(" ",$json->latLonList);
      $values = array_combine($latLonList, $cityNameList);

      foreach ($values as $key => $value) {
        $data[] = array('longlat' => $key, 'city' => $value);
      }
    // }

    return $data;

  }

 /**
  *
  * [getNDFDgen description]
  * @return [type] [description]
  */
  public static function getNDFDgen($latitude, $longitude, $product = 'glance', $startTime, $endTime, $uinit = 'm', $weatherParameters = array()){

    if(empty($weatherParameters)) { return false; }

    $return = self::$client->LatLonListCityNames($latitude, $longitude, $product, $startTime, $endTime, $uinit, $weatherParameters);
    $json = simplexml_load_string($return);

    return $json;

  }

  public static function getHistoricalData($city, $state, $date){

    $url = 'http://api.wunderground.com/api/'.self::$key.'/history_'.$date.'/q/'.$state.'/'.$city.'.json';

    $json = @file_get_contents($url);

    return json_decode($json, true);

  }
}
