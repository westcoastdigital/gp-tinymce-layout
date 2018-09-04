<?php
/*
Plugin Name: GP TinyMCE Layout
Plugin URI: https://github.com/WestCoastDigital/gp-tinymce-layout
Description: Easily add columns and buttons to your site from the editor as well as bring in the base GP styles
Version: 1.0.0
Author: West Coast Digital
Author URI: https://westcoastdigital.com.au
Text Domain: translate
Domain Path: /languages
*/

/**
 * Tinymce additions
 */
//adding tiny mce plugin buttons	
add_action( 'init', 'wcd_buttons' );

function wcd_buttons() {
    add_filter( "mce_external_plugins", "wcd_add_buttons" );
    add_filter( 'mce_buttons', 'wcd_register_buttons' );
    wp_enqueue_style('tinymce_button_styles', plugin_dir_url( __FILE__ ). '/inc/tinymce_stuff/custom-button-style.css');	
}

function wcd_add_buttons( $plugin_array ) {

    $plugin_array['wcd'] = plugin_dir_url( __FILE__ ) . '/inc/tinymce_stuff/tinymce_buttons.js';
    
    return $plugin_array;
}

function wcd_register_buttons( $buttons ) {
	
	$wcd_buttons = array(
	'wcd-options'
	
);


    $buttons = array_merge( $buttons, $wcd_buttons); 
    return $buttons;
}

/**
 * Registers an editor stylesheet for the theme.
 */
function wcd_editor_enqueue_styles() {
	add_editor_style( get_template_directory_uri() . '/style.css' );
	add_editor_style( get_template_directory_uri() . '/css/unsemantic-grid.min.css' );
}
add_action( 'admin_init', 'wcd_editor_enqueue_styles' );