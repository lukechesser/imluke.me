<!DOCTYPE html>
<!--[if lte IE 8]><html class="ie"><![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> 
<html lang="en"> <!--<![endif]-->
<head>
    <meta charset="utf-8" />
    <title><?php echo html($page->title()) ?> | <?php echo html($site->title()) ?></title>
    
    <?php if($page->description() != ''): ?>
    <meta name="description" content="<?php echo html($page->description()) ?>" />
    <?php else: ?>
    <meta name="description" content="<?php echo html($site->description()) ?>" />
    <?php endif ?>
    
    <meta name="robots" content="index, follow" />
    <meta name="author" content="luke chesser" />
    <?php if($page->keywords() != ''): ?>
    <meta name="keywords" content="<?php echo html($page->keywords()) ?>" />
    <?php else: ?>
    	<meta name="description" content="luke chesser, blog, projects, articles, writing, made in the north" />
    <?php endif ?>
    
    <link rel="shortcut icon" href="<?php echo url('assets/images/favicon.png') ?>" type="image/png" />
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
    <link rel="alternate" type="application/rss+xml" href="<?php echo url('feed') ?>" title="made in the North Feed" />
    
    <!-- typekit fonts -->
    <script type="text/javascript" src="//use.typekit.net/mtl3nmq.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>

    <!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
    
    <?php echo css('assets/styles/styles.css') ?>
    
    <!-- ico-weather & ico-time font-->
    <?php echo css('assets/webfonts/MyFontsWebfontsKit.css') ?>
    
	<!-- symbolset fonts -->
	<?php echo css('assets/webfonts/ss-social.css') ?>
	<?php echo css('assets/webfonts/ss-standard.css') ?>

</head>

<body>

    <div id="site">

        <header id="branding">
        	<h1 class="IcoWeather-1"><a href="<?php echo url('madeinthenorth') ?>">V</a></h1>
        </header>