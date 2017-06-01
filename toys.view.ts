namespace $.$mol {

	export class $my_toys_toy extends  $.$my_toys_toy {
		
		@ $mol_mem()
		static protos() {
			return $mol_http.resource( '-/my/toys/toys.json' ).json()
		}
		
		@ $mol_mem()
		proto() {
			return $mol_stub_select_random( Object.keys( $my_toys_toy.protos() ) )
		}
		
		@ $mol_mem()
		image() {
			return `-/my/toys/thumbs/${ this.proto() }.jpg`
		}
		
		@ $mol_mem()
		title() {
			const title = $my_toys_toy.protos()[ this.proto() ].title
			return `${ title } #${ this.hue() }`
		}

		@ $mol_mem()
		type() {
			return $my_toys_toy.protos()[ this.proto() ].type
		}
		
		size() {
			var arr = ["XS","S","M","L","XL"]
			var rang = Math.floor(Math.random() * arr.length)
			return arr[rang]
		}

		@ $mol_mem()
		price() {
			return Math.ceil( Math.random() * (5000 - 300 ) + 300 )
		}
		
		@ $mol_mem()
		seed() {
			return Math.ceil( 1495357170 - Math.random() * 1000 )
		}
		
		@ $mol_mem()
		count() {
			return Math.ceil( $mol_state_time.now( Math.random() * 1000 ) / 1000 - this.seed()  )
		}
		
		hue() {
			return this.seed() % 360
		}
		
	}
	
	export class $my_toys_catalog extends $.$my_toys_catalog {
		
		toys_count() {
			return 10000
		}
		
		@ $mol_mem()
		toys() {
			return $mol_range_in({
				item : id => this.toy( String( id ) ) ,
				length : this.toys_count() ,
			}).valueOf() as $my_toys_toy[]
		}
		
		@ $mol_mem()
		size_average() {
			const toys = this.toys()
			
			const average = toys.reduce( ( average , toy )=> average + toy.price() , 0 ) / toys.length
			
			return average
		}

		@ $mol_mem()
		toys_filtered() {
			const filter = this.filter_title().toLowerCase()
			const toys = this.toys()

			if( !filter ) return this.toys()

			return this.toys().filter( toy => {
				return toy.title().toLowerCase().match( filter )
			})
		}
		
		sub() {
			return [
				this.Head() ,
				this.tools_visible() ? this.Toolbar() : null ,
				this.Body() ,
			]
		}
		
		toy_cards() {
			return this.toys_filtered().map( toy => this.Toy_card( toy.id() ) )
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
			return this.toy( id ).price().toLocaleString() + ' ₽'
		}
		
		toy_count( id : string ) {
			return this.toy( id ).count()
		}
		
		toy_arg( id : string ) {
			return { toy : id }
		}
		
		toy_id( id : string ) {
			return id
		}
		
		toy_hue( id : string ) {
			return this.toy( id ).hue()
		}
		
		toy_image_filter( id : string ) {
			return `invert() sepia() invert() saturate(200%) hue-rotate(${ this.toy_hue( id ) }deg)`
		}
		
	}
	
}
