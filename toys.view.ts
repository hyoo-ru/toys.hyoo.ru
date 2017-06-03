namespace $.$mol {
	
	export class $my_toys extends $.$my_toys {
		
		toy( id : string ) {
			return $my_toys_toy.item( id )
		}
		
		toys() {
			return $my_toys_toy.all()
		}
		
		toy_current() {
			const id = $mol_state_arg.value( 'toy' )
			return id && this.toy( id )
		}
		
		pages() {
			return [
				this.Catalog() ,
				this.toy_current() ? this.Details() : null ,
			]
		}
		
	}
	
}
