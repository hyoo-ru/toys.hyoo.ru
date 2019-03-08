namespace $ {
	
	type $hyoo_toys_toy_data = {
		title : string
		type : string
		price : number
		size : string
		hue : number
	}
	
	export class $hyoo_toys_toy extends $mol_object {
		
		@ $mol_mem
		static data() {
			return $mol_http.resource( 'my/toys/toy/toy_data.json' ).json() as { [ id : string ] : $hyoo_toys_toy_data }
		}
		
		@ $mol_mem
		static all() {
			return Object.keys( this.data() ).map( id => this.item( id ) )
		}
		
		@ $mol_mem_key
		static item( id : string ) {
			const next = new this
			next.id = $mol_const( id )
			return next
		}
		
		@ $mol_mem
		static luck() {
			return Number( $mol_state_arg.value( 'luck' ) ) || 1
		}
		
		id() {
			return ''
		}
		
		@ $mol_mem
		data() {
			return $hyoo_toys_toy.data()[ this.id() ]
		}
		
		@ $mol_mem
		image() {
			return `my/toys/toy/thumbs/${ this.id().substring( 0 , 2 ) }.jpg`
		}
		
		title() {
			return this.data().title
		}

		type() {
			return this.data().type
		}
		
		size() {
			return this.data().size
		}

		hue() {
			return this.data().hue
		}
		
		@ $mol_mem
		price() {
			return new $mol_unit_money_rur( this.data().price )
		}
		
		@ $mol_mem
		seed() {
			return Math.ceil( 1496400563 - Math.random() * 1000 )
		}
		
		@ $mol_mem
		reviews() {
			const count = Math.ceil( $mol_state_time.now( 10000 ) / 1000 - this.seed()  )
			if( Math.random() > $hyoo_toys_toy.luck() ) throw new Error( 'Request timeout' )
			return count
		}
		
	}
	
}
