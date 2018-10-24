namespace $.$$ {
	
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

		keydown( event? : KeyboardEvent ) {

			if( event.ctrlKey && event.keyCode === $mol_keyboard_code.F ) {
				event.preventDefault()
				this.Catalog().Filter_title().Suggest().Filter().focused( true )
			}

		}
		
	}
	
}
