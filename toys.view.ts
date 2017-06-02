namespace $.$mol {
	
	export class $my_toys extends $.$my_toys {
		
		toy_id( id : string ) {
			return id
		}
		
		@ $mol_mem()
		toys() {
			return $mol_range_in({
				item : id => this.toy( String( id ) ) ,
				length : this.toys_count() ,
			}).valueOf() as $my_toys_toy[]
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
