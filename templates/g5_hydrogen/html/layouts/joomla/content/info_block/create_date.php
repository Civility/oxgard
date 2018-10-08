<?php
/**
 * @package     Joomla.Site
 * @subpackage  Layout
 *
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('JPATH_BASE') or die;

?>
			<dd class="create newsdate">
						<span class="date"> <?php echo JHTML::_('date', $displayData['item']->created, 'd'); ?></span>
						<span class="month"> <?php echo JHTML::_('date', $displayData['item']->created, 'F'); ?></span>
						<span class="year"> <?php echo JHTML::_('date', $displayData['item']->created, 'Y'); ?></span>
			</dd>
