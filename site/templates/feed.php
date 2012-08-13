<?php 

$articles = $pages->find('madeinthenorth')->children()->visible()->flip()->limit(15);

snippet('feed', array(
	'title' => 'made in the North',
  'link'  => url('madeinthenorth'),
  'items' => $articles,
  'descriptionExcerpt' => false,
  'descriptionField'  => 'text'
));

?>

