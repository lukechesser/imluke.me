<?php snippet('header') ?>

	<section class="page">

		<article>
			<h1><?php echo html($page->title()) ?></h1>
			<div><?php echo kirbytext($page->text()) ?></div>
		</article>

	</section>

<?php snippet('footer') ?>