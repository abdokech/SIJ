<?php

namespace Sij\PostBundle\Workflow\Model;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Lexik\Bundle\WorkflowBundle\Model\ModelInterface;
use Sij\PostBundle\Entity\Post;

class PostModel implements ModelInterface
{
	private $post;

	public function __construct(Post $post)
	{
		$this->post = $post;
	}

	public function getPost()
	{
		return $this->post;
	}

	public function setStatus($status)
	{
		$this->post->setStatus($status);
	}

	public function getStatus()
	{
		return $this->post->getStatus();
	}

	/**
	 * Returns an unique identifier.
	 *
	 * @return mixed
	 */
	public function getWorkflowIdentifier()
	{
		return md5(get_class($this->post).'-'.$this->post->getId());
	}

	/**
	 * Returns data to store in the ModelState.
	 *
	 * @return array
	 */
	public function getWorkflowData()
	{
		return array(
				'post_id' => $this->post->getId(),
				'name' => $this->post->getName(),
				'description' => $this->post->getDescription(),
		);
	}
}