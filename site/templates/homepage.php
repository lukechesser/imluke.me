
<!DOCTYPE html>
<!--[if lte IE 8]><html class="ie"><![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> 
<html lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8" />
	<title><?php echo html($page->title()) ?></title>

	<meta name="description" content="<?php echo html($page->description()) ?>" />

	<meta name="robots" content="index, follow" />

	<link rel="shortcut icon" href="<?php echo url('assets/images/favicon.png') ?>" type="image/png" />
	<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
	<link rel="alternate" type="application/rss+xml" href="<?php echo url('feed') ?>" title="made in the North Feed" />

	<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->

	<!-- typekit fonts -->
	<script type="text/javascript" src="//use.typekit.net/mtl3nmq.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

	<?php echo css('assets/styles/homepage.css') ?>

	<!-- symbolset fonts -->
	<?php echo css('assets/webfonts/ss-social.css') ?>
	<?php echo css('assets/webfonts/ss-standard.css') ?>

	<!-- analytics -->
	<script type="text/javascript">
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-33610302-1']);
		_gaq.push(['_trackPageview']);

		(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	</script>

</head>

<body>
	
	<img src="<?php echo url('assets/images/homepage1.jpg') ?>" id="bg" />
	
	<div id="links">
		<div id="location">
			<p>currently in <span><i class="ss-icon">location</i> Montreal, QC</span></p> <!-- when JS geolocation enabled, replace span with <a> -->
		</div> <!-- close id location -->
		
		<div id="social">
			<ul>
				<li><a href="#" title="contact me"><i class="ss-icon ss-social-circle">email</i></a></li>
				<li><a href="#" title="view my portfolio"><i class="ss-icon ss-social-circle">behance</i></a></li>
				<li><a href="#" title="follow me on twitter"><i class="ss-icon ss-social-circle">twitter</i></a></li>
				<li><a href="<?php echo url('madeinthenorth') ?>" title="read my blog"><i class="ss-icon ss-social-circle">tumblr</i></a></li>
			</ul>	
		</div> <!-- close id social -->
	</div> <!-- close id links -->
	
	<div id="content">
		<?php echo kirbytext($page->text()) ?>
	</div> <!-- close id content -->
	
	<script src="<?php echo url('assets/webfonts/ss-social.js') ?>"></script>
	<script src="<?php echo url('assets/webfonts/ss-standard.js') ?>"></script>

</body>
</html>
