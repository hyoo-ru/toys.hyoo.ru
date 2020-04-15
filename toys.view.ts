namespace $.$$ {
	
	export class $hyoo_toys extends $.$hyoo_toys {
		
		toy( id : string ) {
			return $hyoo_toys_toy.item( id )
		}
		
		toys() {
			return $hyoo_toys_toy.all()
		}
		
		toy_current() {
			const id = $mol_state_arg.value( 'toy' )
			if( !id ) return null
			return this.toy( id )
		}
		
		pages() {
			return [
				this.Filters() ,
				this.Catalog() ,
				this.toy_current() ? this.Details() : null ,
			]
		}

		keydown( event : KeyboardEvent ) {

			if( event.ctrlKey && event.keyCode === $mol_keyboard_code.F ) {
				event.preventDefault()
				this.Catalog().Filter_title().Suggest().Filter().focused( true )
			}

		}

		@ $mol_mem
		filter_type( next? : string ) {
			return $mol_state_arg.value( 'type' , next ) || 'all'
		}
		
		@ $mol_mem
		filter_type_options() {
			const dict = { ... super.filter_type_options() }
			this.toys().forEach( toy => {
				dict[ toy.type() ] = toy.type()
			} )
			return dict
		}
		
		@ $mol_mem
		filter_size( next? : string ) {
			return $mol_state_arg.value( 'size' , next ) || 'all'
		}

		@ $mol_mem
		filter_size_options() {
			const dict = { ... super.filter_size_options() }
			this.toys().forEach( toy => {
				dict[ toy.size() ] = toy.size()
			} )
			return dict
		}

		@ $mol_mem
		filter_popular( next? : boolean ) {
			return $mol_state_arg.value( 'popular' , ( next === undefined ) ? undefined : ( next ? '' : null ) ) === ''
		}
		
		@ $mol_mem
		sort_key( next? : string ) {
			return $mol_state_arg.value( 'sort' , next ) || 'price'
		}
		
	}
	
}
