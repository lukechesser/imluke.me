<?php snippet('header'); ?>

    <?php snippet('menu'); ?>

    <section class="page">

	  <article class="error">
	    <h1><?php echo html($page->title()) ?></h1>
	    <div><?php echo kirbytext($page->text()) ?></div>
	  </article>

	</section>

<?php snippet('footer') ?>