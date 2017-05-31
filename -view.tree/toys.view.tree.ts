namespace $ { export class $my_toys_toy extends $mol_object {

	/// image \
	image() {
		return ""
	}

	/// title \
	title() {
		return ""
	}

	/// type \
	type() {
		return ""
	}

	/// size \
	size() {
		return ""
	}

	/// price 0
	price() {
		return 0
	}

	/// count 0
	count() {
		return 0
	}

	/// id \
	id() {
		return ""
	}

} }

namespace $ { export class $my_toys extends $mol_book {

	/// catalog_title @ \Toys
	catalog_title() {
		return $mol_locale.text( this.locale_contexts() , "catalog_title" )
	}

	/// Icon_chevron $mol_icon_chevron
	@ $mol_mem()
	Icon_chevron() {
		return new $mol_icon_chevron()
	}

	/// Show_tools $mol_check sub / <= Icon_chevron
	@ $mol_mem()
	Show_tools() {
		return new $mol_check().setup( obj => {
			obj.sub = () => [].concat( this.Icon_chevron() )
		} )
	}

	/// filter?val \
	@ $mol_mem()
	filter( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Search $mol_search query?val <=> filter?val
	@ $mol_mem()
	Search() {
		return new $mol_search().setup( obj => {
			obj.query = ( val? : any ) => this.filter( val )
		} )
	}

	/// filter_type *
	/// 	mass \Массажер
	/// 	vibr \Виброколонка
	/// 	vint \Винтилятор
	/// 	shoes \Обувь
	/// 	suit \Костюмы
	/// 	lamp \Лампа
	/// 	mesh \Мешок
	filter_type() {
		return ({
			"mass" :  "Массажер" ,
			"vibr" :  "Виброколонка" ,
			"vint" :  "Винтилятор" ,
			"shoes" :  "Обувь" ,
			"suit" :  "Костюмы" ,
			"lamp" :  "Лампа" ,
			"mesh" :  "Мешок" ,
		})
	}

	/// Type $mol_select
	/// 	value \Все типы
	/// 	dictionary <= filter_type
	@ $mol_mem()
	Type() {
		return new $mol_select().setup( obj => { 
			obj.value = () => "Все типы"
			obj.dictionary = () => this.filter_type()
		} )
	}

	/// filter_size *
	/// 	xs \XS
	/// 	s \S
	/// 	m \M
	/// 	l \L
	/// 	xl \XL
	filter_size() {
		return ({
			"xs" :  "XS" ,
			"s" :  "S" ,
			"m" :  "M" ,
			"l" :  "L" ,
			"xl" :  "XL" ,
		})
	}

	/// Filter $mol_select
	/// 	value \Размеры
	/// 	dictionary <= filter_size
	@ $mol_mem()
	Filter() {
		return new $mol_select().setup( obj => {
			obj.value = () => "Размеры"
			obj.dictionary = () => this.filter_size()
		} )
	}

	/// spam_label @ \Только популярное
	spam_label() {
		return $mol_locale.text( this.locale_contexts() , "spam_label" )
	}

	/// Popular $mol_check_box label / <= spam_label
	@ $mol_mem()
	Popular() {
		return new $mol_check_box().setup( obj => {
			obj.label = () => [].concat( this.spam_label() )
		} )
	}

	/// sort_items *
	/// 	price \По цене
	/// 	size \По размеру
	/// 	popular \По популярности
	/// 	alphabet \По алфавиту
	sort_items() {
		return ({
			"price" :  "По цене" ,
			"size" :  "По размеру" ,
			"popular" :  "По популярности" ,
			"alphabet" :  "По алфавиту" ,
		})
	}

	/// Sort_labeler $mol_select
	/// 	value \По цене
	/// 	dictionary <= sort_items
	@ $mol_mem()
	Sort_labeler() {
		return new $mol_select().setup( obj => {
			obj.value = () => "По цене"
			obj.dictionary = () => this.sort_items()
		} )
	}

	/// Icon $mol_icon_sort_asc
	@ $mol_mem()
	Icon() {
		return new $mol_icon_sort_asc()
	}

	/// Sort_checkbox $mol_check sub / <= Icon
	@ $mol_mem()
	Sort_checkbox() {
		return new $mol_check().setup( obj => {
			obj.sub = () => [].concat( this.Icon() )
		} )
	}

	/// Bar_sort $mol_bar sub /
	/// 	<= Sort_labeler
	/// 	<= Sort_checkbox
	@ $mol_mem()
	Bar_sort() {
		return new $mol_bar().setup( obj => {
			obj.sub = () => [].concat( this.Sort_labeler() , this.Sort_checkbox() )
		} )
	}

	/// Tools_row $mol_row sub /
	/// 	<= Search
	/// 	<= Type
	/// 	<= Filter
	/// 	<= Popular
	/// 	<= Bar_sort
	@ $mol_mem()
	Tools_row() {
		return new $mol_row().setup( obj => {
			obj.sub = () => [].concat( this.Search() , this.Type() , this.Filter() , this.Popular() , this.Bar_sort() )
		} )
	}

	/// Tools_cards $mol_card sub / <= Tools_row
	@ $mol_mem()
	Tools_cards() {
		return new $mol_card().setup( obj => { 
			obj.sub = () => [].concat( this.Tools_row() )
		} )
	}

	/// Tools_filter $mol_float sub / <= Tools_cards
	@ $mol_mem()
	Tools_filter() {
		return new $mol_float().setup( obj => { 
			obj.sub = () => [].concat( this.Tools_cards() )
		} )
	}

	/// toy_cards /
	toy_cards() {
		return [] as any[]
	}

	/// Goods $mol_row sub <= toy_cards
	@ $mol_mem()
	Goods() {
		return new $mol_row().setup( obj => { 
			obj.sub = () => this.toy_cards()
		} )
	}

	/// Catalog $mol_page 
	/// 	title <= catalog_title 
	/// 	minimal_width 600 
	/// 	tools /
	/// 		<= Show_tools
	/// 		- <= Catalog_close
	/// 	body / 
	/// 		<= Tools_filter
	/// 		<= Goods
	@ $mol_mem()
	Catalog() {
		return new $mol_page().setup( obj => { 
			obj.title = () => this.catalog_title()
			obj.minimal_width = () => 600
			obj.tools = () => [].concat( this.Show_tools() )
			obj.body = () => [].concat( this.Tools_filter() , this.Goods() )
		} )
	}

	/// pages / <= Catalog
	pages() {
		return [].concat( this.Catalog() )
	}

	/// toy_arg!id *
	toy_arg( id : any ) {
		return ({
		})
	}

	/// toy_title!id \
	toy_title( id : any ) {
		return ""
	}

	/// Toy_title!id $mol_view sub / <= toy_title!id
	@ $mol_mem_key()
	Toy_title( id : any ) {
		return new $mol_view().setup( obj => {
			obj.sub = () => [].concat( this.toy_title(id) )
		} )
	}

	/// toy_type!id \
	toy_type( id : any ) {
		return ""
	}

	/// Toy_type!id $mol_view sub / <= toy_type!id
	@ $mol_mem_key()
	Toy_type( id : any ) {
		return new $mol_view().setup( obj => {
			obj.sub = () => [].concat( this.toy_type(id) )
		} )
	}

	/// toy_image!id \
	toy_image( id : any ) {
		return ""
	}

	/// Toy_image!id $mol_image 
	/// 	uri <= toy_image!id 
	/// 	- style * filter \hue-rotate(50deg)
	@ $mol_mem_key()
	Toy_image( id : any ) {
		return new $mol_image().setup( obj => { 
			obj.uri = () => this.toy_image(id)
		} )
	}

	/// toy_price!id \
	toy_price( id : any ) {
		return ""
	}

	/// Toy_price!id $mol_view sub / <= toy_price!id
	@ $mol_mem_key()
	Toy_price( id : any ) {
		return new $mol_view().setup( obj => { 
			obj.sub = () => [].concat( this.toy_price(id) )
		} )
	}

	/// toy_size_prefix @ \Size:
	toy_size_prefix() {
		return $mol_locale.text( this.locale_contexts() , "toy_size_prefix" )
	}

	/// toy_size!id \
	toy_size( id : any ) {
		return ""
	}

	/// Toy_size!id $mol_view sub /
	/// 	<= toy_size_prefix
	/// 	<= toy_size!id
	@ $mol_mem_key()
	Toy_size( id : any ) {
		return new $mol_view().setup( obj => { 
			obj.sub = () => [].concat( this.toy_size_prefix() , this.toy_size(id) )
		} )
	}

	/// toy_count_prefix @ \Selled:
	toy_count_prefix() {
		return $mol_locale.text( this.locale_contexts() , "toy_count_prefix" )
	}

	/// toy_count!id 0
	toy_count( id : any ) {
		return 0
	}

	/// Toy_count!id $mol_view sub / 
	/// 	<= toy_count_prefix 
	/// 	<= toy_count!id
	@ $mol_mem_key()
	Toy_count( id : any ) {
		return new $mol_view().setup( obj => { 
			obj.sub = () => [].concat( this.toy_count_prefix() , this.toy_count(id) )
		} )
	}

	/// Toy_detail!id $mol_view sub /
	/// 	<= Toy_price!id
	/// 	<= Toy_size!id
	/// 	<= Toy_count!id
	@ $mol_mem_key()
	Toy_detail( id : any ) {
		return new $mol_view().setup( obj => {
			obj.sub = () => [].concat( this.Toy_price(id) , this.Toy_size(id) , this.Toy_count(id) )
		} )
	}

	/// Toy_option!id $mol_view sub /
	/// 	<= Toy_image!id
	/// 	<= Toy_detail!id
	@ $mol_mem_key()
	Toy_option( id : any ) {
		return new $mol_view().setup( obj => {
			obj.sub = () => [].concat( this.Toy_image(id) , this.Toy_detail(id) )
		} )
	}

	/// Toy_card!id $mol_link 
	/// 	minimal_width 156
	/// 	minimal_height 156
	/// 	arg <= toy_arg!id 
	/// 	sub /
	/// 		<= Toy_title!id
	/// 		<= Toy_type!id
	/// 		<= Toy_option!id
	@ $mol_mem_key()
	Toy_card( id : any ) {
		return new $mol_link().setup( obj => { 
			obj.minimal_width = () => 156
			obj.minimal_height = () => 156
			obj.arg = () => this.toy_arg(id)
			obj.sub = () => [].concat( this.Toy_title(id) , this.Toy_type(id) , this.Toy_option(id) )
		} )
	}

	/// toy_id!id \
	toy_id( id : any ) {
		return ""
	}

	/// toy!id $my_toys_toy id <= toy_id!id
	@ $mol_mem_key()
	toy( id : any ) {
		return new $my_toys_toy().setup( obj => { 
			obj.id = () => this.toy_id(id)
		} )
	}

} }

