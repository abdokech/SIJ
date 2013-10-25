<?php
namespace Sij\CoreBundle\Repository;
use Doctrine\ORM\QueryBuilder;

use Doctrine\ORM\EntityRepository as BaseEntityRepository;

/**
 * 
 *
 * @author Salaheddine MOUDNI <salaheddine.moudni@gmail.com>
 *
 */
class EntityRepository extends BaseEntityRepository
{
    /**
     * @var string
     */
    protected $rootAlias;

    /**
     * Get the root alias to be used in a query
     *
     * @return string
     */
    public function getRootAlias()
    {
        if (null === $this->rootAlias) {
            $this->formatRootAlias();
        }

        return $this->rootAlias;
    }

    /**
     * Returns a select QB.
     *
     * @return QueryBuilder
     */
    public function selectQB()
    {
        return $this->createQueryBuilder($this->getRootAlias());
    }

    /**
     * Returns a select QB.
     *
     * @return QueryBuilder
     */
    public function selectCountQB()
    {
        $qb = $this->createQueryBuilder($this->getRootAlias());
        $qb->select($qb->expr()->count($this->getRootAlias()));

        return $qb;
    }

    /**
     * Creates a rootAlias based on the entity class name.
     *
     */
    protected function formatRootAlias()
    {
        $className = explode('\\', $this->getEntityName());
        $className = end($className);

        $this->rootAlias = strtolower(substr($className, 1));

        if (preg_match_all('#([A-Z])#', $className, $matches)) {
            $this->rootAlias = strtolower(implode($matches[1]));
        }
    }

    /**
     * This function is used to format the property to be used in a query
     *
     * Example: property (enabled) in the class (User), the result of this function will be:  u.enabled
     *
     * @property string $property
     * @return string
     */
    protected function getAliasedProperty($property)
    {
        return sprintf('%s.%s', $this->getRootAlias(), $property);
    }

    /**
     * This function is used to format the parameter to be passed to a queryBuilder expression
     *
     * Example:  parameter (name) => :name
     *
     * @param string $parameter
     * @param string $format
     */
    protected function formatParameter($parameter, $format = ':%s')
    {
        return sprintf($format, $parameter);
    }
    
    /**
     *
     * @param QueryBuilder $qb
     * @param string $property
     * @param integer $ouvrageId
     */
    protected function addEqualFilterToQb(QueryBuilder $qb,$property,$value)
    {
        $qb = $qb->andWhere($qb->expr()->eq($property, $qb->expr()->literal($value)));

        return $qb;
    }
    
    /**
     *
     * @param QueryBuilder $qb
     * @param string $property
     * @param integer $ouvrageId
     */
    protected function addGreaterThanFilterToQb(QueryBuilder $qb,$property,$value)
    {
    	$qb = $qb->andWhere($qb->expr()->gt($property, $qb->expr()->literal($value)));
    
    	return $qb;
    }
    
    /**
     *
     * @param QueryBuilder $qb
     * @param string $property
     * @param integer $ouvrageId
     */
    protected function addInFilterToQb(QueryBuilder $qb,$property,$values)
    {
        $qb = $qb->andWhere($qb->expr()->in($property, $values));
        return $qb;
    }
    
    /**
     *
     * @param QueryBuilder $qb
     * @param string $joinEntity
     * @param string $alias
     * @return QueryBuilder $qb
     */
    protected function addLeftJoinEntityToQb(QueryBuilder $qb,$joinEntity,$alias = null)
    {
        $qb = $qb->leftJoin($joinEntity,$alias);
        return $qb;
    }
    
    /**
     *
     * @param QueryBuilder $qb
     * @param string $letter
     * @return QueryBuilder
     */
    protected function addOrderByFilterToQb(QueryBuilder $qb,$field,$order)
    {
        $qb = $qb->addOrderBy($field,$order);
        return $qb;
    }

}
