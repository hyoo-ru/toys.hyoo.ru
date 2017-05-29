namespace $.$mol {

	export class $my_toys_toy extends  $.$my_toys_toy {
		
		@ $mol_mem()
		static protos() {
			var prod_date = $mol_http_resource.item( 'toys.json' ).text()
			var prod = JSON.parse(prod_date)
			return prod
		}
		
		@ $mol_mem()
		proto() {
			return $mol_stub_select_random( Object.keys( $my_toys_toy.protos() ) )
		}
		
		@ $mol_mem()
			image( next = `/my/toys/thumbs/${ this.proto() }.jpg` ) {
			return next
		}
		
		@ $mol_mem()
			title( next = $my_toys_toy.protos()[ this.proto() ].title ) {
			return next
		}

		@ $mol_mem()
			type( next = $my_toys_toy.protos()[ this.proto() ].type ) {
			return next
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
		
	}
	
	export class $my_toys extends $.$my_toys {
		
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
		
		toys_filtered() {
			const average = this.size_average()
			return this.toys().filter( toy => toy.price() >= average )
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
			return this.toy( id ).price()
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
		
	}
	
}
