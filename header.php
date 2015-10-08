<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 */
$tRoot = get_bloginfo('template_directory');

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>PROJECTNAME</title>
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

		<!-- Force latest available IE rendering engine and Chrome Frame (if installed) -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<!-- OGG Title & Description -->
		<meta property="og:site_name" content=""/>
		<meta property="og:title" content="<?php wp_title( '|', true, 'right' ); ?>"/>
		<?php //Adding the Open Graph in the Language Attributes
		function add_opengraph_doctype( $output ) {
				return $output . ' xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://www.facebook.com/2008/fbml"';
			}
		add_filter('language_attributes', 'add_opengraph_doctype');
		?>
		<!-- Favicon -->
		<link rel="shortcut icon" type="image/ico" href="<?php echo get_bloginfo('template_directory'); ?>/fav.ico">

		<?php wp_head(); ?>

		<!-- Stylesheet -->
		<link rel="stylesheet" href="<?php echo get_bloginfo('template_directory');?>/styles/style.css" type="text/css">

		<!-- HTML5 Shim for IE 6-8 -->
		<!--[if lt IE 9]>
			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->

	</head>

	<body <?php body_class(); ?> ng-controller="chapter_ctrl">

		<?php 
			if( !is_page_template('page-content-dump.php') ) {
				include("loader.php");
			}
		?>

		<!-- Old Browser Warning -->
		<!--[if lt IE 9]>
			<section class="container">
				Did you know that your web browser is a bit old? Some of the content on this site might not work right as a result. <a href="http://whatbrowser.org">Upgrade your browser</a> for a faster, better, and safer web experience.
			</section>
		<![endif]-->
		<!--[if lt IE 9]>
			<section class="container">
				Did you know that your web browser is a bit old? Some of the content on this site might not work right as a result. <a href="http://whatbrowser.org">Upgrade your browser</a> for a faster, better, and safer web experience.
			</section>
		<![endif]-->
		<div class="jsdump" style="display:none;"></div>

		<div id="page" class="hfeed site">
			<div id="content" class="site-content">