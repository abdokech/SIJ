<?php

namespace Sij\UserBundle\Controller;


use Sij\UserBundle\Entity\User;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\Security\Core\SecurityContext;

/**
 *
 * @author Salaheddine MOUDNI <salaheddine.moudni@gmail.com>
 */
class SecurityController extends Controller
{

    /**
     * @Route("/login", name="login")
     *
     */
    public function loginAction()
    {
        $request = $this->getRequest();
        $session = $request->getSession();
        // get the login error if there is one
        if ($request->attributes->has(SecurityContext::AUTHENTICATION_ERROR)) {
            $error = $request->attributes->get(SecurityContext::AUTHENTICATION_ERROR);
        } else {
            $error = $session->get(SecurityContext::AUTHENTICATION_ERROR);
            $session->remove(SecurityContext::AUTHENTICATION_ERROR);
        }
        return $this->render('SijUserBundle:Security:login.html.twig', array(
            // last username entered by the user
            'last_username' => $session->get(SecurityContext::LAST_USERNAME),
            'error'         => $error,
        ));
    }

    /**
     * @Route("/login_check", name="login_check")
     *
     */
    public function securityCheckAction()
    {

    }

    /**
     * @Route("/logout", name="logout")
     */
    public function logoutAction()
    {
        //The security layer will intercept this request
        $this->get('request')->getSession()->invalidate();
        return  $this->redirect($this->generateUrl('login'));
    }
    /**
     * @Route("/user/dashboard", name="dashboard")
     */
    public function dashboardAction()
    {
        return $this->render('SijUserBundle:User:dashboard.html.twig', array(
            'var' => 'dashboard'
        ));

    }


	}
