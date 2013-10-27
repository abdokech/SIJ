<?php

namespace Sij\PdfBundle\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
class ReportingController extends Controller
{
	/**
	 * @Route("/hello/{name}")
	 * @Template()
	 */
	public function indexAction($name)
	{
			 return $this->render('SijPdfBundle:Reporting:index.html.twig', array('name' => $name));
	}
	
	/**
	 * @Route("/{view}/{params}/{name}",name="sij_pdf_render")
	 */
	public function renderAction($view,$params,$name)
	{
		$n = preg_match_all('/(\w+)="([^"]*)"/', $params, $matches);
		
		for($i=0; $i<$n; $i++)
		{
			$param[$matches[1][$i]] = $matches[2][$i];
		}
		$container = $this->container;
		$html = $container->get('templating')->render($view,$param);
	
		return new Response(
				$container->get('knp_snappy.pdf')->getOutputFromHtml($html),
				200,
				array(
						'Content-Type'          => 'application/pdf',
						'Content-Disposition'   => 'attachment; filename="'.$name.'"'
				)
		);
		
	}
	
}
