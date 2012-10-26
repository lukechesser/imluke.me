    <?php snippet('header'); ?>

    <?php snippet('menu'); ?>        
           
    <section class="blog">

        <article>
        	<header class="post-meta noBorder">
                <h1><?php echo html($page->title()) ?></h1>
            </header>
            <div>
				<?php echo kirbytext($page->text()) ?>
            </div>                        
            <footer class="post-sub">
            	            			
                	<!-- Back to article overview -->
    				<a href="<?php echo url('madeinthenorth') ?>" class="button">← Back</a>

            </footer>                       
        </article>
    
    </section>        
        
    <?php snippet('footer') ?>

</body>
</html>