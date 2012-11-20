<?php
/**
 * @file
 * Admin page callback for the PhotoLDR module.
 */

/**
 * Builds and returns the PhotoLDR admin page settings form.
 */
function custom_add_block_admin_settings() {
  $item = menu_get_item('node/add');
  $content = system_admin_menu_block($item);
  $count = 0;
  $weight_used = array();
	 
  foreach ($content as $nodeitem) {
    $nodename = str_replace(" ", "_", $nodeitem['link_title']);
    $weight = variable_get('custom_add_block_node_weight_' . $nodename, '');
    if ($weight == '') {
      $count ++;
      while (in_array($count, $weight_used)) {
        $count ++;
      }
      $weight = $count;
    }
    $weight_used[] = $weight;
    
    $form['custom_add_block_node_weight_' . $nodename] = array(
      '#prefix' => '<table><tr><td>',
      '#suffix' => '</td>',
      '#type' => 'select',
      '#title' => t('@nodename - Weight.', array('@nodename' => $nodename)),
      '#options' => drupal_map_assoc(range(1, 50)),
      '#default_value' => $weight,
      '#description' => t('This will set the order that node types are in the Add block.'),
    );


    $imglink = '/' . drupal_get_path('module', 'custom_add_block') . '/defaultadd.png';
    $previewimg = '<div id="custom-add-block-icon"><img src="' . variable_get('custom_add_block_node_icon_' . $nodename, $imglink) . '" title="' . $nodeitem['description'] . '" alt="' . $nodeitem['description'] . '">';
    $form['custom_add_block_node_icon_' . $nodename] = array(
      '#type' => 'textfield',
      '#title' => t('@nodename - Icon', array('@nodename' => $nodename)),
      '#default_value' => variable_get('custom_add_block_node_icon_' . $nodename, $imglink),
      '#description' => t('This is the icon in the add node block.'),
      '#prefix' => '<td>',
      '#suffix' => '</td><td>' .  $previewimg . '</td></tr></table>',
    );
	}
	

	
	return system_settings_form($form);
}
