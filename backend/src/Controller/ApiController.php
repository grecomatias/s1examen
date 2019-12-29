<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use FOS\RestBundle\View\View;
use App\Service\WeatherService;

/**
 * Api controller.
 * @Route("/api")
 */
class ApiController extends FOSRestController {

    /**
     * @Rest\Get("/weather")
     * @return View
     */
    public function wheaterAction(WeatherService $weatherService) {
        $response = $weatherService->getWeather();

        return View::create($response['result'], $response['statusCode']);
    }

}
