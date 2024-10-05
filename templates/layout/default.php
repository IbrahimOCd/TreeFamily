<!DOCTYPE html>
<html>
<head>
	<?php echo $this->Html->charset().PHP_EOL; ?>
	<title><?php
		echo __('Famiree');
		if (!empty($title_for_layout)) {
			echo ' :: ';
			echo $title_for_layout;
		}
	?></title>
	<meta name="description" content="" />
	<meta name="keywords" content="" />

	<link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">

	<?php echo $this->Html->css('header').PHP_EOL; ?>
	<?php echo $this->Html->css('main').PHP_EOL; ?>

	<?php echo $this->Html->script('jquery.min').PHP_EOL; ?>
	<?= $this->fetch('script') ?>
</head>
<body>
	<div id="container">
<?php	echo $this->element('header'); ?>
		<div id="content">
	        <?= $this->Flash->render() ?>

<?php
	if (isset($sidebar)) {
        if (!empty($sidebar)) {
?>
			<div id="sidebar"><?= $this->element('sidebar' . DS . $sidebar) ?>&nbsp;</div>
<?php
        }
	}
?>
			<div id="main"<?php if (isset($sidebar)) echo ' style="margin-left: 230px;"'; ?>>
                <?= $this->fetch('content') ?>
			</div>
			<div id="footer">
				&copy; Famiree.com 2009-2019
			</div>
		</div>

	</div>
</body>
</html>
