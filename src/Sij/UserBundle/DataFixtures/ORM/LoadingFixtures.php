<?php

namespace Sij\UserBundle\DataFixtures\ORM;

use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Sij\UserBundle\Entity\User;
use Sij\UserBundle\Entity\Role;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 *
 * @author Salaheddine MOUDNI <salaheddine.moudni@gmail.com>
 *
 */
class LoadingFixtures extends AbstractFixture implements FixtureInterface, ContainerAwareInterface
{
    private $container;

    public function setContainer(ContainerInterface $container = null)
    {
        $this->container = $container;

    }

    private function loadRole($manager, $name, $roleName)
    {
        $role = new Role();
        $role->setName($name);
        $role->setRole($roleName);
        $manager->persist($role);
        $manager->flush();

        return $role;
    }

    private function loadUser($manager, $username,$email, $password, $role)
    {
        $user = new User();
        $user->setUsername($username);
        $user->setEmail($email);
        $user->setSalt(md5(uniqid()));
        $encoder = $this->container->get('security.encoder_factory')->getEncoder($user);
        $user->setPassword($encoder->encodePassword($password, $user->getSalt()));
        $user->addRole($role);

        $manager->persist($user);
        $manager->flush();
    }

    public function load(ObjectManager $manager)
    {
        // Roles:
        $roleUser = $this->loadRole($manager, 'user', 'ROLE_USER');
        $roleDirecteur = $this->loadRole($manager, 'directeur', 'ROLE_DIRECTEUR');
        $roleAdmin = $this->loadRole($manager, 'admin', 'ROLE_ADMIN');
        $roleSuperAdmin = $this->loadRole($manager, 'superadmin', 'ROLE_SUPER_ADMIN');
        // Users:
        $this->loadUser($manager, 'user', 'user@sij.com', 'userpass', $roleUser);
        $this->loadUser($manager, 'provider', 'directeur@sij.com','providerpass', $roleDirecteur);
        $this->loadUser($manager, 'admin', 'admin@sij.com','adminpass', $roleAdmin);
        $this->loadUser($manager, 'superadmin', 'superadmin@sij.com','superadminpass', $roleSuperAdmin);
    }
}
