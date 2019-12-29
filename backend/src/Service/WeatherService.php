<?php

// src/Service/WeatherService.php

namespace App\Service;

use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class WeatherService {

    private $params;

    public function __construct(ParameterBagInterface $params) {
        $this->params = $params;
    }

    public function getWeather() {

        $appId = $this->params->get('app_id_open_weather_map');
        $cityWeather = $this->params->get('city_weather');

        $client = HttpClient::create();
        $response = $client->request('GET', 'http://api.openweathermap.org/data/2.5/weather?q='. $cityWeather .'&APPID=' . $appId . '&lang=es&units=metric');
        $data = $response->toArray();
        $statusCode = $response->getStatusCode();

        $result = [
            'day' => new \DateTime(),
            'city' => $data['name'],
            'country' => $data['sys']['country'],
            'description' => ucfirst($data['weather'][0]['description'] ?: $data['weather']['description']),
            'temp' => round($data['main']['temp'],0),
            'tempMin' => round($data['main']['temp_min'],0),
            'tempMax' => round($data['main']['temp_max'],0),
            'feelsLike' => round($data['main']['feels_like'],0),
            'clouds' => $data['clouds']['all'],
            'pressure' => $data['main']['pressure'],
            'humidity' => $data['main']['humidity'],
            'visibility' => $data['visibility'],
            'wind' => $data['wind']['speed'],
            'icon' => 'http://openweathermap.org/img/wn/' . ($data['weather'][0]['icon'] ?: $data['weather']['icon']) . '@2x.png'
        ];

        return [
            'result' => $result,
            'statusCode' => $statusCode
        ];
    }

}
