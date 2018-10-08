<?php
/**
 * @package     Joomla.Site
 * @subpackage  Layout
 *
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('JPATH_BASE') or die;

// Create a shortcut for params.
$params = $displayData->params;
$canEdit = $displayData->params->get('access-edit');
JHtml::addIncludePath(JPATH_COMPONENT.'/helpers/html');
?>
<?php if ($params->get('show_title') || $displayData->state == 0 || ($params->get('show_author') && !empty($displayData->author ))) : ?>
	

	<div class="productpage-header">
		<?php if ($displayData->state == 0) : ?>
			<span class="label label-warning"><?php echo JText::_('JUNPUBLISHED'); ?></span>
		<?php endif; ?>
		<?php if (strtotime($displayData->publish_up) > strtotime(JFactory::getDate())) : ?>
			<span class="label label-warning"><?php echo JText::_('JNOTPUBLISHEDYET'); ?></span>
		<?php endif; ?>
		<?php if ((strtotime($displayData->publish_down) < strtotime(JFactory::getDate())) && $displayData->publish_down != JFactory::getDbo()->getNullDate()) : ?>
			<span class="label label-warning"><?php echo JText::_('JEXPIRED'); ?></span>
		<?php endif; ?>

		<?php if ($params->get('show_title')) : ?>
			<h4 class="product_text" itemprop="name">
				<?php if ($params->get('link_titles') &&
				($params->get('access-view') || $params->get('show_noauth', '0') == '1')): ?>


				<a href="<?php echo JRoute::_(ContentHelperRoute::getArticleRoute($displayData->slug, $displayData->catid, $displayData->language)); ?>" itemprop="url">
					<span>
											<?php	/*проверка на пустые строки
											$displayData->introtext = strip_tags($displayData->introtext);
					// если есть вводный текст , то вывести как заголовок, если нету, то вывести заголовок
											if(!empty($displayData->introtext)) {
												echo $displayData->introtext ;
											} else {
												echo $displayData->title;
											}
											*/?>
<?php if (!empty($displayData->introtext)) {
  	echo (strip_tags($displayData->introtext));
} else {
   echo ($displayData->title);
}?>
						<?php /* вывод содержимого вводного текста, экранирование от html тегов?>
							<?php	$displayData->introtext = preg_replace('/<[\/\!]*?[^<>]*?>/i', '', $displayData->introtext); ?>
							<?php echo $this->escape($displayData->introtext ); ?>
							<?php */?>		
						<i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>
						</span></a>
					<?php /*?>
				<a href="<?php echo JRoute::_(ContentHelperRoute::getArticleRoute($displayData->slug, $displayData->catid, $displayData->language)); ?>" itemprop="url">
						<span>
						<?php echo $this->escape($displayData->title); ?>
							<i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>
						</span>
					</a><*/ ?>
				<?php else : ?>
					<?php echo $this->escape($displayData->title); ?>
				<?php endif; ?>
			</h4>
		<?php endif; ?>	
	</div>
<?php endif; ?>
