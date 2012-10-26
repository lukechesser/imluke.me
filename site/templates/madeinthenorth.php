<?php snippet('header'); ?>

    <?php snippet('menu'); ?>
		
	<section class="blog">

        <?php if(param('category')) {   /*** article overview ***/

            $articles = $pages->find('madeinthenorth')
                            ->children()
                            ->visible()
                            ->filterBy('categories', param('category'), ',')
                            ->flip()
                            ->paginate(6);

                            echo ('<h1 class="category_overview">Category Archives: <em>'), (param('category')), ('</em></h1>');
            } else {                 

            $articles = $pages->find('madeinthenorth')
                            ->children()
                            ->visible()
                            ->flip()
                            ->paginate(6);  
        }?>

        <? foreach($articles as $article): ?>

        <article class="full">
            <?php if($article->template() == 'article.text'): /*** postformat: TEXT ***/ ?>
            <header class="post-meta">
                <h1><a href="<?php echo $article->url() ?>"><?php echo html($article->title()) ?></a></h1>
            </header>
            <p><?php echo excerpt($article->text(), 1000) ?></p>
            <a class="read_more" href="<?php echo $article->url() ?>">Continue reading <i><?php echo html($article->title()) ?></i>...</a>
            
            <?php elseif($article->template() == 'article.project'): /*** postformat: PROJECT ***/ ?>
            <header class="post-meta format_project">
                <h1><a href="<?php echo $article->url() ?>" ><?php echo html($article->title()) ?></a></h1>
            </header>
            <p><?php echo excerpt($article->text(), 1000) ?></p>
            <a class="read_more" href="<?php echo $article->url() ?>">Continue reading <i><?php echo html($article->title()) ?></i>...</a>
            
            <?php elseif($article->template() == 'article.link'): /*** postformat: LINK ***/ ?>
            <header class="post-meta format_link">
                <h1><a href="<?php echo $article->customlink() ?>"><?php echo html($article->linktitle()) ?></a></h1>
            </header>
            <p><?php echo kirbytext($article->text()) ?></p>
            <a class="read_more" href="<?php echo $article->url() ?>">permalink →</a>
            <?php endif ?>            
        </article>

        <?php endforeach ?>

                   
		<? if($articles->pagination()->hasPages()): /*** pagination ***/ ?>
        <nav class="pagination">
        
            <? if($articles->pagination()->hasPrevPage()): ?>
            <a class="button right" href="<?= $articles->pagination()->prevPageURL() ?>">Newer Posts →</a>
            <? endif ?>
            <? if($articles->pagination()->hasNextPage()): ?>
            <a class="button left" href="<?= $articles->pagination()->nextPageURL() ?>">← Older Posts</a>
            <? endif ?>
        
        </nav>
        <? endif ?>                           
    </section>
        
<?php snippet('footer') ?>