namespace $ {
	
	export class $my_toys_toy extends $mol_object {
		
		@ $mol_mem()
		static protos() {
			return $mol_http.resource( '-/my/toys/toy/toys.json' ).json()
		}
		
		id() {
			return ''
		}
		
		@ $mol_mem()
		proto() {
			return $mol_stub_select_random( Object.keys( $my_toys_toy.protos() ) )
		}
		
		@ $mol_mem()
		image() {
			return `-/my/toys/toy/thumbs/${ this.proto() }.jpg`
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
		
		@ $mol_mem()
		size() {
			var arr = [ "XS" , "S" , "M" , "L" , "XL" ]
			var rang = Math.floor(Math.random() * arr.length)
			return arr[rang]
		}

		@ $mol_mem()
		price() {
			return new $mol_unit_money_rur( Math.ceil( Math.random() * (5000 - 300 ) + 300 ) )
		}
		
		@ $mol_mem()
		seed() {
			return Math.ceil( 1496398563 - Math.random() * 1000 )
		}
		
		@ $mol_mem()
		luck() {
			return Number( $mol_state_arg.value( 'luck' ) ) || 1
		}
		
		@ $mol_mem()
		count() {
			const count = Math.ceil( $mol_state_time.now( Math.random() * 1000 ) / 1000 - this.seed()  )
			if( Math.random() > this.luck() ) throw new Error( 'Request timeout' )
			return count
		}
		
		hue() {
			return this.seed() % 360
		}
		
	}
	
}
