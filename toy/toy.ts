namespace $ {
	
	type $my_toys_toy_data = {
		title : string
		type : string
		price : number
		size : string
		hue : number
	}
	
	export class $my_toys_toy extends $mol_object {
		
		@ $mol_mem()
		static data() {
			return $mol_http.resource( '-/my/toys/toy/toy_data.json' ).json() as { [ id : string ] : $my_toys_toy_data }
		}
		
		@ $mol_mem()
		static all() {
			return Object.keys( this.data() ).map( id => this.item( id ) )
		}
		
		@ $mol_mem_key()
		static item( id : string ) {
			const next = new this
			next.id = $mol_const( id )
			return next
		}
		
		id() {
			return ''
		}
		
		@ $mol_mem()
		data() {
			return $my_toys_toy.data()[ this.id() ]
		}
		
		@ $mol_mem()
		image() {
			return `-/my/toys/toy/thumbs/${ this.id().substring( 0 , 2 ) }.jpg`
		}
		
		@ $mol_mem()
		title() {
			const title = this.data().title
			return `${ title } #${ this.hue() }`
		}

		@ $mol_mem()
		type() {
			return this.data().type
		}
		
		@ $mol_mem()
		size() {
			return this.data().size
		}

		@ $mol_mem()
		price() {
			return new $mol_unit_money_rur( this.data().price )
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
			return this.data().hue
		}
		
	}
	
}
