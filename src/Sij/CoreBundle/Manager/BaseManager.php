<?php
namespace Sij\CoreBundle\Manager;

use Symfony\Bundle\FrameworkBundle\Translation\Translator;
use Sij\CoreBundle\Repository\EntityRepository;
use Doctrine\ORM\EntityManager;

/**
 *
 * @author Salaheddine MOUDNI <salaheddine.moudni@gmail.com>
 *
 */
abstract class BaseManager
{
    /**
     *
     * @var EntityManager
     */
    private $em;

    /**
     *
     * @var Translator
     */
    private $translator;
    /**
     *
     * @var EntityRepository
     */

    private $repository;
    /**
     * This function is directly called by the container
     * All repository must be initialised here
     */

    abstract public function initRepositories();

    /**
     * Get the repository
     *
     * @return EntityRepository
     */
    public function getRepository()
    {
        return $this->repository;
    }

    /**
     *  set Entity Manager
     *
     * @param EntityManager $em
     */
    public function setEm($em)
    {
        $this->em = $em;
    }

    /**
     * get Entity Manager
     *
     * @return \Doctrine\ORM\EntityManager $em
     */
    public function getEm()
    {
        return $this->em;
    }

    /**
     *  set Translator
     *
     * @param Translator $translator
     */
    public function setTranslator($translator)
    {
        $this->translator = $translator;
    }

    /**
     * get Tanslator
     *
     * @return Translator $translator
     */
    public function getTranslator()
    {
        return $this->translator;
    }
    /**
     * persist and flush Entity
     *
     * @param mixed $entity
     */
    public function persistAndFlush($entity)
    {
        $this->em->persist($entity);
        $this->em->flush();
    }

    /**
     * persist and flush Entity
     *
     * @param mixed $entity
     */
    public function persist($entity)
    {
        $this->em->persist($entity);
    }

    /**
     * detach Entity to Entity Manager
     *
     * @param mixed $entity
     */
    public function detach($entity)
    {
        $this->em->detach($entity);
    }

    /**
     * romove and flush Entity
     *
     * @param mixed $entity
     */
    public function removeAndFlush($entity)
    {
        $this->em->remove($entity);
        $this->em->flush();
    }

    /**
     * desable and flush Entity
     *
     * @param mixed $entity
     */
    public function desableAndFlush($entity)
    {
        $entity->setDeleted(1);
        $this->em->persist($entity);
        $this->em->flush();
    }


    /**
     * remove  Entity
     *
     * @param merge $entity
     */
    public function merge($entity)
    {
        $this->em->merge($entity);
    }

    /**
     * remove  Entity
     *
     * @param merge $entity
     */
    public function clear($entity)
    {
        $this->em->clear($entity);
    }

    /**
     * remove  Entity
     *
     * @param mixed $entity
     */
    public function remove($entity)
    {
        $this->em->remove($entity);
    }

    /**
     * Flush
     */
    public function flush()
    {
        $this->em->flush();
    }
    /**
     *
     * @param string $trans
     * @return string
     */
    public function Trans($trans)
    {
        return $this->getTranslator()->trans($trans);
    }


}
