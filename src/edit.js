/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __, _x } from '@wordpress/i18n';
import { Fragment, useState } from '@wordpress/element';
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	PanelColorSettings,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	RangeControl,
	ToggleControl,
	Path,
	SVG,
} from '@wordpress/components';
import './index.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, className, onSelect }) {

	const {
		status,
		border,
		borderWidth,
		borderRadius,
		icon,
		iconStyle,
		close,
		backgroundColor,
		iconColor,
		borderColor,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
	} = attributes;

	const blockClasses = classnames(
		className, status, border, iconStyle, {
			[`pt__${paddingTop}`] : paddingTop ? paddingTop : undefined,
			[`pb__${paddingBottom}`]: paddingBottom ? paddingBottom : undefined,
			[`pl__${paddingLeft}`] : paddingLeft ? paddingLeft : undefined,
			[`pr__${paddingRight}`] : paddingRight ? paddingRight : undefined,
			'hide-icon': icon,
			'hide-close': close,
		}
	);

	const blockProps = useBlockProps( {
		className: blockClasses,
		style: {
			borderRadius: borderRadius ? borderRadius + 'px' : undefined,
			borderWidth: borderWidth ? borderWidth + 'px' : undefined,
			background: backgroundColor,
			borderColor: borderColor,
		},
	} );

	const iconStyles = {
		borderColor: iconStyle === 'icon-outline' ? iconColor : undefined,
		fill: iconStyle === 'icon-outline' ? iconColor : undefined,
		backgroundColor: iconStyle === 'icon-fill' ? iconColor : undefined,
	};

	const closeStyles = {
		fill: iconColor,
	};

	const ANSWER_TEMPLATE = [
		[
			'core/paragraph',
			{
				fontSize: 'xs',
				paddingLeft: '5',
				placeholder: _x( 'Type to write your message…', 'content placeholder' ),
			},
		],
	];

	const statusOptions = [
		{ value: "status-welcome", label: __('Welcome', 'ainoblocks') },
		{ value: "status-info", label   : __('Info', 'ainoblocks') },
		{ value: "status-help", label   : __('Help', 'ainoblocks') },
		{ value: "status-success", label: __('Success', 'ainoblocks') },
		{ value: "status-warning", label: __('Warning', 'ainoblocks') },
		{ value: "status-error", label  : __('Error', 'ainoblocks') }
	];

	const statusWelcome = status === 'status-welcome';
	const statusInfo    = status === 'status-info';
	const statusHelp    = status === 'status-help';
	const statusSuccess = status === 'status-success';
	const statusWarning = status === 'status-warning';
	const statusError   = status === 'status-error';
	const ShowCloseBtn   = close === false;

	const iconStyleOptions = [
		{ value: "icon-fill", label   : __('Fill', 'ainoblocks') },
		{ value: "icon-outline", label: __('Outline', 'ainoblocks') }
	];

	const borderOptions = [
		{ value: "no-border", label    : __('none', 'ainoblocks') },
		{ value: "border-all", label   : __('all', 'ainoblocks') },
		{ value: "border-top", label   : __('top', 'ainoblocks') },
		{ value: "border-right", label : __('right', 'ainoblocks') },
		{ value: "border-bottom", label: __('bottom', 'ainoblocks') },
		{ value: "border-left", label  : __('left', 'ainoblocks') }
	];

	const borderRadiusOptions = [
		{ value: "none", label : __('Not set', 'ainoblocks') },
		{ value: "xxs", label  : __('SSX', 'ainoblocks') },
		{ value: "xs", label   : __('XS', 'ainoblocks') },
		{ value: "s", label    : __('S', 'ainoblocks') },
		{ value: "m", label    : __('M', 'ainoblocks') },
		{ value: "l", label    : __('L', 'ainoblocks') },
		{ value: "xl", label   : __('XL', 'ainoblocks') },
		{ value: "xxl", label  : __('XXL', 'ainoblocks') },
		{ value: "xxxl", label : __('3XL', 'ainoblocks') },
		{ value: "xxxxl", label: __('4XL', 'ainoblocks') }
	];

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody 
					title={__('notification Block Settings', 'ainoblocks')}
					initialOpen={ true }
				>
					<SelectControl
						label={__('Status', 'ainoblocks')}
						value={status}
						options={statusOptions}
						onChange={status => setAttributes({ status })}
					/>
					<ToggleControl
						label={__('Close Button', 'ainoblocks')}
						checked={!!close}
						onChange={() => setAttributes({ close: !close })}
						help={!!close ? __('The Close button is hidden.', 'ainoblocks') : __('Toggle to hide Close button.', 'ainoblocks')}
					/>
					<ToggleControl
						label={__('Icon', 'ainoblocks')}
						checked={!!icon}
						onChange={() => setAttributes({ icon: !icon })}
						help={!!icon ? __('The icon is hidden.', 'ainoblocks') : __('Toggle to hide icon.', 'ainoblocks')}
					/>
					<SelectControl
						label={__('Icon Style', 'ainoblocks')}
						value={iconStyle}
						options={iconStyleOptions}
						onChange={iconStyle => setAttributes({ iconStyle })}
					/>
				</PanelBody>
				<PanelColorSettings
						title={__('Color', 'ainoblocks')}
						initialOpen={false}
						colorSettings={[
							{
								value: backgroundColor,
								onChange: backgroundColor => {
									setAttributes({ backgroundColor });
								},
								label: __('Background Color', 'ainoblocks'),
							},
							{
								value: iconColor,
								onChange: iconColor => {
									setAttributes({ iconColor });
								},
								label: __('Icon Color', 'ainoblocks'),
							},
							{
								value: borderColor,
								onChange: borderColor => {
									setAttributes({ borderColor });
								},
								label: __('Border Color', 'ainoblocks'),
							}
						]}
					>
					</PanelColorSettings>
				<PanelBody title={__('Border', 'ainoblocks')}
					initialOpen={ false }
				>
					<SelectControl
						label={__('Border', 'ainoblocks')}
						value={border}
						options={borderOptions}
						onChange={border => setAttributes({ border })}
					/>
					<RangeControl
						label={__('Border Width', 'ainoblocks')}
						value={borderWidth}
						onChange={(borderWidth) => setAttributes({ borderWidth })}
						min={1}
						max={20}
						allowReset={true}
						resetFallbackValue={0}
					/>
					<SelectControl
						label={__('Border Radius', 'ainoblocks')}
						value={borderRadius}
						options={borderRadiusOptions}
						onChange={borderRadius => setAttributes({ borderRadius })}
					/>
				</PanelBody>
				<PanelBody title={__('Spacing', 'ainoblocks')}
					initialOpen={ false }
				>
					<RangeControl
						label={__('Padding Top', 'ainoblocks')}
						value={paddingTop}
						onChange={(paddingTop) => setAttributes({ paddingTop })}
						min={0}
						max={19}
						allowReset={true}
						resetFallbackValue={0}
					/>
					<RangeControl
						label={__('Padding Bottom', 'ainoblocks')}
						value={paddingBottom}
						onChange={(paddingBottom) => setAttributes({ paddingBottom })}
						min={0}
						max={19}
						allowReset={true}
						resetFallbackValue={0}
					/>
					<RangeControl
						label={__('Padding Left', 'ainoblocks')}
						value={paddingLeft}
						onChange={(paddingLeft) => setAttributes({ paddingLeft })}
						min={0}
						max={19}
						allowReset={true}
						resetFallbackValue={0}
					/>
					<RangeControl
						label={__('Padding Right', 'ainoblocks')}
						value={paddingRight}
						onChange={(paddingRight) => setAttributes({ paddingRight })}
						min={0}
						max={19}
						allowReset={true}
						resetFallbackValue={0}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className={`content-wrapper`}>
					{ ShowCloseBtn && (
						<button className={`close-btn`} style={closeStyles}>
						<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
						<Path d="M10.243 3.172l-2.829 2.828 2.829 2.829-1.414 1.414-2.829-2.829-2.828 2.829-1.414-1.414 2.828-2.83-2.828-2.827 1.414-1.414 2.828 2.827 2.828-2.827z"></Path>
						</SVG>
						</button>
					) }
					<span className={`icon`} style={iconStyles}>
					{ statusWelcome && (
						<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<Path d="M7 13l0.082 0.232c0.828 2.217 2.714 3.768 4.918 3.768s4.090-1.551 4.918-3.768l0.082-0.232h2c-1.092 3.276-3.808 5.6-7 5.6-3.086 0-5.726-2.172-6.885-5.276l-0.115-0.324h2zM17 6c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM7 6c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></Path>
						</SVG>
					) }
					{ statusHelp && (
						<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<Path d="M12 17c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM12 5c2.21 0 4 1.79 4 4 0 0.88-0.36 1.68-0.93 2.25l-0.9 0.92c-0.72 0.73-1.17 1.33-1.17 2.83h-2v-0.5c0-1.1 0.45-2.1 1.17-2.83l1.24-1.26c0.37-0.36 0.59-0.86 0.59-1.41 0-1.1-0.9-2-2-2s-2 0.9-2 2h-2c0-2.21 1.79-4 4-4z"></Path>
						</SVG>
					) }
					{ statusSuccess && (
						<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<Path d="M16.59 7.58l-6.59 6.59-2.59-2.58-1.41 1.41 4 4 8-8z"></Path>
						</SVG>
					) }
					{ statusInfo && (
						<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<Path d="M13 9v10h-2v-10h2zM12 5c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></Path>
						</SVG>
					) }
					{ statusError && (
						<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<Path d="M16.243 6.343l1.414 1.414-4.243 4.243 4.243 4.242-1.414 1.414-4.242-4.243-4.243 4.243-1.414-1.414 4.243-4.242-4.243-4.243 1.414-1.414 4.243 4.243z"></Path>
						</SVG>
					) }
					{ statusWarning && (
						<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<Path d="M12 17c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM13 5v10h-2v-10h2z"></Path>
						</SVG>
					) }
					</span>
					<InnerBlocks
						template={ ANSWER_TEMPLATE }
					/>
				</div>
			</div>
		</Fragment>
	);
}
