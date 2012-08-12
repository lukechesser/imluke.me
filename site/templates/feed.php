<?php 

$articles = $pages->find('blog')->children()->visible()->flip()->limit(15);

snippet('feed', array(
	'title' => 'made in the North',
  'link'  => url('blog'),
  'items' => $articles,
  'descriptionExcerpt' => false,
  'descriptionField'  => 'text'
));

?>

