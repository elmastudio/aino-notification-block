<?php
/**
 * Plugin Name:       Aino Notification Block
 * Plugin URI:        https://ainoblocks.io/
 * Description:       Create alert, error, info, help, welcome, success and warning notification banners and fullscreen info bars with Aino's Notification Block.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Elma Studio
 * Author URI:        https://elmastudio.de/en/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ainoblocks
 *
 * @package           ainoblocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function ainoblocks_notification_block_init() {

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_register_script(
		'ainoblocks_notification_block',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_register_style(
		'ainoblocks_notification_block-editor',
		plugins_url( '/build/index.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . '/build/index.css' )
	);

	wp_register_style(
		'ainoblocks_notification_block',
		plugins_url( '/build/style-index.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . '/build/style-index.css' )
	);

	register_block_type( __DIR__ );

}
add_action( 'init', 'ainoblocks_notification_block_init' );


function ainoblocks_notification_block_enqueue_frontend_scripts() {

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/frontend.asset.php');

	wp_enqueue_script(
		'-frontend',
		plugins_url( 'build/frontend.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);
}
add_action( 'wp_enqueue_scripts', 'ainoblocks_notification_block_enqueue_frontend_scripts' );
