namespace $.$mol {
	
	export class $my_toys_catalog extends $.$my_toys_catalog {
		
		@ $mol_mem()
		size_average() {
			const toys = this.toys()
			
			const average = toys.reduce( ( average , toy )=> average + toy.price() , 0 ) / toys.length
			
			return average
		}
		
		@ $mol_mem()
		filter_type_options() {
			const dict = { ... super.filter_type_options() }
			this.toys().forEach( toy => {
				dict[ toy.type() ] = toy.type()
			} )
			return dict
		}
		
		@ $mol_mem()
		filter_type( next? : string ) {
			return $mol_state_arg.value( 'type' , next ) || 'all'
		}

		@ $mol_mem()
		toys_filtered_by_type() {
			const filter = this.filter_type()
			const toys = this.toys()

			if( filter === 'all' ) return toys

			return toys.filter( toy => toy.type() === filter )
		}

		@ $mol_mem()
		filter_size_options() {
			const dict = { ... super.filter_size_options() }
			this.toys().forEach( toy => {
				dict[ toy.size() ] = toy.size()
			} )
			return dict
		}
		
		@ $mol_mem()
		filter_size( next? : string ) {
			return $mol_state_arg.value( 'size' , next ) || 'all'
		}

		@ $mol_mem()
		toys_filtered_by_size() {
			const filter = this.filter_size()
			const toys = this.toys_filtered_by_type()

			if( filter === 'all' ) return toys

			return toys.filter( toy => toy.size() === filter )
		}
		
		@ $mol_mem()
		filter_title( next? : string ) {
			return $mol_state_arg.value( 'title' , next ) || ''
		}

		@ $mol_mem()
		toys_filtered_by_title() {
			const filter = this.filter_title().toLowerCase()
			const toys = this.toys_filtered_by_size()

			if( !filter ) return toys

			return toys.filter( toy => {
				return toy.title().toLowerCase().match( filter )
			})
		}
		
		@ $mol_mem()
		filter_popular( next? : boolean ) {
			return $mol_state_arg.value( 'popular' , ( next === undefined ) ? undefined : ( next ? '' : null ) ) === ''
		}

		@ $mol_mem()
		toys_filtered_by_popularity() {
			const filter = this.filter_popular()
			const toys = this.toys_filtered_by_title()

			if( !filter ) return toys

			const average = this.reviews_average()
			return toys.filter( toy => toy.reviews() >= average )
		}
		
		@ $mol_mem()
		toys_filtered() {
			return this.toys_filtered_by_popularity()
		}
		
		@ $mol_mem()
		toys_sorted() {
			return this.toys_filtered().slice().sort( this.sorter() )
		}
		
		@ $mol_mem()
		sort_key( next? : string ) {
			return $mol_state_arg.value( 'sort' , next ) || 'price'
		}

		@ $mol_mem()
		sorter() {
			return {
				price : ( a : $my_toys_toy , b : $my_toys_toy )=> a.price().valueOf() - b.price().valueOf() ,
				title : ( a : $my_toys_toy , b : $my_toys_toy )=> a.title() < b.title() ? -1 : a.title() > b.title() ? 1 : 0,
				size : ( a : $my_toys_toy , b : $my_toys_toy )=> a.size() < b.size() ? -1 : a.size() > b.size() ? 1 : 0,
			}[ this.sort_key() ]
		}
		
		@ $mol_mem()
		tools_visible( next? : boolean ) {
			const next2 = $mol_state_session.value( 'tools_visible' , next )
			return ( next2 === undefined ) ? true : next2
		}
		
		sub() {
			return [
				this.Head() ,
				this.tools_visible() ? this.Toolbar() : null ,
				this.Body() ,
			]
		}
		
		toy_cards() {
			return this.toys_sorted().map( toy => this.Toy_card( toy.id() ) )
		}
		
		toy_image( id : string ) {
			return this.toy( id ).image()
		}
		
		toy_title( id : string ) {
			return this.toy( id ).title()
		}
		
		toy_type( id : string ) {
			return this.toy( id ).type()
		}

		toy_size( id : string ) {
			return this.toy( id ).size()
		}

		toy_price( id : string ) {
			return this.toy( id ).price()
		}
		
		toy_reviews( id : string ) {
			return this.toy( id ).reviews()
		}
		
		reviews_average() {
			const toys = this.toys()
			return toys.reduce( ( sum , toy )=> sum + toy.reviews() , 0 ) / toys.length
		}
		
		toy_arg( id : string ) {
			return { toy : id }
		}
		
		toy_hue( id : string ) {
			return this.toy( id ).hue()
		}
		
		toy_image_filter( id : string ) {
			return `invert() sepia() invert() saturate(200%) hue-rotate(${ this.toy_hue( id ) }deg)`
		}
		
	}
	
}
