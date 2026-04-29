declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		attr( ): ({ 
			'tabindex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
declare namespace $ {

	type $mol_book2_sub__1 = $mol_type_enforce<
		ReturnType< $mol_book2['pages'] >[number]
		,
		$mol_view
	>
	type $mol_book2_sub__2 = $mol_type_enforce<
		ReturnType< $mol_book2['placeholders'] >[number]
		,
		$mol_view
	>
	type $mol_view__title_mol_book2_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['title'] >
	>
	export class $mol_book2 extends $mol_scroll {
		pages_deep( ): readonly($mol_view)[]
		pages( ): ReturnType< $mol_book2['pages_deep'] >
		Placeholder( ): $mol_view
		placeholders( ): readonly($mol_view)[]
		menu_title( ): string
		sub( ): readonly($mol_view)[]
		minimal_width( ): number
		Gap( id: any): $mol_view
	}
	
}

//# sourceMappingURL=book2.view.tree.d.ts.map
declare namespace $ {

	export class $mol_hotkey extends $mol_plugin {
		keydown( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_hotkey['keydown'] > ): ReturnType< $mol_hotkey['keydown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		key( ): Record<string, any>
		mod_ctrl( ): boolean
		mod_alt( ): boolean
		mod_shift( ): boolean
	}
	
}

//# sourceMappingURL=hotkey.view.tree.d.ts.map
declare namespace $ {

	export class $mol_speck extends $mol_view {
		value( ): any
		theme( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {

	type $mol_speck__value_mol_button_1 = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		activate( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		key_press( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		status( next?: readonly(any)[] ): readonly(any)[]
		event( ): ({ 
			click( next?: ReturnType< $mol_button['activate'] > ): ReturnType< $mol_button['activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['key_press'] > ): ReturnType< $mol_button['key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_check_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $ {

	type $mol_check__checked_mol_check_list_1 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__label_mol_check_list_2 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_label'] >
		,
		ReturnType< $mol_check['label'] >
	>
	type $mol_check__enabled_mol_check_list_3 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint_mol_check_list_4 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height_mol_check_list_5 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	export class $mol_check_list extends $mol_view {
		option_checked( id: any, next?: boolean ): boolean
		option_title( id: any): string
		option_label( id: any): readonly(any)[]
		enabled( ): boolean
		option_enabled( id: any): ReturnType< $mol_check_list['enabled'] >
		option_hint( id: any): string
		items( ): readonly($mol_check)[]
		dictionary( ): Record<string, any>
		Option( id: any): $mol_check
		options( ): Record<string, any>
		keys( ): readonly(string)[]
		sub( ): ReturnType< $mol_check_list['items'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	export class $mol_switch extends $mol_check_list {
		value( next?: string ): string
	}
	
}

//# sourceMappingURL=switch.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__style_mol_list_1 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style_mol_list_2 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		gap_before( ): number
		Gap_before( ): $mol_view
		Empty( ): $mol_view
		gap_after( ): number
		Gap_after( ): $mol_view
		rows( ): readonly($mol_view)[]
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		item_height_min( id: any): number
		item_width_min( id: any): number
		view_window_shift( next?: number ): number
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__dom_name_mol_page_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_2 = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_page_3 = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_page_4 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name_mol_page_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_6 = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type __mol_page_7 = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub_mol_page_8 = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub_mol_page_9 = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name_mol_page_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_11 = $mol_type_enforce<
		ReturnType< $mol_page['foot'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_page extends $mol_view {
		tabindex( ): number
		Logo( ): any
		title_content( ): readonly(any)[]
		Title( ): $mol_view
		tools( ): readonly($mol_view_content)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		body_scroll_top( next?: ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] > ): ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] >
		body( ): readonly($mol_view)[]
		Body_content( ): $mol_view
		body_content( ): readonly(any)[]
		Body( ): $mol_scroll
		foot( ): readonly($mol_view)[]
		Foot( ): $mol_view
		dom_name( ): string
		attr( ): ({ 
			'tabIndex': ReturnType< $mol_page['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $ {

	export class $mol_image extends $mol_view {
		uri( ): string
		title( ): string
		loading( ): string
		decoding( ): string
		cors( ): any
		natural_width( ): number
		natural_height( ): number
		load( next?: any ): any
		dom_name( ): string
		attr( ): Record<string, any> & ReturnType< $mol_view['attr'] >
		event( ): Record<string, any>
		minimal_width( ): number
		minimal_height( ): number
	}
	
}

//# sourceMappingURL=image.view.tree.d.ts.map
declare namespace $ {

	export class $mol_ghost extends $mol_view {
		Sub( ): $mol_view
	}
	
}

//# sourceMappingURL=ghost.view.tree.d.ts.map
declare namespace $ {

	export class $mol_follower extends $mol_ghost {
		transform( ): string
		Anchor( ): $mol_view
		align( ): readonly(number)[]
		offset( ): readonly(number)[]
		style( ): ({ 
			'transform': ReturnType< $mol_follower['transform'] >,
		})  & ReturnType< $mol_ghost['style'] >
	}
	
}

//# sourceMappingURL=follower.view.tree.d.ts.map
declare namespace $ {

	type $mol_pop_bubble__content_mol_pop_1 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max_mol_pop_2 = $mol_type_enforce<
		ReturnType< $mol_pop['height_max'] >
		,
		ReturnType< $mol_pop_bubble['height_max'] >
	>
	type $mol_follower__offset_mol_pop_3 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_offset'] >
		,
		ReturnType< $mol_follower['offset'] >
	>
	type $mol_follower__align_mol_pop_4 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_align'] >
		,
		ReturnType< $mol_follower['align'] >
	>
	type $mol_follower__Anchor_mol_pop_5 = $mol_type_enforce<
		ReturnType< $mol_pop['Anchor'] >
		,
		ReturnType< $mol_follower['Anchor'] >
	>
	type $mol_follower__Sub_mol_pop_6 = $mol_type_enforce<
		ReturnType< $mol_pop['Bubble'] >
		,
		ReturnType< $mol_follower['Sub'] >
	>
	export class $mol_pop extends $mol_view {
		bubble( ): any
		Anchor( ): any
		bubble_offset( ): readonly(number)[]
		bubble_align( ): readonly(number)[]
		bubble_content( ): readonly($mol_view_content)[]
		height_max( ): number
		Bubble( ): $mol_pop_bubble
		Follower( ): $mol_follower
		showed( next?: boolean ): boolean
		align_vert( ): string
		align_hor( ): string
		align( ): string
		prefer( ): string
		auto( ): readonly(any)[]
		sub( ): readonly(any)[]
		sub_visible( ): readonly(any)[]
	}
	
	export class $mol_pop_bubble extends $mol_view {
		content( ): readonly($mol_view_content)[]
		height_max( ): number
		sub( ): ReturnType< $mol_pop_bubble['content'] >
		style( ): ({ 
			'maxHeight': ReturnType< $mol_pop_bubble['height_max'] >,
		})  & ReturnType< $mol_view['style'] >
		attr( ): ({ 
			'tabindex': number,
			'popover': string,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=pop.view.tree.d.ts.map
declare namespace $ {

	export class $mol_nav extends $mol_plugin {
		event_key( next?: any ): any
		cycle( next?: boolean ): boolean
		mod_ctrl( ): boolean
		mod_shift( ): boolean
		mod_alt( ): boolean
		keys_x( next?: readonly(any)[] ): readonly(any)[]
		keys_y( next?: readonly(any)[] ): readonly(any)[]
		current_x( next?: any ): any
		current_y( next?: any ): any
		event_up( next?: any ): any
		event_down( next?: any ): any
		event_left( next?: any ): any
		event_right( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_nav['event_key'] > ): ReturnType< $mol_nav['event_key'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=nav.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__mod_ctrl_mol_string_1 = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key_mol_string_2 = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_string['submit'] > ): ReturnType< $mol_string['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $mol_string extends $mol_view {
		selection_watcher( ): any
		error_report( ): any
		disabled( ): boolean
		value( next?: string ): string
		value_changed( next?: ReturnType< $mol_string['value'] > ): ReturnType< $mol_string['value'] >
		hint( ): string
		hint_visible( ): ReturnType< $mol_string['hint'] >
		spellcheck( ): boolean
		autocomplete_native( ): string
		selection_end( ): number
		selection_start( ): number
		keyboard( ): string
		enter( ): string
		length_max( ): number
		type( next?: string ): string
		event_change( next?: any ): any
		submit_with_ctrl( ): boolean
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		dom_name( ): string
		enabled( ): boolean
		minimal_height( ): number
		autocomplete( ): boolean
		selection( next?: readonly(number)[] ): readonly(number)[]
		auto( ): readonly(any)[]
		field( ): ({ 
			'disabled': ReturnType< $mol_string['disabled'] >,
			'value': ReturnType< $mol_string['value_changed'] >,
			'placeholder': ReturnType< $mol_string['hint_visible'] >,
			'spellcheck': ReturnType< $mol_string['spellcheck'] >,
			'autocomplete': ReturnType< $mol_string['autocomplete_native'] >,
			'selectionEnd': ReturnType< $mol_string['selection_end'] >,
			'selectionStart': ReturnType< $mol_string['selection_start'] >,
			'inputMode': ReturnType< $mol_string['keyboard'] >,
			'enterkeyhint': ReturnType< $mol_string['enter'] >,
		})  & ReturnType< $mol_view['field'] >
		attr( ): ({ 
			'maxlength': ReturnType< $mol_string['length_max'] >,
			'type': ReturnType< $mol_string['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			input( next?: ReturnType< $mol_string['event_change'] > ): ReturnType< $mol_string['event_change'] >,
		})  & ReturnType< $mol_view['event'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=string.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {

	type $mol_svg_path__geometry_mol_icon_1 = $mol_type_enforce<
		ReturnType< $mol_icon['path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $mol_icon extends $mol_svg_root {
		path( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		minimal_width( ): number
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_close extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=close.view.tree.d.ts.map
declare namespace $ {

	export class $mol_paragraph extends $mol_view {
		line_height( ): number
		letter_width( ): number
		width_limit( ): number
		row_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paragraph.view.tree.d.ts.map
declare namespace $ {

	type $mol_paragraph__sub_mol_dimmer_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub_mol_dimmer_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $mol_dimmer extends $mol_paragraph {
		parts( ): readonly($mol_view_content)[]
		string( id: any): string
		haystack( ): string
		needle( ): string
		sub( ): ReturnType< $mol_dimmer['parts'] >
		Low( id: any): $mol_paragraph
		High( id: any): $mol_paragraph
	}
	
}

//# sourceMappingURL=dimmer.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__key_mol_search_1 = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y_mol_search_2 = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_search_3 = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value_mol_search_4 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_mol_search_5 = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit_mol_search_6 = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled_mol_search_7 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard_mol_search_8 = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter_mol_search_9 = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint_mol_search_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled_mol_search_11 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_mol_search_12 = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows_mol_search_14 = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_search_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_dimmer__haystack_mol_search_16 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_search_17 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__18 = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub_mol_search_19 = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_mol_search_20 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_21 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_search extends $mol_pop {
		clear( next?: any ): any
		Hotkey( ): $mol_hotkey
		nav_components( ): readonly($mol_view)[]
		nav_focused( next?: any ): any
		Nav( ): $mol_nav
		suggests_showed( next?: boolean ): boolean
		query( next?: string ): string
		hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		keyboard( ): string
		enter( ): string
		bring( ): ReturnType< ReturnType< $mol_search['Query'] >['bring'] >
		Query( ): $mol_string
		Clear_icon( ): $mol_icon_close
		Clear( ): $mol_button_minor
		anchor_content( ): readonly(any)[]
		menu_items( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		suggest_select( id: any, next?: any ): any
		suggest_label( id: any): string
		Suggest_label( id: any): $mol_dimmer
		suggest_content( id: any): readonly($mol_view_content)[]
		suggests( ): readonly(string)[]
		plugins( ): readonly($mol_plugin)[]
		showed( next?: ReturnType< $mol_search['suggests_showed'] > ): ReturnType< $mol_search['suggests_showed'] >
		align_hor( ): string
		Anchor( ): $mol_view
		bubble_content( ): readonly($mol_view_content)[]
		Suggest( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link extends $mol_view {
		uri_toggle( ): string
		hint( ): string
		hint_safe( ): ReturnType< $mol_link['hint'] >
		target( ): string
		file_name( ): string
		current( ): boolean
		relation( ): string
		event_click( next?: any ): any
		click( next?: ReturnType< $mol_link['event_click'] > ): ReturnType< $mol_link['event_click'] >
		uri( ): string
		dom_name( ): string
		uri_off( ): string
		uri_native( ): any
		external( ): boolean
		attr( ): ({ 
			'href': ReturnType< $mol_link['uri_toggle'] >,
			'title': ReturnType< $mol_link['hint_safe'] >,
			'target': ReturnType< $mol_link['target'] >,
			'download': ReturnType< $mol_link['file_name'] >,
			'mol_link_current': ReturnType< $mol_link['current'] >,
			'rel': ReturnType< $mol_link['relation'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		arg( ): Record<string, any>
		event( ): ({ 
			click( next?: ReturnType< $mol_link['click'] > ): ReturnType< $mol_link['click'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=script.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script_text extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link_source extends $mol_link {
		Icon( ): $mol_icon_script_text
		hint( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=source.view.tree.d.ts.map
declare namespace $ {

	type $mol_gallery__style_mol_gallery_1 = $mol_type_enforce<
		({ 
			'flexGrow': ReturnType< $mol_gallery['side_size'] >,
		}) 
		,
		ReturnType< $mol_gallery['style'] >
	>
	type $mol_gallery__items_mol_gallery_2 = $mol_type_enforce<
		ReturnType< $mol_gallery['side_items'] >
		,
		ReturnType< $mol_gallery['items'] >
	>
	export class $mol_gallery extends $mol_view {
		items( ): readonly($mol_view)[]
		side_size( id: any): string
		side_items( id: any): readonly($mol_view)[]
		sub( ): ReturnType< $mol_gallery['items'] >
		Side( id: any): $mol_gallery
	}
	
}

//# sourceMappingURL=gallery.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_cost_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_cost_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_cost_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_cost extends $mol_view {
		prefix( ): string
		Prefix( ): $mol_view
		value_view( ): string
		Value( ): $mol_view
		postfix( ): string
		Postfix( ): $mol_view
		value( ): any
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=cost.view.tree.d.ts.map
declare namespace $ {

	type $mol_image__uri_hyoo_toys_catalog_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_image__event_hyoo_toys_catalog_2 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $hyoo_toys_catalog['event_top'] > ): ReturnType< $hyoo_toys_catalog['event_top'] >,
		}) 
		,
		ReturnType< $mol_image['event'] >
	>
	type $mol_search__query_hyoo_toys_catalog_3 = $mol_type_enforce<
		ReturnType< $hyoo_toys_catalog['filter_title'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_link_source__uri_hyoo_toys_catalog_4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_gallery__items_hyoo_toys_catalog_5 = $mol_type_enforce<
		ReturnType< $hyoo_toys_catalog['toy_cards'] >
		,
		ReturnType< $mol_gallery['items'] >
	>
	type $mol_dimmer__needle_hyoo_toys_catalog_6 = $mol_type_enforce<
		ReturnType< $hyoo_toys_catalog['filter_title'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack_hyoo_toys_catalog_7 = $mol_type_enforce<
		ReturnType< $hyoo_toys_catalog['toy_title'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_hyoo_toys_catalog_8 = $mol_type_enforce<
		ReturnType< $hyoo_toys_catalog['filter_title'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack_hyoo_toys_catalog_9 = $mol_type_enforce<
		ReturnType< $hyoo_toys_catalog['toy_type'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_list__rows_hyoo_toys_catalog_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_image__uri_hyoo_toys_catalog_11 = $mol_type_enforce<
		ReturnType< $hyoo_toys_catalog['toy_image'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_image__style_hyoo_toys_catalog_12 = $mol_type_enforce<
		({ 
			'filter': ReturnType< $hyoo_toys_catalog['toy_image_filter'] >,
		}) 
		,
		ReturnType< $mol_image['style'] >
	>
	type $mol_unit_money__valueOf_hyoo_toys_catalog_13 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_unit_money['valueOf'] >
	>
	type $mol_cost__value_hyoo_toys_catalog_14 = $mol_type_enforce<
		ReturnType< $hyoo_toys_catalog['toy_price'] >
		,
		ReturnType< $mol_cost['value'] >
	>
	type $mol_view__sub_hyoo_toys_catalog_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_hyoo_toys_catalog_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_hyoo_toys_catalog_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_link__minimal_width_hyoo_toys_catalog_18 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_link['minimal_width'] >
	>
	type $mol_link__minimal_height_hyoo_toys_catalog_19 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_link['minimal_height'] >
	>
	type $mol_link__arg_hyoo_toys_catalog_20 = $mol_type_enforce<
		ReturnType< $hyoo_toys_catalog['toy_arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_hyoo_toys_catalog_21 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $hyoo_toys_catalog extends $mol_page {
		event_top( next?: any ): any
		Logo( ): $mol_image
		filter_title( next?: string ): string
		Filter_title( ): $mol_search
		Source_link( ): $mol_link_source
		toy_cards( ): readonly(any)[]
		Goods( ): $mol_gallery
		toy_arg( id: any): Record<string, any>
		toy_title( id: any): string
		Toy_title( id: any): $mol_dimmer
		toy_type( id: any): string
		Toy_type( id: any): $mol_dimmer
		Toy_main( id: any): $mol_list
		toy_image( id: any): string
		toy_image_filter( id: any): string
		Toy_image( id: any): $mol_image
		toy_price( id: any): $mol_unit_money
		Toy_price( id: any): $mol_cost
		toy_size_prefix( ): string
		toy_size( id: any): string
		Toy_size( id: any): $mol_view
		toy_reviews_prefix( ): string
		toy_reviews( id: any): number
		Toy_reviews( id: any): $mol_view
		Toy_info( id: any): $mol_view
		toys( ): readonly(any)[]
		toy( id: any): $hyoo_toys_toy
		filter_type( ): string
		filter_size( ): string
		sort_key( ): string
		filter_popular( ): boolean
		head( ): readonly(any)[]
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
		Toy_card( id: any): $mol_link
	}
	
}

//# sourceMappingURL=catalog.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_major extends $mol_button_minor {
		theme( ): string
	}
	
}

//# sourceMappingURL=major.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_card_1 = $mol_type_enforce<
		ReturnType< $mol_card['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_card_2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_card_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_card extends $mol_list {
		status( ): string
		content( ): readonly($mol_view_content)[]
		Content( ): $mol_view
		status_text( ): ReturnType< $mol_card['status'] >
		Status( ): $mol_view
		attr( ): ({ 
			'mol_card_status_type': ReturnType< $mol_card['status'] >,
		})  & ReturnType< $mol_list['attr'] >
		rows( ): readonly($mol_view)[]
	}
	
}

//# sourceMappingURL=card.view.tree.d.ts.map
declare namespace $ {

	export class $mol_row extends $mol_view {
	}
	
}

//# sourceMappingURL=row.view.tree.d.ts.map
declare namespace $ {

	type $mol_filler_filler_lines__1 = $mol_type_enforce<
		`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `
		,
		string
	>
	type $mol_filler_filler_lines__2 = $mol_type_enforce<
		`Donec a diam lectus. `
		,
		string
	>
	type $mol_filler_filler_lines__3 = $mol_type_enforce<
		`Sed sit amet ipsum mauris. `
		,
		string
	>
	type $mol_filler_filler_lines__4 = $mol_type_enforce<
		`Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. `
		,
		string
	>
	type $mol_filler_filler_lines__5 = $mol_type_enforce<
		`Donec et mollis dolor. `
		,
		string
	>
	type $mol_filler_filler_lines__6 = $mol_type_enforce<
		`Praesent et diam eget libero egestas mattis sit amet vitae augue. `
		,
		string
	>
	type $mol_filler_filler_lines__7 = $mol_type_enforce<
		`Nam tincidunt congue enim, ut porta lorem lacinia consectetur. `
		,
		string
	>
	type $mol_filler_filler_lines__8 = $mol_type_enforce<
		`Donec ut libero sed arcu vehicula ultricies a non tortor. `
		,
		string
	>
	type $mol_filler_filler_lines__9 = $mol_type_enforce<
		`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `
		,
		string
	>
	type $mol_filler_filler_lines__10 = $mol_type_enforce<
		`Aenean ut gravida lorem. `
		,
		string
	>
	type $mol_filler_filler_lines__11 = $mol_type_enforce<
		`Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. `
		,
		string
	>
	type $mol_filler_filler_lines__12 = $mol_type_enforce<
		`Pellentesque auctor nisi id magna consequat sagittis. `
		,
		string
	>
	type $mol_filler_filler_lines__13 = $mol_type_enforce<
		`Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. `
		,
		string
	>
	type $mol_filler_filler_lines__14 = $mol_type_enforce<
		`Ut convallis libero in urna ultrices accumsan. `
		,
		string
	>
	type $mol_filler_filler_lines__15 = $mol_type_enforce<
		`Donec sed odio eros. `
		,
		string
	>
	type $mol_filler_filler_lines__16 = $mol_type_enforce<
		`Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. `
		,
		string
	>
	type $mol_filler_filler_lines__17 = $mol_type_enforce<
		`Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. `
		,
		string
	>
	type $mol_filler_filler_lines__18 = $mol_type_enforce<
		`In rutrum accumsan ultricies. `
		,
		string
	>
	type $mol_filler_filler_lines__19 = $mol_type_enforce<
		`Mauris vitae nisi at sem facilisis semper ac in est. `
		,
		string
	>
	type $mol_filler_filler_lines__20 = $mol_type_enforce<
		`Vivamus fermentum semper porta. `
		,
		string
	>
	type $mol_filler_filler_lines__21 = $mol_type_enforce<
		`Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. `
		,
		string
	>
	type $mol_filler_filler_lines__22 = $mol_type_enforce<
		`Maecenas convallis ullamcorper ultricies. `
		,
		string
	>
	type $mol_filler_filler_lines__23 = $mol_type_enforce<
		`Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. `
		,
		string
	>
	type $mol_filler_filler_lines__24 = $mol_type_enforce<
		`Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. `
		,
		string
	>
	type $mol_filler_filler_lines__25 = $mol_type_enforce<
		`Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. `
		,
		string
	>
	type $mol_filler_filler_lines__26 = $mol_type_enforce<
		`Fusce eget orci a orci congue vestibulum. `
		,
		string
	>
	type $mol_filler_filler_lines__27 = $mol_type_enforce<
		`Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. `
		,
		string
	>
	type $mol_filler_filler_lines__28 = $mol_type_enforce<
		`Curabitur venenatis pulvinar tellus gravida ornare. `
		,
		string
	>
	type $mol_filler_filler_lines__29 = $mol_type_enforce<
		`Sed et erat faucibus nunc euismod ultricies ut id justo. `
		,
		string
	>
	type $mol_filler_filler_lines__30 = $mol_type_enforce<
		`Nullam cursus suscipit nisi, et ultrices justo sodales nec. `
		,
		string
	>
	type $mol_filler_filler_lines__31 = $mol_type_enforce<
		`Fusce venenatis facilisis lectus ac semper. `
		,
		string
	>
	type $mol_filler_filler_lines__32 = $mol_type_enforce<
		`Aliquam at massa ipsum. `
		,
		string
	>
	type $mol_filler_filler_lines__33 = $mol_type_enforce<
		`Quisque bibendum purus convallis nulla ultrices ultricies. `
		,
		string
	>
	type $mol_filler_filler_lines__34 = $mol_type_enforce<
		`Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. `
		,
		string
	>
	type $mol_filler_filler_lines__35 = $mol_type_enforce<
		`Fusce vel volutpat elit. `
		,
		string
	>
	type $mol_filler_filler_lines__36 = $mol_type_enforce<
		`Nam sagittis nisi dui. `
		,
		string
	>
	type $mol_filler_filler_lines__37 = $mol_type_enforce<
		`Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. `
		,
		string
	>
	type $mol_filler_filler_lines__38 = $mol_type_enforce<
		`Etiam luctus porttitor lorem, sed suscipit est rutrum non. `
		,
		string
	>
	type $mol_filler_filler_lines__39 = $mol_type_enforce<
		`Curabitur lobortis nisl a enim congue semper. `
		,
		string
	>
	type $mol_filler_filler_lines__40 = $mol_type_enforce<
		`Aenean commodo ultrices imperdiet. `
		,
		string
	>
	type $mol_filler_filler_lines__41 = $mol_type_enforce<
		`Vestibulum ut justo vel sapien venenatis tincidunt. `
		,
		string
	>
	type $mol_filler_filler_lines__42 = $mol_type_enforce<
		`Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. `
		,
		string
	>
	type $mol_filler_filler_lines__43 = $mol_type_enforce<
		`Aliquam ut massa in turpis dapibus convallis. `
		,
		string
	>
	type $mol_filler_filler_lines__44 = $mol_type_enforce<
		`Praesent elit lacus, vestibulum at malesuada et, ornare et est. `
		,
		string
	>
	type $mol_filler_filler_lines__45 = $mol_type_enforce<
		`Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. `
		,
		string
	>
	type $mol_filler_filler_lines__46 = $mol_type_enforce<
		`Mauris ut placerat justo. `
		,
		string
	>
	type $mol_filler_filler_lines__47 = $mol_type_enforce<
		`Mauris in ultricies enim. `
		,
		string
	>
	type $mol_filler_filler_lines__48 = $mol_type_enforce<
		`Quisque nec est eleifend nulla ultrices egestas quis ut quam. `
		,
		string
	>
	type $mol_filler_filler_lines__49 = $mol_type_enforce<
		`Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. `
		,
		string
	>
	type $mol_filler_filler_lines__50 = $mol_type_enforce<
		`Cras quis ligula sem, vel elementum mi. `
		,
		string
	>
	type $mol_filler_filler_lines__51 = $mol_type_enforce<
		`Phasellus non ullamcorper urna. `
		,
		string
	>
	type $mol_filler_filler_lines__52 = $mol_type_enforce<
		`Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. `
		,
		string
	>
	type $mol_filler_filler_lines__53 = $mol_type_enforce<
		`In euismod ultrices facilisis. `
		,
		string
	>
	type $mol_filler_filler_lines__54 = $mol_type_enforce<
		`Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. `
		,
		string
	>
	type $mol_filler_filler_lines__55 = $mol_type_enforce<
		`Proin quis dictum nisl. `
		,
		string
	>
	type $mol_filler_filler_lines__56 = $mol_type_enforce<
		`Morbi id quam sapien, sed vestibulum sem. `
		,
		string
	>
	type $mol_filler_filler_lines__57 = $mol_type_enforce<
		`Duis elementum rutrum mauris sed convallis. `
		,
		string
	>
	type $mol_filler_filler_lines__58 = $mol_type_enforce<
		`Proin vestibulum magna mi. `
		,
		string
	>
	type $mol_filler_filler_lines__59 = $mol_type_enforce<
		`Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. `
		,
		string
	>
	type $mol_filler_filler_lines__60 = $mol_type_enforce<
		`Sed non tortor sodales quam auctor elementum. `
		,
		string
	>
	type $mol_filler_filler_lines__61 = $mol_type_enforce<
		`Donec hendrerit nunc eget elit pharetra pulvinar. `
		,
		string
	>
	type $mol_filler_filler_lines__62 = $mol_type_enforce<
		`Suspendisse id tempus tortor. `
		,
		string
	>
	type $mol_filler_filler_lines__63 = $mol_type_enforce<
		`Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. `
		,
		string
	>
	type $mol_filler_filler_lines__64 = $mol_type_enforce<
		`Donec vel. `
		,
		string
	>
	type $mol_filler_filler_lines__65 = $mol_type_enforce<
		`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `
		,
		string
	>
	type $mol_filler_filler_lines__66 = $mol_type_enforce<
		`Donec a diam lectus. `
		,
		string
	>
	type $mol_filler_filler_lines__67 = $mol_type_enforce<
		`Sed sit amet ipsum mauris. `
		,
		string
	>
	type $mol_filler_filler_lines__68 = $mol_type_enforce<
		`Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. `
		,
		string
	>
	type $mol_filler_filler_lines__69 = $mol_type_enforce<
		`Donec et mollis dolor. `
		,
		string
	>
	type $mol_filler_filler_lines__70 = $mol_type_enforce<
		`Praesent et diam eget libero egestas mattis sit amet vitae augue. `
		,
		string
	>
	type $mol_filler_filler_lines__71 = $mol_type_enforce<
		`Nam tincidunt congue enim, ut porta lorem lacinia consectetur. `
		,
		string
	>
	type $mol_filler_filler_lines__72 = $mol_type_enforce<
		`Donec ut libero sed arcu vehicula ultricies a non tortor. `
		,
		string
	>
	type $mol_filler_filler_lines__73 = $mol_type_enforce<
		`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `
		,
		string
	>
	type $mol_filler_filler_lines__74 = $mol_type_enforce<
		`Aenean ut gravida lorem. `
		,
		string
	>
	type $mol_filler_filler_lines__75 = $mol_type_enforce<
		`Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. `
		,
		string
	>
	type $mol_filler_filler_lines__76 = $mol_type_enforce<
		`Pellentesque auctor nisi id magna consequat sagittis. `
		,
		string
	>
	type $mol_filler_filler_lines__77 = $mol_type_enforce<
		`Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. `
		,
		string
	>
	type $mol_filler_filler_lines__78 = $mol_type_enforce<
		`Ut convallis libero in urna ultrices accumsan. `
		,
		string
	>
	type $mol_filler_filler_lines__79 = $mol_type_enforce<
		`Donec sed odio eros. `
		,
		string
	>
	type $mol_filler_filler_lines__80 = $mol_type_enforce<
		`Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. `
		,
		string
	>
	type $mol_filler_filler_lines__81 = $mol_type_enforce<
		`Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. `
		,
		string
	>
	type $mol_filler_filler_lines__82 = $mol_type_enforce<
		`In rutrum accumsan ultricies. `
		,
		string
	>
	type $mol_filler_filler_lines__83 = $mol_type_enforce<
		`Mauris vitae nisi at sem facilisis semper ac in est. `
		,
		string
	>
	type $mol_filler_filler_lines__84 = $mol_type_enforce<
		`Vivamus fermentum semper porta. `
		,
		string
	>
	type $mol_filler_filler_lines__85 = $mol_type_enforce<
		`Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. `
		,
		string
	>
	type $mol_filler_filler_lines__86 = $mol_type_enforce<
		`Maecenas convallis ullamcorper ultricies. `
		,
		string
	>
	type $mol_filler_filler_lines__87 = $mol_type_enforce<
		`Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. `
		,
		string
	>
	type $mol_filler_filler_lines__88 = $mol_type_enforce<
		`Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. `
		,
		string
	>
	type $mol_filler_filler_lines__89 = $mol_type_enforce<
		`Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. `
		,
		string
	>
	type $mol_filler_filler_lines__90 = $mol_type_enforce<
		`Fusce eget orci a orci congue vestibulum. `
		,
		string
	>
	type $mol_filler_filler_lines__91 = $mol_type_enforce<
		`Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. `
		,
		string
	>
	type $mol_filler_filler_lines__92 = $mol_type_enforce<
		`Curabitur venenatis pulvinar tellus gravida ornare. `
		,
		string
	>
	type $mol_filler_filler_lines__93 = $mol_type_enforce<
		`Sed et erat faucibus nunc euismod ultricies ut id justo. `
		,
		string
	>
	type $mol_filler_filler_lines__94 = $mol_type_enforce<
		`Nullam cursus suscipit nisi, et ultrices justo sodales nec. `
		,
		string
	>
	type $mol_filler_filler_lines__95 = $mol_type_enforce<
		`Fusce venenatis facilisis lectus ac semper. `
		,
		string
	>
	type $mol_filler_filler_lines__96 = $mol_type_enforce<
		`Aliquam at massa ipsum. `
		,
		string
	>
	type $mol_filler_filler_lines__97 = $mol_type_enforce<
		`Quisque bibendum purus convallis nulla ultrices ultricies. `
		,
		string
	>
	type $mol_filler_filler_lines__98 = $mol_type_enforce<
		`Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. `
		,
		string
	>
	type $mol_filler_filler_lines__99 = $mol_type_enforce<
		`Fusce vel volutpat elit. `
		,
		string
	>
	type $mol_filler_filler_lines__100 = $mol_type_enforce<
		`Nam sagittis nisi dui. `
		,
		string
	>
	type $mol_filler_filler_lines__101 = $mol_type_enforce<
		`Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. `
		,
		string
	>
	type $mol_filler_filler_lines__102 = $mol_type_enforce<
		`Etiam luctus porttitor lorem, sed suscipit est rutrum non. `
		,
		string
	>
	type $mol_filler_filler_lines__103 = $mol_type_enforce<
		`Curabitur lobortis nisl a enim congue semper. `
		,
		string
	>
	type $mol_filler_filler_lines__104 = $mol_type_enforce<
		`Aenean commodo ultrices imperdiet. `
		,
		string
	>
	type $mol_filler_filler_lines__105 = $mol_type_enforce<
		`Vestibulum ut justo vel sapien venenatis tincidunt. `
		,
		string
	>
	type $mol_filler_filler_lines__106 = $mol_type_enforce<
		`Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. `
		,
		string
	>
	type $mol_filler_filler_lines__107 = $mol_type_enforce<
		`Aliquam ut massa in turpis dapibus convallis. `
		,
		string
	>
	type $mol_filler_filler_lines__108 = $mol_type_enforce<
		`Praesent elit lacus, vestibulum at malesuada et, ornare et est. `
		,
		string
	>
	type $mol_filler_filler_lines__109 = $mol_type_enforce<
		`Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. `
		,
		string
	>
	type $mol_filler_filler_lines__110 = $mol_type_enforce<
		`Mauris ut placerat justo. `
		,
		string
	>
	type $mol_filler_filler_lines__111 = $mol_type_enforce<
		`Mauris in ultricies enim. `
		,
		string
	>
	type $mol_filler_filler_lines__112 = $mol_type_enforce<
		`Quisque nec est eleifend nulla ultrices egestas quis ut quam. `
		,
		string
	>
	type $mol_filler_filler_lines__113 = $mol_type_enforce<
		`Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. `
		,
		string
	>
	type $mol_filler_filler_lines__114 = $mol_type_enforce<
		`Cras quis ligula sem, vel elementum mi. `
		,
		string
	>
	type $mol_filler_filler_lines__115 = $mol_type_enforce<
		`Phasellus non ullamcorper urna. `
		,
		string
	>
	type $mol_filler_filler_lines__116 = $mol_type_enforce<
		`Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. `
		,
		string
	>
	type $mol_filler_filler_lines__117 = $mol_type_enforce<
		`In euismod ultrices facilisis. `
		,
		string
	>
	type $mol_filler_filler_lines__118 = $mol_type_enforce<
		`Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. `
		,
		string
	>
	type $mol_filler_filler_lines__119 = $mol_type_enforce<
		`Proin quis dictum nisl. `
		,
		string
	>
	type $mol_filler_filler_lines__120 = $mol_type_enforce<
		`Morbi id quam sapien, sed vestibulum sem. `
		,
		string
	>
	type $mol_filler_filler_lines__121 = $mol_type_enforce<
		`Duis elementum rutrum mauris sed convallis. `
		,
		string
	>
	type $mol_filler_filler_lines__122 = $mol_type_enforce<
		`Proin vestibulum magna mi. `
		,
		string
	>
	type $mol_filler_filler_lines__123 = $mol_type_enforce<
		`Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. `
		,
		string
	>
	type $mol_filler_filler_lines__124 = $mol_type_enforce<
		`Sed non tortor sodales quam auctor elementum. `
		,
		string
	>
	type $mol_filler_filler_lines__125 = $mol_type_enforce<
		`Donec hendrerit nunc eget elit pharetra pulvinar. `
		,
		string
	>
	type $mol_filler_filler_lines__126 = $mol_type_enforce<
		`Suspendisse id tempus tortor. `
		,
		string
	>
	type $mol_filler_filler_lines__127 = $mol_type_enforce<
		`Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. `
		,
		string
	>
	type $mol_filler_filler_lines__128 = $mol_type_enforce<
		`Donec vel. `
		,
		string
	>
	export class $mol_filler extends $mol_paragraph {
		filler_lines( ): readonly(string)[]
		min_symbols( ): number
		sub( ): ReturnType< $mol_filler['filler_lines'] >
	}
	
}

//# sourceMappingURL=filler.view.tree.d.ts.map
declare namespace $ {

	type $mol_link__arg_hyoo_toys_details_1 = $mol_type_enforce<
		({ 
			'toy': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_hyoo_toys_details_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_image__uri_hyoo_toys_details_3 = $mol_type_enforce<
		ReturnType< $hyoo_toys_details['photo_uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_image__style_hyoo_toys_details_4 = $mol_type_enforce<
		({ 
			'filter': ReturnType< $hyoo_toys_details['photo_filter'] >,
		}) 
		,
		ReturnType< $mol_image['style'] >
	>
	type $mol_view__sub_hyoo_toys_details_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_unit_money__valueOf_hyoo_toys_details_6 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_unit_money['valueOf'] >
	>
	type $mol_cost__value_hyoo_toys_details_7 = $mol_type_enforce<
		ReturnType< $hyoo_toys_details['price'] >
		,
		ReturnType< $mol_cost['value'] >
	>
	type $mol_button_major__sub_hyoo_toys_details_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_link__uri_hyoo_toys_details_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_hyoo_toys_details_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_view__sub_hyoo_toys_details_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_hyoo_toys_details_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_hyoo_toys_details_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_hyoo_toys_details_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_card__sub_hyoo_toys_details_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['sub'] >
	>
	type $mol_row__sub_hyoo_toys_details_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $hyoo_toys_details extends $mol_page {
		Close_icon( ): $mol_icon_close
		Close( ): $mol_link
		photo_uri( ): string
		photo_filter( ): string
		Photo( ): $mol_image
		Image( ): $mol_view
		buy( ): string
		price( ): $mol_unit_money
		Price( ): $mol_cost
		Buy_button( ): $mol_button_major
		Buy_link( ): $mol_link
		type( ): string
		Type( ): $mol_view
		size_prefix( ): string
		size( ): string
		Size( ): $mol_view
		reviews_prefix( ): string
		reviews( ): number
		Reviews( ): $mol_view
		Parameters( ): $mol_view
		Info( ): $mol_card
		Main( ): $mol_row
		Description( ): $mol_filler
		toy( ): $hyoo_toys_toy
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=details.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__mod_ctrl_hyoo_toys_1 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key_hyoo_toys_2 = $mol_type_enforce<
		({ 
			F( next?: ReturnType< $hyoo_toys['search'] > ): ReturnType< $hyoo_toys['search'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_switch__value_hyoo_toys_3 = $mol_type_enforce<
		ReturnType< $hyoo_toys['filter_type'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options_hyoo_toys_4 = $mol_type_enforce<
		ReturnType< $hyoo_toys['filter_type_options'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_switch__value_hyoo_toys_5 = $mol_type_enforce<
		ReturnType< $hyoo_toys['filter_size'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options_hyoo_toys_6 = $mol_type_enforce<
		ReturnType< $hyoo_toys['filter_size_options'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_check__checked_hyoo_toys_7 = $mol_type_enforce<
		ReturnType< $hyoo_toys['filter_popular'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__title_hyoo_toys_8 = $mol_type_enforce<
		ReturnType< $hyoo_toys['filter_popular_title'] >
		,
		ReturnType< $mol_check['title'] >
	>
	type $mol_list__rows_hyoo_toys_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_switch__value_hyoo_toys_10 = $mol_type_enforce<
		ReturnType< $hyoo_toys['sort_key'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options_hyoo_toys_11 = $mol_type_enforce<
		ReturnType< $hyoo_toys['sort_items'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_page__title_hyoo_toys_12 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__body_hyoo_toys_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $hyoo_toys_catalog__title_hyoo_toys_14 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_toys_catalog['title'] >
	>
	type $hyoo_toys_catalog__toys_hyoo_toys_15 = $mol_type_enforce<
		ReturnType< $hyoo_toys['toys'] >
		,
		ReturnType< $hyoo_toys_catalog['toys'] >
	>
	type $hyoo_toys_catalog__toy_hyoo_toys_16 = $mol_type_enforce<
		ReturnType< $hyoo_toys['toy'] >
		,
		ReturnType< $hyoo_toys_catalog['toy'] >
	>
	type $hyoo_toys_catalog__filter_type_hyoo_toys_17 = $mol_type_enforce<
		ReturnType< $hyoo_toys['filter_type'] >
		,
		ReturnType< $hyoo_toys_catalog['filter_type'] >
	>
	type $hyoo_toys_catalog__filter_size_hyoo_toys_18 = $mol_type_enforce<
		ReturnType< $hyoo_toys['filter_size'] >
		,
		ReturnType< $hyoo_toys_catalog['filter_size'] >
	>
	type $hyoo_toys_catalog__filter_popular_hyoo_toys_19 = $mol_type_enforce<
		ReturnType< $hyoo_toys['filter_popular'] >
		,
		ReturnType< $hyoo_toys_catalog['filter_popular'] >
	>
	type $hyoo_toys_catalog__sort_key_hyoo_toys_20 = $mol_type_enforce<
		ReturnType< $hyoo_toys['sort_key'] >
		,
		ReturnType< $hyoo_toys_catalog['sort_key'] >
	>
	type $hyoo_toys_details__toy_hyoo_toys_21 = $mol_type_enforce<
		ReturnType< $hyoo_toys['toy_current'] >
		,
		ReturnType< $hyoo_toys_details['toy'] >
	>
	export class $hyoo_toys extends $mol_book2 {
		search( next?: any ): any
		Hotkey( ): $mol_hotkey
		filter_type( next?: string ): string
		filter_type_option_all( ): string
		filter_type_options( ): Record<string, string>
		Filter_type( ): $mol_switch
		filter_size( next?: string ): string
		filter_size_option_all( ): string
		filter_size_options( ): Record<string, string>
		Filter_size( ): $mol_switch
		filter_popular( next?: boolean ): boolean
		filter_popular_title( ): string
		Filter_popular( ): $mol_check
		Filter_flags( ): $mol_list
		sort_key( next?: string ): string
		sort_option_price( ): string
		sort_option_size( ): string
		sort_option_title( ): string
		sort_items( ): Record<string, string>
		Sort( ): $mol_switch
		toys( ): readonly(any)[]
		toy_current( ): any
		attr( ): ({ 
			'mol_theme': string,
		})  & ReturnType< $mol_book2['attr'] >
		toy( id: any): $hyoo_toys_toy
		Placeholder( ): any
		plugins( ): readonly(any)[]
		Filters( ): $mol_page
		Catalog( ): $hyoo_toys_catalog
		Details( id: any): $hyoo_toys_details
	}
	
}

//# sourceMappingURL=toys.view.tree.d.ts.map
export = $;
//# sourceMappingURL=web.d.ts.map
