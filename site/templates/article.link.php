<?php snippet('header'); ?>

    <?php snippet('menu'); ?>        
           
    <section class="blog">

        <article>
        	<header class="post-meta noBorder">
                <h1><a href="<?php echo $page->customlink() ?>"><?php echo html($page->linktitle()) ?></a></h1>
                Posted on <time datetime="<?php echo $page->date('c') ?>"><?php echo $page->date('d.m.Y'); ?></time>
            </header>
            <div>
				<?php echo kirbytext($page->text()) ?>
            </div>                        
            <footer class="post-sub">
            	            			
                	<!-- Back to article overview -->
    				<a href="<?php echo url('blog') ?>" class="button">← Back</a>

            </footer>                   
        </article>
    
    </section>        
        
<?php snippet('footer') ?>