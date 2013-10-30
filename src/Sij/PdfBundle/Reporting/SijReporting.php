<?php
namespace Sij\PdfBundle\Reporting;
use Symfony\Component\DependencyInjection\Container;
class SijReporting extends \Twig_Extension {
	
	protected $container;
	
	public function __construct(Container $container)
	{
		$this->container    = $container;
	}
	
	/*
	 * Twig va exécuter cette méthode pour savoir quelle(s) fonction(s)
	ajoute notre service
	*/
	public function getFunctions()
	{
		return array(
				'ExportToPdf' => new \Twig_Function_Method($this, 'ExportToPdf')
		);
	}
	/*
	 * La méthode getName() identifie votre extension Twig, elle est
	obligatoire
	*/
	public function getName()
	{
		return 'SijReporting';
		
	}
	/**
	 * 
	 *@param string $view
	 *@param array $params
	 *@param string $name
	 */
	public function ExportToPdf($view,$params,$name) {
		$container = $this->container;
		return $container->get('router')->generate('sij_pdf_render', array('view'=> $view,'params'=>$params,'name'=>$name)); 
	}

}
